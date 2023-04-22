<template>
  <el-card shadow="hover"> 
    <h4>西南大学---知识图谱实验室</h4>  
    <div class="content_news">
      {{formatText(content)}}
    </div>
    <el-space wrap>
    <el-tag class="ml-2" type="warning" v-for="i in 3" :key="i"
      >子链接标题属性</el-tag>
  </el-space>
  </el-card>
</template>

<script>
// import { ref } from 'vue';
export default {
  name: 'CardNewsItem',
  props:{
    content:{
      type:String,
      default:''
    }
  },
  setup(){
    
    const formatText = (text, length = 120, elipsis = "...") => {
      if (!text) return "";
      if (text.length > length) {
        return `${text.substr(0, length)}${elipsis}`;
      }
      return text;
    };
    return{
    
      formatText,
    }
  }

}
</script>

<style lang="less" scoped>
.content_news{
  margin: 2vh auto;
  font-size: 14px;
  color:rgba(0,0,0,0.5);
}

</style>