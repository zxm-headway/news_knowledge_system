<template>
   <el-row>
    <el-col :span="12">
      <el-scrollbar height="60vh">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </el-scrollbar>
    </el-col>
    <el-col :span="12">
      <el-scrollbar height="60vh">
        <div class="important_sentence">重点句子</div>
         <p v-for="item in 5" :key="item" class="scrollbar-demo-item">{{ item }}</p>
         <div class="important_sentence">关键词云</div>
          <WordClound></WordClound>
         
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script >
import WordClound  from '@/components/WordClound.vue';

export default {
  name: "WordNewsVue",
  components: {
    WordClound,
  },
  setup() {
    return {};
  },
}
</script>

<style lang="less" scoped>
  .scroll_box{
    height: 60vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    overflow:auto;
  }
  .important_sentence_box{
    // height: 60vh;
    width: 100%;
    overflow:auto;
   
    
  }
  .important_sentence{
    height: 5vh;
    text-align: center;
    line-height: 5vh;
    font-size: 16px;
    font-weight: bold;
    // background-color: rgba(0, 0, 0, 0.3);
  }
  .scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 8px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

</style>