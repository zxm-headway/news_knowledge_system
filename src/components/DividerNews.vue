<template>
  <el-divider content-position="center" class="divider_news wrapper_box" >---{{title}}---</el-divider
  >
</template>

<script>
import { toRefs } from "vue";
export default {
  name: "DividerNews",
  props: {
    title: String,
    
  },
  setup(props) {
    const { title} = toRefs(props)


    return {
      // eslint-disable-next-line vue/no-dupe-keys
      title,
      
    }
  },
  
};
</script>

<style>
.divider_news {
  margin-top: 10vh;
  margin: 10vh auto 10vh;
  width: 100vh;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #475669;
  opacity: 0.75;
}
</style>