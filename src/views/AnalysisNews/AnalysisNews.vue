<template>
  <!-- 盒子内容 -->
  <div class="box_header">人物单篇新闻处理 - {{ title }}</div>

  <!-- 其他内容 -->
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label" @click="change_title"> 文本输入 </span>
      </template>
      <div class="analysis_box">
        <CardNews></CardNews>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label" @click="change_title"> 分词 </span>
      </template>
      <div class="analysis_box">
        <WorldNews2></WorldNews2>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label" @click="change_title"> 分句 </span>
      </template>
      <div class="analysis_box">
        <WordNewsVue></WordNewsVue>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span @click="change_title">实体提取</span>
      </template>
      <div class="analysis_box">
        <AnalysisGraph></AnalysisGraph>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { ref } from "vue";
import CardNews from "./CardNews.vue";
import WorldNews2 from "./WorldNews2.vue";
import WordNewsVue from './WordNews.vue';
import AnalysisGraph from "./AnalysisGraph.vue";
export default {
  name: "AnalysisNews",
  components: {
    CardNews,
    WordNewsVue,
    WorldNews2,
    AnalysisGraph,
  },
  setup() {
    let title = ref("文本输入");

    const change_title = (e) => {
      // console.log(e.target.value)
      title.value = e.target.innerText;
    };

    return {
      title,
      change_title,
    };
  },
};
</script>

<style lang="less" scoped>
.analysis_box {
  margin: 1vh auto;
  height: 70vh;
  // width: 100vh;
  // background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  // line-height: 20vh;
  text-align: center;
}
.box_header {
  // width: 100%;
  height: 8vh;
  font-size: 20px;
  background-color: rgb(64, 169, 255);
  margin: 3vh auto;
  padding: 5px;
  border-radius: 1vh;
  color: #fff;
  // text-align: center;
  line-height: 8vh;
}
.el-tab-pane {
  margin: 3vh auto;
  border-radius: 3vh;
}
.custom-tabs-label {
  &:hover {
    border-bottom: 2px solid rgb(64, 169, 255);
  }
}
</style>