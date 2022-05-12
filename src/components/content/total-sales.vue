<script>
import "@/assets/js/bars.js";
export default {
  setup() {},
};
</script>
<template>
  <div class="prograc-blocks">
    <!--Progress bars-->
    <div class="home-progres-main">
      <h3>Total Sales</h3>
    </div>
    <div class="bar_group">
      <div
        class="bar_group__bar thin"
        label="Rating"
        show_values="true"
        tooltip="true"
        value="343"
      ></div>
      <div
        class="bar_group__bar thin"
        label="Quality"
        show_values="true"
        tooltip="true"
        value="235"
      ></div>
      <div
        class="bar_group__bar thin"
        label="Amount"
        show_values="true"
        tooltip="true"
        value="550"
      ></div>
      <div
        class="bar_group__bar thin"
        label="Farming"
        show_values="true"
        tooltip="true"
        value="456"
      ></div>
    </div>

    <!--//Progress bars-->
  </div>
</template>
