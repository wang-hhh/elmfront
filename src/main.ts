import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'

import '@/mock/index'

import { Tab, Tabs, Swipe, SwipeItem, Form, Field, CellGroup, Button, Icon } from 'vant'

const app = createApp(App)
// 注册Vant组件 app.use()
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.use(Form)
app.use(Button)
app.use(Field)
app.use(CellGroup)
app.use(router)
app.use(Icon)
app.mount('#app')
