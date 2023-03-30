<script>
import doughnut from "@/components/charts/Doughnut.vue";
import lineChart from "@/components/charts/line-chart.vue";
import polarChart from "@/components/charts/polar-chart.vue";
import pie from "@/components/charts/pie.vue";

export default {
  components: {
    doughnut,
    lineChart,
    polarChart,
    pie,
    footerComp
  }
};
</script>

<template>
  <div class="inner-block charts">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <doughnut />
      </div>
      <div class="col-md-6 col-sm-12">
        <line-chart />
      </div>
      <div class="col-md-6 col-sm-12">
        <polar-chart />
      </div>
      <div class="col-md-6 col-sm-12">
        <pie />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inner-block {
  .row > div {
    margin-bottom: 30px;
  }
}
</style>

