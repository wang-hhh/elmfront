<template>
  <van-form  :model="user">
    <van-cell-group inset>
      <van-field
        v-model="user.userid"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" @click="onSubmit(this.user)" >
        提交
      </van-button>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="primary"  @click="register()" >
        注册
      </van-button>
    </div>
  </van-form>
  <HomeChannel/>
</template>

<script setup>
import HomeChannel from '../components/home-channel.vue'
import { ref, reactive } from 'vue'
import axios from 'axios'
import request from 'request'
import { useRouter } from 'vue-router'
import router from '@/router'
const user = reactive({
  userid: '',
  password: ''
})
const onSubmit = (user) => {
  axios.post('/api/login', user)
    .then(function (response) {
      // JSON.parse(JSON.stringify(response.get))
      if (response.data !== null) {
        alert('登陆成功')
        sessionStorage.setItem('userid', response.data)
        console.log(response.data)
        router.push('/')
        // vue2 跳转写法
        // this.router.push('/')
      } else {
        console.log('登陆失败')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  return {
    onSubmit,
    user
  }
}
const register = () => {
  this.$router.push('/register')
}
</script>

<style scoped>

</style>
