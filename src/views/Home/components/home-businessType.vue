<template>
  <ul class="businessType">
    <li v-for="(item,index) in list" :key="index" @click="toBusList(index+1)">
      <img v-bind:src='getImgUrl(item.img)' />
      <p>{{item.name}}</p>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
// TypeScript 的接口用于标记数据格式
interface INavItem {
  id: number
  name: string
  img: string
}
const active = ref(0)
// 频道数据， <INavItem[]> 表示 list 数据为数组，数组的每一项需要复合 INavItem 接口的格式
// TypeScript 好处：模板中使用 list 和 item 的时候，书写代码有类型提示，鼠标悬停变量也有类型提醒
const list = ref<INavItem[]>([])
const getImgUrl = (img: string) => {
  return require('@/' + img)
}

const toBusList = (num: any) => {
  router.push({ name: 'businessList2', params: { num: num } })
}
axios({
  url: '/api/index',
  method: 'get'
}).then(res => {
  // console.log(res.data)
  list.value = res.data
  // console.log(list.value)
})
</script>

<style scoped>
.businessType{
  height: 36vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 3vw 0;
}
.businessType li{
  font-size: small;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.businessType img{
  width: 12vw;
  height: 12vw;

}
</style>
