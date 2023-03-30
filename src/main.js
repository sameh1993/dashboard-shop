import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from "mitt"
import Notifications from '@kyvg/vue3-notification'


import router from './router'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "@/GlobalRules/scss/mainRules.scss";

import "./main.scss"
import App from './App.vue'


const emitter = mitt()
const app = createApp(App)



app.use(createPinia())
app.config.globalProperties.emitter = emitter
app.use(Notifications)
app.use(router)
app.mount('#app')
