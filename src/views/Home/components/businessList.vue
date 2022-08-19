<template>
  <p style="background: deepskyblue; font-size: 6vh;display: flex;justify-content: center;color: white">商家列表</p>
  <ul class="business">
    <li v-for="(items,index) in listData" :key="index" @click="toBusInfo(items.id)">
      <div class="business-left">
        <img v-bind:src='getImgUrl(items.img)'>
      </div>
      <div class="business-right">
        <div class="businessHead">
          <h4>{{ items.name }}</h4>
          <p>
            <i class="fa fa-mobile " aria-hidden="true"></i>
          </p>
        </div>
        <div class="businessStar">
          <div class="businessStarLeft">
            <i class="fa fa-star " aria-hidden="true"></i>
            <i class="fa fa-star " aria-hidden="true"></i>
            <i class="fa fa-star " aria-hidden="true"></i>
            <i class="fa fa-star " aria-hidden="true"></i>
            <i class="fa fa-star " aria-hidden="true"></i>
            <p>4.9 月售1323单</p>
          </div>
          <div class="businessStarRight">
            蜂鸟专送
          </div>
        </div>
        <div class="businessDeliver">
          <div class="businessDeliverLeft">
            <i class="fa fa-jpy " aria-hidden="true"></i>
            <p>{{items.startPrice}}起送 |{{items.deliveryPrice}}油钱</p>
            <i class="fa fa-jpy " aria-hidden="true"></i>
          </div>
          <div class="businessDeliverRight">
            <p>3.22km|30min</p>
          </div>
        </div>
        <div class="businessExplain">
          <span>{{ items.explain }}</span>
        </div>
        <div class="businessNew">
          <div class="businessNewLeft">
            <div>新</div>
            <p>饿了么新用户首单立减9元</p>
          </div>
          <div class="businessNewRight">
            两个活动 <i class="fa fa-caret-down " aria-hidden="true"></i>
          </div>
        </div>
        <div class="businessPriceDc">
          <div>特</div>
          <p>特价商品五元起</p>
        </div>
      </div>
    </li>
  </ul>
  <HomeChannel/>
</template>

<script setup>
import { ref } from 'vue'
import HomeChannel from '../components/home-channel.vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const listData = ref(
  {
    id: '',
    name: '',
    img: '',
    typeid: '',
    startPrice: '',
    deliveryPrice: ''
  }
)
const num = route.params.num
console.log(num)
axios({
  url: 'api/businessList?id=' + num,
  method: 'get'
}).then(res => {
  // console.log(res.data)
  listData.value = res.data
  console.log(listData.value)
})
const toBusInfo = (id) => {
  router.push({ name: 'businessInfo', params: { id: id } })
}

// axios('api/businessList?id=' + num)
//   .then(function (response) {
//     listData.value = response.data
//     console.log(listData)
//   })
const getImgUrl = (img) => {
  return require('@/' + img)
}
</script>

<style scoped>
.recommend {
  width: 100%;
  height: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vw auto;
}

.recommend div {
  width: 8vw;
  height: 0.1vw;
  background-color: black;
  margin: 0 4vw;
}

.recommendType {
  height: 12vw;
  width: 92%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: small;
  color: #808080;
  margin: auto;
}

.business li {
  display: flex;
  border-bottom-style: solid;
  border-bottom-width: 0.1vw;
  border-bottom-color: #AEAEAE;
  padding-bottom: 6vw;
}

.business li .business-left img {
  width: 20vw;
  height: 20vw;
  margin: 0 3vw;
}

.business li .business-right {
  width: 70vw;
  height: 30vw;
}

.business li .business-right .businessHead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1vw 0;
}

.business li .business-right .businessHead p {
  font-size: large;
}

.business li .business-right .businessStar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1vw 0;
}

.business li .business-right .businessStar .businessStarLeft {
  display: flex;
  align-items: center;
}

.business li .business-right .businessStar .businessStarLeft i {
  color: gold;
}

.business li .business-right .businessStar .businessStarLeft p {
  font-size: small;
  color: #808080;
  margin-right: 2vw;
}

.business li .business-right .businessStar .businessStarRight {
  background-color: blue;
  color: white;
  font-size: small;
  padding: 0.3vw;
  border-radius: 1vw;
}

.business li .business-right .businessDeliver {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: small;
  color: #808080;
  margin: 1vw 0;
}

.business li .business-right .businessExplain {
  margin: 1vw 0;
}

.business li .business-right .businessExplain span {
  font-size: small;
  color: #808080;
  border-style: solid;
  border-color: #808080;
  border-width: thin;
  padding: 0.3vw;
}

.business li .business-right .businessNew {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1vw 0;
}

.business li .business-right .businessNew .businessNewLeft {
  display: flex;
  align-items: center;
}

.business li .business-right .businessNew .businessNewLeft div {
  background-color: greenyellow;
  color: green;
  padding: 0.3px;
  border-radius: 1vw;
  font-size: small;
  margin-right: 0.8vw;
}

.business li .business-right .businessNew .businessNewLeft p {
  font-size: small;
  color: #808080;
}

.business li .business-right .businessNew .businessNewRight {
  font-size: small;
  color: #808080;
}

.business li .business-right .businessPriceDc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vw;
}

.business li .business-right .businessPriceDc div {
  background-color: greenyellow;
  color: green;
  padding: 0.3px;
  border-radius: 1vw;
  font-size: small;
  margin-right: 0.8vw;
}

.business li .business-right .businessPriceDc p {
  font-size: small;
  color: #808080;
}
</style>
