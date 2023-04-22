<template>
  <DividerNews title="分类事件"></DividerNews>
  <el-row class="row-bg" justify="space-around">
    <el-col :span="6">
      <el-card shadow="hover">
        <template #header>
          <div class="card-header">
            <h3>体育</h3>
            <el-button class="button" text type="warning" round
              >查看更多</el-button
            >
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item item_news" >
          {{ "List item " + o }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <template #header>
          <div class="card-header">
            <h3>体育</h3>
            <el-button class="button" text type="warning" round
              >查看更多</el-button
            >
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item item_news" >
          {{ "List item " + o }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <template #header>
          <div class="card-header">
            <h3>体育</h3>
            <el-button class="button" text type="warning" round
              >查看更多</el-button
            >
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item item_news" >
          {{ "List item " + o }}
        </div>
      </el-card>
    </el-col>
    
    
  </el-row>
</template>

<script>
export default {
  name: "ClassCardNews",
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.item_news{
  line-height: 3vh;
  border-bottom: 1px dashed rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  &:hover{
    background-color:	#FFDEAD;
    border-bottom: 1px solid #f2240d;
    transform: translateX(10px);
  }
}

.el-card{
  transition: transform 0.5s ease;
  &:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    transform: translateY(-10px);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
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