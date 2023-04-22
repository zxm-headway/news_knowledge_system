<template>
        <FunctionNews></FunctionNews>
        <CarouselNews></CarouselNews>
        <EventNews></EventNews>
        <ClassCardNews></ClassCardNews>
</template>

<script>
import FunctionNews from '../components/FunctionNews.vue'
import CarouselNews from '../components/CarouselNews.vue';
import EventNews from '../components/EventNews.vue';
import ClassCardNews from '../components/ClassCardNews.vue';

export default {
  name: 'HomeNews',
  components: {
    FunctionNews,
    CarouselNews,
    EventNews,
    ClassCardNews,
  },
  setup() {
    return {

    };
  }
}
</script>

<style lang="less" scoped>

</style>