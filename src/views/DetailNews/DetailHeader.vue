<template>
  <h2 class="title_detail">{{ title }}</h2>
  <el-space wrap>
    <el-tag class="ml-2" type="warning" v-for="i in 8" :key="i"
      >标签属性</el-tag>
  </el-space>
  <div class="news_content">
    <h4 style="text-indent: 2rem">人物--新闻知识图谱</h4>
    <div class="news_decription">
      {{ formatText(textarea2) }}
    </div>
  </div>
  <el-space direction="vertical">
    <div class="tag_content">
      <el-text class="mx-1" type="success">人物:</el-text>
      <el-space wrap>
        <el-tag 
     class="ml-2" 
    type="warning" 
    v-for="i in 8" 
    :key="i"
    spacer="|"

      >标签属性
      </el-tag>
      </el-space>
    </div>
    <div class="tag_content">
      <el-text class="mx-1" type="primary">地点:</el-text>
      <el-space wrap>
        <el-tag 
     class="ml-2" 
    type="warning" 
    v-for="i in 8" 
    :key="i"
    spacer="|"

      >标签属性
      </el-tag>
      </el-space>
    </div>
    <div class="tag_content">
      <el-text class="mx-1" type="info">机构:</el-text>
      <el-space wrap>
        <el-tag 
     class="ml-2" 
    type="warning" 
    v-for="i in 8" 
    :key="i"
    spacer="|"

      >标签属性
      </el-tag>
      </el-space>
    </div>
    <!-- <div class="tag_content">
      <el-text class="mx-1" type="danger">热词:</el-text>
      <el-space wrap>
        <el-tag 
     class="ml-2" 
    type="warning" 
    v-for="i in 8" 
    :key="i"
    spacer="|"

      >标签属性
      </el-tag>
      </el-space>
    </div> -->
  </el-space>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DetailHeader",
  props: ["title"],
  setup() {
    const textarea2 = ref(
      "西南大学（Southwest University），主体位于重庆市北碚区，是中华人民共和国教育部直属，农业农村部、重庆市共建的全国重点大学。 [1]  位列国家“双一流”、 [110]  “211工程”、“985工程优势学科创新平台”建设高校、“双一流”农科联盟成员高校。 [2]  入选“111计划”、“2011计划”、“百校工程”、卓越农林人才教育培养计划、卓越教师培养计划、国家大学生创新性实验计划、国家级大学生创新创业训练计划、国家建设高水平大学公派研究生项目、国家大学生文化素质教育基地、中国政府奖学金来华留学生接收院校.南大学（Southwest University），主体位于重庆市北碚区，是中华人民共和国教育部直属，农业农村部、重庆市共建的全国重点大学。 [1]  位列国家“双一流”、 [110]  “211工程”、“985工程优势学科创新平台”建设高校、“双一流”农科联盟成员高校。 [2]  入选“111计划家建设高水平大学公派研究生项目、国家大学生文化素质教育基地、中国政府奖学金来华留学生接收院校.南大学（Southwest University），主体位于重庆市北碚区，是中华人民共和国"
    );
    // const {title} = toRefs(props)

    const formatText = (text, length = 420, elipsis = "...") => {
      if (!text) return "";
      if (text.length > length) {
        return `${text.substr(0, length)}${elipsis}`;
      }
      return text;
    };
    return {
      textarea2,
      formatText,
    };
  },
};
</script>

<style lang="less" scoped>
.tag_content{
  // border-bottom: 1px solid #b6b4b4;
}
.el-text{
  font-size: 14px;
  font-weight: 400;
  // color: #333;
  margin-right: 20px;
  // background-color: #976b6b;
}
.title_detail {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  // background-color: #976b6b;
  line-height: 10vh;
}
.news_decription {
  text-indent: 2rem;
  height: 15vh;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  margin-bottom: 20px;
  // background-color: #976b6b;
}
.news_content {
  border: 2px dashed #727070;
  margin-bottom: 3vh;
  padding: 2vh;
}
</style>