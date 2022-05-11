<script>
export default {
  setup() {},
  mounted() {
    var radarChartData = {
      labels: ["", "", "", "", "", "", ""],
      datasets: [
        {
          fillColor: "rgba(104, 174, 0, 0.83)",
          strokeColor: "#68ae00",
          pointColor: "#68ae00",
          pointStrokeColor: "#fff",
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          fillColor: "rgba(236, 133, 38, 0.82)",
          strokeColor: "#ec8526",
          pointColor: "#ec8526",
          pointStrokeColor: "#fff",
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };
    new Chart(document.getElementById("radar").getContext("2d")).Radar(
      radarChartData
    );
  },
};
</script>

<template>
  <div class="content-main revenue">
    <h3>Total Revenue</h3>
    <canvas
      id="radar"
      height="300"
      width="300"
      style="width: 300px; height: 300px"
    ></canvas>
  </div>
</template>
