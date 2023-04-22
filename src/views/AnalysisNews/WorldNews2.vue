<template>
  <el-row>
    <el-col :span="12">
      <el-space wrap>
        <div v-for="i in 20" :key="i">
          <span text> 断句词{{i}} </span>
        </div>
      </el-space>
    </el-col>
    <el-col :span="12">
      <el-scrollbar height="60vh">
        <div class="important_sentence">重点句子</div>
         <p v-for="item in 7" :key="item" class="scrollbar-demo-item">{{ item }}</p>
         <div class="important_sentence">关键词云</div>
         <p v-for="item in 7" :key="item" class="scrollbar-demo-item">{{ item }}</p>
         
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "WolrdNews2",
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
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