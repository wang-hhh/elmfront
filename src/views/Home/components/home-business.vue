<template>
  <div class="recommend">
    <div></div>
    <h4>推荐商家</h4>
    <div></div>
  </div>
  <ul class="recommendType">
    <p>综合排序 <i class="fa fa-caret-down " aria-hidden="true"></i></p>
    <p>距离最近</p>
    <p>销量最高</p>
    <p>筛选<i class="fa fa-filter " aria-hidden="true"></i></p>
  </ul>
  <ul class="business">
    <li v-for="(items,index) in list" :key="index" >
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
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'

// TypeScript 的接口用于标记数据格式
interface INavItem {
  id: number
  name: string
  img: string
  typeid: number
  startPrice: number
  deliveryPrice: number
}

const active = ref(0)
// 频道数据， <INavItem[]> 表示 list 数据为数组，数组的每一项需要复合 INavItem 接口的格式
// TypeScript 好处：模板中使用 list 和 item 的时候，书写代码有类型提示，鼠标悬停变量也有类型提醒
const list = ref<INavItem[]>([])

axios({
  url: '/api/getBusiness',
  method: 'get'
}).then(res => {
  // console.log(res.data)
  list.value = res.data
  console.log(list.value)
})

const getImgUrl = (img: string) => {
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
