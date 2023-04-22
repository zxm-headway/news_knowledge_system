<template>
  <el-row> 
    <el-col :span="8">
      <div class="grid-content ep-bg-purple" @click="router_push_home">新闻知识图谱</div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple-light">
        <div class="mt-4">
          <el-input
            v-model="input3"
            placeholder="知识图谱实验室"
            class="input-with-select"
          >
            <template #prepend>
              <el-select
                v-model="select"
                placeholder="Select"
                style="width: 115px"
              >
                <el-option label="食谱" value="1" />
                <el-option label="农业" value="2" />
                <el-option label="POI推荐" value="3" />
              </el-select>
            </template>
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </div>
      </div>
    </el-col>
    <el-col :span="4" :offset="4"
      ><div class="grid-content ep-bg-purple">
        <el-space :size="size" spacer="|">
          <el-link type="primary" @click="router_push_login">登录</el-link>
          <el-link type="warning">注册</el-link>
        </el-space>
        
        <!-- <a href="#">登录</a>/<a href="#">注册</a> -->
      </div>
    </el-col>
  </el-row>
  
</template>

<script >
import { useRouter } from 'vue-router';
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

export default {
  name: "HeaderNews",
  setup() {
    const input3 = ref("");
    const select = ref("");
    const router = useRouter();

    const router_push_home=()=>{
      router.push('/');
    }

    const router_push_login = ()=>{
      router.push('/login');
    }

    return {
      input3,
      select,
      Search,
      router_push_home,
      router_push_login,
    };
  },
};
</script>

<style scoped lang="less">
.el-row {
  margin-top: 20px;
  padding-bottom: 3vh;
  border-bottom: 2px solid rgb(182, 181, 176);
  // box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
}

.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}


</style>