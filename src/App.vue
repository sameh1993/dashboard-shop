<script setup>
import sidebar from "@/components/sidebar.vue";
import bodyComp from "@/components/content/body.vue";
import navbarComp from "@/components/content/navbar.vue";

import recentFollowers from "@/components/content/recent-followers.vue";
import geoChart from "@/components/content/geo-chart.vue";
import footerComp from "@/components/footer.vue";
import $ from "jquery";
import { onMounted } from "vue";

onMounted(function () {
  $(document).ready(function () {
    var icons = new Skycons({ color: "#fff" }),
      list = [
        "clear-night",
        "cloudy",
        "partly-cloudy-night",
        "cloudy",
        "rain",
        "sleet",
        "snow",
        "wind",
        "fog",
      ],
      i;

    for (i = list.length; i--; ) icons.set(list[i], list[i]);

    icons.play();

    var icons = new Skycons({ color: "#fff" }),
      list = [
        "clear-night",
        "partly-cloudy-day",
        "partly-cloudy-night",
        "cloudy",
        "rain",
        "sleet",
        "snow",
        "wind",
        "fog",
      ],
      i;

    for (i = list.length; i--; ) icons.set(list[i], list[i]);

    icons.play();

    var navoffeset = $(".header-main").offset().top;
    $(window).scroll(function () {
      var scrollpos = $(window).scrollTop();
      if (scrollpos >= navoffeset) {
        $(".header-main").addClass("fixed");
      } else {
        $(".header-main").removeClass("fixed");
      }
    });

    var icons = new Skycons({ color: "#fff" }),
      list = [
        "clear-night",
        "clear-day",
        "partly-cloudy-night",
        "cloudy",
        "rain",
        "sleet",
        "snow",
        "wind",
        "fog",
      ],
      i;

    for (i = list.length; i--; ) icons.set(list[i], list[i]);

    icons.play();

    var barChartData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul"],
      datasets: [
        {
          fillColor: "#FC8213",
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          fillColor: "#337AB7",
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };
    new Chart(document.getElementById("bar").getContext("2d")).Bar(
      barChartData
    );
  });

  var toggle = true;

  $(".sidebar-icon").click(function () {
    if (toggle) {
      $(".page-container")
        .addClass("sidebar-collapsed")
        .removeClass("sidebar-collapsed-back");
      $("#menu span").css({ position: "absolute" });
    } else {
      $(".page-container")
        .removeClass("sidebar-collapsed")
        .addClass("sidebar-collapsed-back");
      setTimeout(function () {
        $("#menu span").css({ position: "relative" });
      }, 400);
    }
    toggle = !toggle;
  });
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
          <router-view />
          <!-- start footer -->
          <!--copy rights start here-->
          <footer-comp />
          <!--COPY rights end here-->
          <!-- end footer -->
        </div>
      </div>
      <!--slider menu-->
      <sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
