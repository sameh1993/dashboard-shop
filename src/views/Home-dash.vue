<script setup>
import marketUpdates from "@/components/content/market-updates.vue";
import TotalRevenue from "@/components/content/total-revenue.vue";
import recentFollowers from "@/components/content/recent-followers.vue";
import navbarComp from "@/components/footer.vue";
import GlocyChart from "@/components/content/glocy-chart.vue";
import geoChart from "@/components/content/geo-chart.vue";
import Climate from "@/components/content/climate.vue";
import totalSales from "@/components/content/total-sales.vue";
import shopyRate from "@/components/content/shopy-rate.vue";
import climate from "@/components/content/climate.vue";
import popularBrand from "@/components/content/popular-brand.vue";

import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();
</script>

<template>
  <!--inner block start here-->
  <div class="home inner-block">
    <!--market updates updates-->
    <!-- <Suspense> -->
    <market-updates name="sameh sayed" />

    <!-- </Suspense> -->
    <!--mark et updates end here-->
    <!--mainpage chit-chating-->
    <div class="chit-chat-layer1 row">
      <div class="col-md-6">
        <!-- start recent followers -->
        <recent-followers />
        <!-- end recent followers -->
      </div>
      <div class="col-md-6">
        <total-sales />
      </div>
    </div>
    <!--main page chit chating end here-->
    <!--main page chart start here-->
    <div class="main-page-charts">
      <div class="main-page-chart-layer1 row">
        <div class="col-lg-6 col-md-12 chart-layer1-left">
          <GlocyChart />
        </div>
        <div class="col-md-12 col-lg-6 pb-1 chart-layer1-right">
          <TotalRevenue />
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!--main page chart layer2-->

    <!--climate start here-->
    <div class="climate">
      <div class="col-md-4 climate-grids mt-4">
        <climate />
      </div>

      <div class="col-md-4 climate-grids mt-4">
        <shopy-rate />
      </div>

      <div class="col-md-4 climate-grids mt-4">
        <popularBrand />
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/GlobalRules/scss/mainRules.scss";
@import "@/main.scss";

.home.inner-block {
  @include maxScreen(sm) {
    overflow: hidden !important;
  }
}

.chart-layer2-right {
  width: 100%;
}

.chit-chat-layer1-left {
  padding: unset;
}

.malorm-bottom {
  padding: 20px 1em;
}

.popular-follo-left {
  padding: 3.3em 1em;
}

.chit-chat-layer1 {
  & > div {
    @include maxScreen(md) {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
