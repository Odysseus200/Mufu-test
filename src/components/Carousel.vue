<template>
  <swiper
    :spaceBetween="1"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
    :loop="true"
    :autoplay="{ delay: 10000 }"
    @mounted="onSwiperMounted"
  >
    <swiper-slide v-for="(item, index) of bigImg" :key="index">
      <img class="img" :src="item" />
    </swiper-slide>
  </swiper>
  <swiper
    direction="vertical"
    @swiper="setThumbsSwiper"
    :spaceBetween="12"
    :slidesPerView="5"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(item, index) of bigImg" :key="index">
      <img class="img" relative :src="item" />
    </swiper-slide>
  </swiper>
  <n-button
    text-color="#FFF"
    color="#cdcdcd"
    size="large"
    strong
    round
    type="tertiary"
    absolute
    top-138
    left-326
    z-99
    w-35
  >
    昨日重现
  </n-button>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { NButton } from "naive-ui";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
const modules = [Thumbs, FreeMode, Autoplay];
const bigImg = reactive([
  "/src/assets/封面图.jpeg",
  "https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=4138158235,3956816634&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=4138158235,3956816634&fm=193&f=GIF",
]);
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
const onSwiperMounted = (swiper: any) => {
  swiper.update();
  swiper.autoplay.start();
};
</script>
<style>
.swiper-slide {
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
}

.mySwiper {
  position: relative;
  margin-top: 100px;
  margin-left: 85%;
  top: -690px;
  width: 170px;
  height: 500px;
  box-sizing: border-box;
  padding: 7px;
}

.mySwiper .swiper-slide {
  width: 100%;
  height: 33%;
  opacity: 0.7;
  border-radius: 4%;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
  border: 4px solid #e3e1e1;
}
</style>
