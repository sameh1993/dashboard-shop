<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    const ctx = document.getElementById("revenue");

    new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running"
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)"
          },
          {
            label: "My Second Dataset",
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)"
          }
        ]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });
  }
};
</script>

<template>
  <div class="content-main revenue">
    <h3>Total Revenue</h3>
    <canvas id="revenue" height="350" width="480" style="width: 480px; height: 350px;"></canvas>
  </div>
</template>

<style lang="scss" scoped>
@import "@/GlobalRules/scss/mainRules.scss";

#revenue {
  width: 372px !important;
  height: 350px !important;
  margin-top: 17px !important;

  @include maxScreen(sm) {
    width: 246px !important;
    height: 352px !important;
  }
}

.content-main {
  margin-right: 15px;
  @include maxScreen(sm) {
    margin-left: 15px;
  }
}
</style>
