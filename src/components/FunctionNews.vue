<template>
  <div class="boxnews wrapper_box">
    <el-space direction="vertical" :size="30">
      <el-row class="row-bg function_box" justify="space-evenly">
      <el-col :span="6" >
          <el-card shadow="hover" @click="router_push_detailnes">
            事件分析
          </el-card>
      </el-col>
      <el-col :span="6" >
        <el-card shadow="hover" @click="router_push_analy">
            单篇新闻分析
          </el-card>
      </el-col>
      
    </el-row>

    
    <el-row class="row-bg function_box" justify="space-evenly">
      <el-col :span="6" >
        <el-card shadow="hover">
            体验单篇新闻在线分析
          </el-card>
      </el-col>
      <el-col :span="6" >
        <el-card shadow="hover">
            新闻订阅
          </el-card>
      </el-col>
      
    </el-row>
    </el-space>
    
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: "FunctionNews",
  setup() {
    const router = useRouter();
    const router_push_analy = ()=>{
      router.push('/home/analysis');
    }

    const router_push_detailnes = ()=>{
      router.push('/home/detailnews');
    }
    return {
      router_push_analy,
      router_push_detailnes,
      
    };
  },
};
</script>

<style lang="less" scoped>
.boxnews {
  margin: 3vh auto;
  // height: 20vh;
  width: 100vh;
  // background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  // line-height: 20vh;
  text-align: center;
}

.function_box{
  width: 100vh;

  .el-card{
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 400;
    border-radius: 5px;
    border: none;
    &:hover {
    transform: translateY(-5px);
    background-color: yellow;
    
  }
    
  }
  
}



.ep-bg-purple {
  background: #99a9bf;
}
.ep-bg-purple-light {
  background: #d3dce6;
}

</style>