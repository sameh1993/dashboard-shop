

<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();

const logout = function() {
  auth.idToken = "";
  router.push("/register/login");
};
</script>

<template>
  <div class="sidebar-menu">
    <div class="logo">
      <router-link to="/" class="sidebar-icon">
        <span @click="changeactiveSlide" class="fa fa-bars"></span>
      </router-link>
      <a href="#">
        <span id="logo"></span>
      </a>
    </div>
    <div class="menu">
      <ul id="menu">
        <li id="menu-home">
          <router-link to="/">
            <i class="fa fa-tachometer"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <a>
            <i class="fa fa-cogs"></i>
            <span>Components</span>
            <span class="fa fa-angle-right" style="float: right"></span>
          </a>
          <ul>
            <li>
              <router-link to="/components/grid">Grids</router-link>
            </li>
            <li>
              <router-link to="/components/part">Portlets</router-link>
            </li>
          </ul>
        </li>
        <li id="menu-academico">
          <a>
            <i class="fa fa-file-text"></i>
            <span>Pages</span>
            <span class="fa fa-angle-right" style="float: right"></span>
          </a>
          <ul id="menu-academico-sub">
            <li id="menu-academico-boletim">
              <router-link to="/register/login">Login</router-link>
            </li>
            <li id="menu-academico-avaliacoes">
              <router-link to="/register">Sign Up</router-link>
            </li>
          </ul>
        </li>

        <!-- <li>
          <router-link to="/charts"><i class="fa fa-bar-chart"></i><span>Charts</span></router-link>
        </li>-->
        <li>
          <a href="#">
            <i class="fa fa-cog"></i>
            <span>mailbox</span>
            <span class="fa fa-angle-right" style="float: right"></span>
          </a>
          <ul id="menu-academico-sub">
            <li id="menu-academico-avaliacoes">
              <router-link to="/mailbox/inbox">compose</router-link>
            </li>
            <li id="menu-academico-boletim">
              <router-link to="/mailbox/compose">compose email</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-cog"></i>
            <span>System</span>
            <span class="fa fa-angle-right" style="float: right"></span>
          </a>
          <ul id="menu-academico-sub">
            <li id="menu-academico-avaliacoes">
              <router-link to="/system/page404">404</router-link>
            </li>
            <li id="menu-academico-boletim">
              <router-link to="/system/black">Blank</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-shopping-cart"></i>
            <span>E-Commerce</span>
            <span class="fa fa-angle-right" style="float: right"></span>
          </a>
          <ul id="menu-academico-sub">
            <li id="menu-academico-avaliacoes">
              <router-link to="/e-commerce/products">Product</router-link>
            </li>
            <li id="menu-academico-boletim">
              <router-link to="/e-commerce/price">Price</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/GlobalRules/scss/mainrules.scss";

.sidebar-menu {
  position: fixed !important;
}

.sidebar {
  background-color: #eee;
  width: 18%;
  transition: width 0.5s linear;
  position: relative;

  &.menu {
    width: 7%;
  }

  .fa-bars {
    padding: 4px 6px;
    border: 1px solid #777;
    border-radius: 2px;
    margin: 20px 0 25px;
  }

  .list-unstyled {
    span {
      display: block;
      margin: 5px;
    }
  }
}

.sidebar-icon {
  @include maxScreen(sm) {
    display: none;
  }
}
</style>
