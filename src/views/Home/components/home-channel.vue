<template>
  <van-tabs v-model:active="active">
    <van-tab title="标签 1"></van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
const active = ref(0)

axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  console.log(res.data)
})
</script>
