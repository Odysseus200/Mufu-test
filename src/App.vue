<template>
  <Header />
  <keep-alive><HomePage /></keep-alive>
  <JoinUs />
  <GoBack />
  <Footer />
</template>

<script setup>
// 引入Header组件
import Header from "./components/Header.vue";
// 引入Footer组件
import Footer from "./components/Footer.vue";
// 引入JoinUS组件
import JoinUs from "./components/JoinUs.vue";
// HomePage
import HomePage from "./view/HomePage.vue";
// 回到顶部
import GoBack from "./components/GoBack.vue";
</script>
