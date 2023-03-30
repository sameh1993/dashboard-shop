<script>
import "@/assets/js/chart.min.js";

export default {
  data() {
    return {
      doughnutData: [
        {
          value: 30,
          color: "#337AB7",
        },
        {
          value: 50,
          color: "#929292",
        },
        {
          value: 100,
          color: "#FC8213",
        },
        {
          value: 40,
          color: "#68AE00",
        },
      ],
    };
  },
  mounted() {
    new Chart(document.getElementById("doughnut").getContext("2d")).Doughnut(
      this.doughnutData
    );
  },
};
</script>

<template>
  <div class="Doughnut">
    <h3>Doughnut</h3>
    <canvas
      id="doughnut"
      height="300"
      width="470"
      style="width: 470px; height: 300px"
    ></canvas>
  </div>
</template>

<style lang="scss" scoped>
.Doughnut {
  background-color: #fff;
  border: 1px solid #cdcdcd;
  padding: 25px;
  h3 {
    margin-bottom: 25px;
    font-weight: 300;
    font-size: 25px;
  }
}
</style>
