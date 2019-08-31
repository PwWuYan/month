<template>
  <div class="home">
    <div class="top"><swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <swiper-slide><img src="../../../src/img/1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/3.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/4.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/5.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/6.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../../src/img/7.jpg" alt=""></swiper-slide>
  </swiper>
  </div>
  <div class="center">
    <button>免费专区</button><button>女频精选</button>
  </div>
  <div class="bottom"></div>
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

<style lang='scss' scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  .top{
    width: 100%;

  }
  .center{
    width: 100%;
    display: flex; 
    justify-content: center;
    button{
      width: 40%;
      height: 50px;
      border: 1px solid #ccc;
      outline: none;
  }

  }
}
</style>