<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
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
});
</script>

<template>
  <div class="prograc-blocks">
    <!--Progress bars-->
    <div class="home-progres-main">
      <h3>Total Sales</h3>
    </div>
    <div class="bar_group group_ident-1">
      <p class="b_label">Rating</p>
      <div
        class="bar_group__bar thin"
        label="Rating"
        show_values="true"
        tooltip="true"
        value="343"
        style="margin-bottom: 40px; width: 62.3636%"
      >
        <div class="b_tooltip">
          <span>343</span>
          <div class="b_tooltip--tri"></div>
        </div>
        <p class="bar_label_min">0</p>
        <p class="bar_label_max">550</p>
      </div>
      <p class="b_label">Quality</p>
      <div
        class="bar_group__bar thin"
        label="Quality"
        show_values="true"
        tooltip="true"
        value="235"
        style="margin-bottom: 40px; width: 42.7273%"
      >
        <div class="b_tooltip">
          <span>235</span>
          <div class="b_tooltip--tri"></div>
        </div>
        <p class="bar_label_min">0</p>
        <p class="bar_label_max">550</p>
      </div>
      <p class="b_label">Amount</p>
      <div
        class="bar_group__bar thin"
        label="Amount"
        show_values="true"
        tooltip="true"
        value="550"
        style="margin-bottom: 40px; width: 100%"
      >
        <div class="b_tooltip">
          <span>550</span>
          <div class="b_tooltip--tri"></div>
        </div>
        <p class="bar_label_min">0</p>
        <p class="bar_label_max">550</p>
      </div>
      <p class="b_label">Farming</p>
      <div
        class="bar_group__bar thin"
        label="Farming"
        show_values="true"
        tooltip="true"
        value="456"
        style="margin-bottom: 40px; width: 82.9091%"
      >
        <div class="b_tooltip">
          <span>456</span>
          <div class="b_tooltip--tri"></div>
        </div>
        <p class="bar_label_min">0</p>
        <p class="bar_label_max">550</p>
      </div>
    </div>

    <!--//Progress bars-->
  </div>
</template>
