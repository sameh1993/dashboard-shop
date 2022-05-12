<script>
import footerComp from "@/components/footer.vue";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  setup() {},
  components: {
    footerComp,
  },
});
</script>

<template>
  <div class="register">
    <router-view />

    <footer-comp />
  </div>
</template>
