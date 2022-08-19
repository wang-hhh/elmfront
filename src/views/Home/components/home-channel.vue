<template>
<!--  <van-tabs v-model:active="active" class="channel">-->
<!--    <van-tab v-for="item in list" :key="item.id" :title="item.text">-->
<!--    </van-tab>-->
<!--  </van-tabs>-->
  <div class="footDiv">

  </div>
  <ul class="foot">
    <li>
      <p><i class='fa fa-home'></i></p>
      <router-link to="/">首页</router-link>
    </li>
    <li>
      <p><i class="fa fa-compass"></i></p>
      <p onclick="goFind()">发现</p>
    </li>
    <li>
      <p><i class='fa fa-file-text-o'></i></p>
      <p>订单</p>
    </li>
    <li>
      <p><i class='fa fa-user-o'></i></p>
      <router-link to="/login">我的</router-link>
    </li>
  </ul>
</template>

<!--<script setup lang="ts">-->
<!--import { ref } from 'vue'-->
<!--import axios from 'axios'-->

<!--// TypeScript 的接口用于标记数据格式-->
<!--interface INavItem {-->
<!--  id: string-->
<!--  text: string-->
<!--}-->

<!--const active = ref(0)-->
<!--// 频道数据， <INavItem[]> 表示 list 数据为数组，数组的每一项需要复合 INavItem 接口的格式-->
<!--// TypeScript 好处：模板中使用 list 和 item 的时候，书写代码有类型提示，鼠标悬停变量也有类型提醒-->
<!--const list = ref<INavItem[]>([])-->

<!--axios({-->
<!--  url: '/navList',-->
<!--  method: 'get'-->
<!--}).then(res => {-->
<!--  // console.log(res.data)-->
<!--  list.value = res.data.result-->
<!--})-->
<!--</script>-->

<style>
.foot{
  border-top: 0.1vw solid #808080 ;
  background-color: white;
  height: 12vw;
  width: 100% ;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
}
.foot li{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footDiv{
  height: 12vw;
}
</style>
