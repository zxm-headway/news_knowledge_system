<template>

        <el-form :model="form" label-width="120px">
          <el-form-item label="人物名称">
            <el-input v-model="form.name"  />
          </el-form-item>
          <el-form-item label="新闻内容">
            <el-input v-model="form.desc" type="textarea"  show-word-limit :rows="10"/>
           </el-form-item>
          <el-form-item>
            <el-button type="primary">分析</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

</template>

<script>

import { reactive } from 'vue';
export default {
  name: "CardNews",
  setup() {
    const form = reactive({
      name: '',
      desc: '',
    })
    return {
      form
    };
  },
}
</script>

<style lang="less" scoped>

.el-card{
    // margin: 0 auto;
    border-radius: 3vh;
    width: 100%;
    height: 70vh;
    text-align: center;
  }
</style>