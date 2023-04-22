<template>
  <divider-news title="排行榜"></divider-news>
  <el-row class="row-bg" justify="space-around">
    <el-col :span="6"><div class="grid-content ep-bg-purple">
      <el-button type="primary">人物</el-button>
    </div></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple">
      <el-button type="warning">事件</el-button>
    </div></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple">
      <el-button type="info">组织</el-button>
    </div></el-col>
  </el-row>
</template>

<script>

export default {
  name: 'EventNews',
  setup(){
    return {
    };
  }
}
</script>

<style lang="less" scoped>
.el-button{
  width: 100%;
  height: 100%;
  font-size: 14px;
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