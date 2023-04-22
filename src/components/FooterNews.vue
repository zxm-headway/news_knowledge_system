<template>
  <div class="fixed-bottom">
    西南大学---知识图谱实验室
  </div>
</template>

<script>

export default {
  name: 'FooterNews',
  setup(){
    return {
    };
  }
}

</script>

<style scoped>
.fixed-bottom {

  position: fixed;
  bottom: 0;
  left: 0;
  height: 4vh;
  line-height: 5vh;
  text-align: center;
  color: #fff;
  font-size: 14px;
  width: 100%;
  margin-top:20vh ;
  padding: 20px;
  background-color:rgba(0,0,0,0.8);
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
  z-index: 100;
}
</style>
