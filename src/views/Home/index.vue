<template>
  <!-- 头部组件 -->
  <Header />
  <!-- 频道组件 -->
<!--  &lt;!&ndash; 轮播组件 &ndash;&gt;-->
<!--  <HomeSwipe />-->
  <!-- 视频列表 -->
<!--  <HomeVideoList />-->
  <BusinessType/>
  <Business/>
  <HomeChannel />
</template>

<script setup lang="ts">
// Vue3 的 script setup 只需要导入组件，无需注册，直接可以在模板中使用
import AppHeader from '@/components/app-header.vue'
import HomeChannel from './components/home-channel.vue'
import BusinessType from './components/home-businessType.vue'
import Business from './components/home-business.vue'
import Header from './components/home-header.vue'
</script>
