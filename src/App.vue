

<template>
  <div class="root">
    <router-view />

    <notifications class="notify" />
  </div>
</template>

<style lang="scss">
@import "@/GlobalRules/scss/mainRules.scss";

.root {
  margin: unset !important;
}

.notify {
  @include maxScreen(sm) {
    margin-top: 15px;
    margin-right: 35px;
  }
  margin-top: 30px;
  margin-right: 30px;
}
</style>
