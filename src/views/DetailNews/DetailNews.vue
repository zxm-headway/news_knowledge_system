<template>
  <el-row :gutter="20">
    <el-col :span="15">
      <DetailHeader title="西南大学--知识图谱实验室"></DetailHeader>
    </el-col>
    <el-col :span="9">
      
      <div class="margin-worldClound">
        <h3>热词云</h3>
        <WordClound></WordClound>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="14">
      <el-space direction="vertical">
        <CardNews :content="string_content" v-for="i in 4" :key="i"></CardNews>
        <PaginationNews :pageSize="pageSize" :data="data" :total="total"></PaginationNews>
      </el-space>
      
    </el-col>
    <el-col :span="10">
      <RelationNews></RelationNews>
    </el-col>
  </el-row>
</template>

<script>
import {ref} from 'vue'
import WordClound from '@/components/WordClound.vue';
import DetailHeader from './DetailHeader.vue';
import CardNews from './CardNewsItem.vue';
import RelationNews from './RelationNews.vue'
import PaginationNews from '@/components/PaginationNews.vue';

// import WordClound from '@/components/WordClound.vue';
export default {

  name:"DetailNews",
  components:{
    DetailHeader,
    WordClound,
    CardNews,
    RelationNews,
    PaginationNews,
    
},
  setup(){

    const data = ref([
      { id: 1, content: '数据1' },
      { id: 2, content: '数据2' },
      { id: 3, content: '数据3' },
      { id: 4, content: '数据4' },
      { id: 5, content: '数据5' },
      { id: 6, content: '数据6' },
      { id: 7, content: '数据7' },
      { id: 8, content: '数据8' },
      { id: 9, content: '数据9' },
      { id: 10, content: '数据10' },
      { id: 11, content: '数据11' },
      { id: 12, content: '数据12' }
    ]) // 所有数据
    const pageSize = ref(4) // 每页显示的数据条数
    const total = ref(data.value.length) // 数据总数

    const string_content = ref('学校溯源于1906年建立的川东师范学堂，1936年更名为四川省立教育学院。1950年四川省立教育学院与国立女子师范学院合并建立西南师范学院，农艺、园艺和农产制造等系与1946年创办的私立相辉学院等合并建立西南农学院。1985年两校分别更名为西南师范大学、西南农业大学。2000年重庆市轻工业职业大学并入西南师范大学；2001年西南农业大学、四川畜牧兽医学院、中国农业科学院柑桔研究所合并组建为新的西南农业大学。2005年西南师范大学、西南农业大学合并组建为西南大学。')
  
    return{
      string_content,
      data,
      pageSize,
      total,
  }

}
}
</script>

<style lang="less" scoped>
.margin-worldClound{
  margin-top: 10vh;
  text-indent: 2rem;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>