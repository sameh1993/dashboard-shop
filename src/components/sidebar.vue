<script>
import { onMounted } from "vue";
import $ from "jquery";

export default {
  mounted() {
    console.log($(".fa-bars").attr("class"));
    $("body").on("click", ".fa-bars", function () {
      $(".sidebar").toggleClass("menu");
    });
  },
};
</script>

<template>
  <div class="sidebar text-center">
    <i class="fa fa-bars"></i>
    <ul class="list-unstyled">
      <li><i class="fa fa-facebook"></i> <span>title</span></li>
      <li><i class="fa fa-facebook"></i> <span>title</span></li>
      <li><i class="fa fa-facebook"></i> <span>title</span></li>
      <li><i class="fa fa-facebook"></i> <span>title</span></li>
      <li><i class="fa fa-facebook"></i> <span>title</span></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  background-color: #eee;
  width: 18%;
  transition: width 0.5s linear;
  &.menu {
    width: 7%;
  }

  .fa-bars {
    padding: 4px 6px;
    border: 1px solid #777;
    border-radius: 2px;
    margin: 20px 0 25px;
  }
  .list-unstyled {
    span {
      display: block;
      margin: 5px;
    }
  }
}
</style>
