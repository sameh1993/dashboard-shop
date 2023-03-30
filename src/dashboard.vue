<script setup>
import sidebar from "@/components/sidebar.vue";
import bodyComp from "@/components/content/body.vue";
import navbarComp from "@/components/content/navbar.vue";
import footerComp from "@/components/footer.vue";
import $ from "jquery";
import { onMounted } from "vue";

onMounted(() => {
  $(".sidebar-icon").click(function() {
    $(".page-container").toggleClass(
      "sidebar-collapsed slidebar-collapsed-back"
    );
    $(".header-main").toggleClass("left");
  });

  window.onresize = function() {
    // const container = document.querySelectorAll(".page-container");
    // if (window.innerWidth >= 922) {
    //   container.classList.remove(
    //     "sidebar-collapsed",
    //     "slidebar-collapsed-back"
    //   );
    // } else {
    //   container.classList.add("slidebar-collapsed-back", "sidebar-collapsed");
    // }
  };
});
</script>

<template>
  <div class="root">
    <div class="page-container">
      <div class="left-content">
        <div class="mother-grid-inner">
          <!-- script-for sticky-nav -->
          <navbar-comp />
          <!-- /script-for sticky-nav -->
          <!-- <Transition name="fade">
            
            <router-view />
          </Transition>-->
          <div class>
            <router-view v-slot="{ Component, route }">
              <transition name="fade" mode="out-in">
                <div :key="route.name">
                  <component :is="Component"></component>
                </div>
              </transition>
            </router-view>

            <footerComp />
          </div>

          <!-- start footer -->
        </div>
      </div>
      <!--slider menu-->
      <sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";

.style {
  padding-left: 30px;
  padding-right: 30px;
}

.root {
  min-height: 100vh;
}

.page-container {
  min-width: unset;
  overflow: hidden;
  min-height: 100vh;

  .header-main {
    left: auto;
    @include media-breakpoint-up(md) {
      width: 86%;
    }
  }

  .left-content {
    padding-top: 20px;
    height: 100%;
    width: 85.9%;
    @include media-breakpoint-up(md) {
      width: 85.6%;
    }

    @include media-breakpoint-only(sm) {
      width: 91.9%;
    }

    .fixed {
      @include media-breakpoint-down(sm) {
        width: 91%;
      }
      @include media-breakpoint-down(xs) {
        width: 85%;
      }
    }
  }

  .sidebar-menu {
    left: 0;
  }
}

.slidebar-collapsed-back {
  .left-content {
    width: 96%;
    @include media-breakpoint-up(md) {
      width: 91.9%;
    }
    @include media-breakpoint-only(md) {
      width: 93%;
    }
  }

  .fixed {
    @include media-breakpoint-up(md) {
      width: 96%;
    }
  }
}
</style>
