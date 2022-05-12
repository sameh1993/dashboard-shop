import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/dashboard.vue'
import dashHome from "@/views/Home-dash.vue"

import register from '../views/register.vue'
import loginComp from "@/components/login.vue";
import signupComp from "@/components/signup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: dashboard,
      children: [
        { path: "/", name: "home", component: dashHome }
      ]
    },
    {
      path: "/register",
      component: register,
      children: [
        { path: "", name: "signup", component: signupComp },
        { path: "login", name: "login", component: loginComp }
      ]
    }
  ]
})

export default router
