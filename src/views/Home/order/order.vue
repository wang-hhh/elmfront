<template>
  123
  <ul class="food-card">
    <li  class="food">
      <div class="food-left">
        <img :src="getImgUrl(listdata.img)">
        <div class="food-left-info">
          <h3>{{listdata.name}}</h3>
<!--          <p>&#165;{{fd.price}}</p>-->
        </div>
      </div>
    </li>
  </ul>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import axios from 'axios'
const route = useRoute()
const router = useRouter()
// const id = route.params.id
// const userid = route.params.userid
const idData = ref({
  id: route.params.id,
  userid: JSON.parse(route.params.userid)
})
console.log(idData)
const listdata = ref({
})
axios({
  url: '/api/selorder',
  data: idData.value,
  method: 'post'
}).then(res => {
  listdata.value = res.data
  console.log('123wqeqewdqa', listdata)
})

const getImgUrl = (img) => {
  return require('@/' + img)
}
</script>

<style scoped>

</style>
