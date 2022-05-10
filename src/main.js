import { createApp } from 'vue'
import { createPinia } from 'pinia'


import router from './router'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

import "font-awesome/css/font-awesome.min.css"


import App from './App.vue'


const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
