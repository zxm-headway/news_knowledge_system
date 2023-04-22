import {createWebHashHistory,createRouter} from "vue-router"


const history = createWebHashHistory()

const routes = [
    {
        path: "/",
        redirect:'/home'
    },
    {
      // path: ""
      path: "/home",
      name: "Home",
      redirect: '/home/news',
      component: () => import("../views/HomeIndex/HomeIndex.vue"),
      children:[
        {
          path: "news",
          name: "News",
          component: () => import("../views/HomeNews.vue")
        },
        {
          path: "analysis",
          name: "Analysis",
          component: () => import("../views/AnalysisNews/AnalysisNews.vue")
    
        },
        {
          path: "detailnews",
          name: "DetailNews",
          component: () => import("../views/DetailNews/DetailNews.vue")
        },
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../components/LoginNews.vue")
    },
    

    
]
const router = createRouter({
    history,
    routes
})



export default router