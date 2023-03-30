<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      loading: false
    }
  },
  mounted() {

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
    });

    setTimeout(function () {
      this.loading = false
    }, 2000)

  }
}
</script>

<template>
  <div v-if="!loading" class="glocy-chart">
    <div class="span-2c">
      <h3 class="tlt">Sales Analytics</h3>

      <canvas id="myChart" height="375" width="730" style="width: 584px; height: 300px;"></canvas>
    </div>
  </div>
  <div v-else class="glocy-chart loading">
    <div class="span-2c">
      <h3 data-loading="text" class="tlt">Sales Analytics</h3>

      <div class="parent-img" data-loading="img">
        <img src="@/assets/images/placeholder-image.png" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/GlobalRules/scss/mainRules.scss";

canvas {
  margin-left: 0 !important;
  margin-right: 0 !important;
  width: 100% !important;
  min-height: 250px;
  width: 335px !important;
  height: 335px !important;
  margin: auto !important;
  transform: scale(.97);

  @include maxScreen(sm) {
    width: 256px !important;
    height: 256px !important;
  }
}

.glocy-chart {
  padding: 29px 1em;

  @include minScreen(md) {
    transform: translatex(15px);
    width: 97.3%;
  }

  @include maxScreen(sm) {
    margin-left: 15px;
    margin-right: 15px;
  }
}


.loading {

  .span-2c {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    .parent-img {
      height: 328px;
      justify-content: center;
      align-items: center;
      background: #ccc;
      width: 100%;
      display: flex;

      img {
        width: 40%;
        height: 50%;
      }
    }
  }
}
</style>
