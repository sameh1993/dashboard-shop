import { createRouter, createWebHistory, useRoute } from "vue-router";
import dashboard from "@/dashboard.vue";
import dashHome from "@/views/Home-dash.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      component: dashboard,
      children: [
        { path: "", name: "home", component: dashHome },
        {
          path: "components/grid",
          name: "grid",
          component: () => import("@/views/grids.vue"),
        },
        {
          path: "components/part",
          name: "partlets",
          component: () => import("@/components/content/partlets.vue"),
        },
        {
          path: "charts",
          name: "charts",
          component: () => import("@/views/charts.vue"),
        },
        {
          path: "mailbox/inbox",
          name: "mail-profile",
          component: () => import("@/views/mailIndex.vue"),
        },
        {
          path: "mailbox/compose",
          name: "new msg",
          component: () => import("@/views/newMsg.vue"),
        },
        {
          path: "system/page404",
          name: "page404",
          component: () => import("@/views/page404.vue"),
        },
        {
          path: "system/black",
          name: "black",
          component: () => import("@/views/black.vue"),
        },

        {
          path: "e-commerce",
          component: () => import("@/views/products.vue"),
          children: [
            {
              path: "products",
              name: "main",
              component: () => import("@/components/products/main-page.vue"),
            },
            {
              path: "product/edit",
              name: "edit product",
              component: () => import("@/components/products/edit-product.vue"),
            },
            {
              path: "product/:name",
              name: "single product",
              component: () =>
                import("@/components/products/product-details.vue"),
            },
            {
              path: "price",
              name: "price",
              component: () => import("@/views/price.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/register",
      component: () => import("@/views/register.vue"),
      children: [
        {
          path: "",
          name: "signup",
          component: () => import("@/components/register/signup.vue"),
        },
        {
          path: "login",
          name: "login",
          component: () => import("@/components/register/login.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/page404.vue"),
    },
  ],
  strict: true,
});

import { useAuthStore } from "@/stores/auth.js";
router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  if (
    // make sure the user is authenticated
    !authStore.getIdToken &&
    // ❗️ Avoid an infinite redirect
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  }
});

export default router;
