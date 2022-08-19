<template>
  <p style="background: deepskyblue; font-size: 6vh;display: flex;justify-content: center;color: white">食品信息</p>
  <div class="business-info">
    <img v-bind:src='getImgUrl(listData.img)'>
    <h1>{{listData.name}}</h1>
    <p style="font-size: small;color: #808080;">&#165;{{listData.startPrice}}起送 &#165;{{listData.deliveryPrice}}配送</p>
  </div>
  <ul class="food-card">
    <li v-for="(fd, index) in listData.fds" :key="index" class="food">
      <div class="food-left">
        <img :src="getImgUrl(fd.img)">
        <div class="food-left-info">
          <h3>{{fd.name}}</h3>
          <p>{{fd.explain}}</p>
          <p>&#165;{{fd.price}}</p>
        </div>
      </div>
      <div class="food-right">
        <div>
          <van-icon name="minus" @click="minus(index)" v-bind:style="listData.fds[index].display "/>
        </div>
        <p>
        <scan>{{listData.fds[index].num}}</scan>
        </p>
        <div>
          <van-icon name="plus" @click="add(index)"/>
        </div>
      </div>
    </li>
  </ul>
  <div class="foot-pay">
    <p style="flex: 3"></p>
    <van-button type="success" style=" flex: 1;height: 15vw" @click="toPay(listData)">去结算</van-button>
  </div>

</template>

<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const listData = ref({}
)
const minus = (index) => {
  listData.value.fds[index].num = listData.value.fds[index].num - 1
  console.log(index)
  if (listData.value.fds[index].num === 0) { listData.value.fds[index].display = 'display:none' }
}
const uid = ref(sessionStorage.getItem('userid'))
const add = (index) => {
  listData.value.fds[index].num = listData.value.fds[index].num + 1
  listData.value.fds[index].display = 'display:inline'
}
// 去结算按钮
const toPay = (listData) => {
  axios.post('/api/saveOrder', listData)
    .then(res => {
      if (res.data === 'success') {
        const uid2 = JSON.stringify(uid.value)
        router.push({ name: 'order', params: { userid: uid2, id: id } })
      } else {
        console.log('生成订单失败')
      }
    })
}
const id = route.params.id
console.log(id)
axios({
  url: 'api/businessMsg?id=' + id,
  method: 'get'
}).then(res => {
  // console.log(res.data)
  listData.value = res.data
  listData.value.userid = sessionStorage.getItem('userid')
  listData.value.ispay = 0
  console.log(listData)
  // for (var i = 0; i < listData.value.fds.length; i++) {
  //   listData.value.fds.num = 0
  //   listData.value.fds.display = 'display:none'
  // }
})
const getImgUrl = (img) => {
  return require('@/' + img)
}
</script>

<style scoped>
.business-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.food-left{
  display: flex;
}
.food-left-info{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 1vw;
  /*padding-top: 3vw;*/
}
.food-left-info p{
  font-size: small;
  color: #808080;
}
.food{
  display: flex;
  justify-content: space-between;
  margin-right: 8vw;
  padding-top: 4vw;
}
.food-right{
  display: flex;
  align-items: center;
}
.food-left img{
  height: 18vw;
}
.food-card{
  height: 14vw;
  width: 100%;
  padding-top: 4vw;
}
.foot-pay{
  border-top: 0.1vw solid #808080 ;
  background-color: white;
  height: 15vw;
  width: 100% ;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
