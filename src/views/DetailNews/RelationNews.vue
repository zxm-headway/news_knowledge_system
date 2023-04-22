<template>
  <h1>相关事件</h1>
  <div class="demo-collapse">
    <el-scrollbar height="100vh">
    <el-collapse v-model="activeNames" >
      <el-collapse-item 
      :name="i" v-for="i in 4" :key="i" @click="router_push_id">

      <template #title>
        {{title}}
        <span @change="handleChange">点击查看更多
        </span>
        </template>
        <div>
          苏轼是北宋中期文坛领袖，在诗、词、文、书、画等方面取得很高成就。诗题材广阔，清新豪健，善用夸张比喻，独具风格，与黄庭坚并称“苏黄”；词开豪放一派，与辛弃疾同是豪放派代表，并称“苏辛” [5]  ；散文著述宏富，纵横恣肆，豪放自如，与欧阳修并称“欧苏”，与韩愈、柳宗元、欧阳修、苏洵、苏辙、王安石、曾巩合称“唐宋八大家”；善书法，与黄庭坚、米芾、蔡襄合称“宋四家”；擅长文人画，尤擅墨竹、怪石、枯木等。 [96]  作品有《东坡七集》《东坡易传》《东坡乐府》《潇湘竹石图》《枯木怪石图》等
        </div>
       
      </el-collapse-item>
    </el-collapse>
  </el-scrollbar>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "RelationNew",
  setup() {
    let title = ref('名人：三苏（苏东坡）')
    const router_push_id = ()=>{
      console.log("router_push_id")
    }
    return {
      title,
      router_push_id
    };
  },
}
</script>

<style lang="less" scoped>

</style>