<template>
  <div>
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <swiper-slide><img src="../../../src/img/1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/3.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/4.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/5.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/6.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/7.jpg" alt=""></swiper-slide>
  </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>

</style>