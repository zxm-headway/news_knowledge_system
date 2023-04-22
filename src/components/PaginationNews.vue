<template>
   <el-pagination
      background
      :current-page="currentPage"
      :total="total"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
    ></el-pagination>
</template>

<script>
import { reactive, ref ,watchEffect} from 'vue'
export default {
  name: 'PaginationNews',
  props:{
  
    pageSize:{
      type:Number,
      default:4,
      required: true
    },
    total:{
      type:Number,
      default:50,
      required: true
    },
    data:{
      type:Array,
      default:()=>[],
      required: true
    }
  },
  setup(props) {

    
    
    const {data,pageSize,} = reactive(props)
    const currentPage = ref(1) // 当前页

    // 根据当前页和每页数量计算分段数据
    const currentData = ref(data.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize))
    
    // 监听当前页变化，重新计算分段数据
    watchEffect(() => {
      currentData.value = data.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
    })

    // 根据当前页和每页数量计算分段数据
    // const currentData = ref([])

     // 监听当前页变化，重新计算分段数据
    //  watchEffect(() => {
    //   const start = (currentPage.value - 1) * pageSize.value
    //   const end = start + pageSize.value
    //   currentData.value = data.value.slice(start, end)
    // })
    // 处理分页变化事件
    const handleCurrentChange = (Page) => {
      // console.log(currentPage)
      currentPage.value = Page
      console.log(`当前页: ${currentPage.value}`)
      console.log(data.value,pageSize)
      console.log(currentData)
    }



    return {
      currentPage,
      handleCurrentChange,
    }
  }
}
</script>

<style lang="less" scoped> 

</style>