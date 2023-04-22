<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderNews></HeaderNews>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <FooterNews></FooterNews>
      </el-footer>
    </el-container>
    
    <el-backtop :right="100" :bottom="100"></el-backtop>
  </div>
</template>


<script>
import HeaderNews from '@/components/HeaderNews.vue';
import FooterNews from '@/components/FooterNews.vue';
// import HomeNews from '../HomeNews.vue';



export default {
  name: 'HomeIndex',
  //注册组件
  components: {
    HeaderNews,
    FooterNews,
    // HomeNews,
   
    
  },


}
</script>

<style lang="less" scoped>

</style>