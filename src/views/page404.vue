<script>
export default {};
</script>

<template>
  <div class="paga404">
    <div class="error-404">
      <div class="error-page-left">
        <img src="@/assets/images/404.png" alt />
      </div>
      <div class="error-right">
        <h2>Oops! Page Not Open</h2>
        <h4>Nothing Is Found Here!!</h4>
        <a click="text-capitalize" @click="$router.go(-1)">Go Back</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/Globalrules/scss/mainRules.scss";

.paga404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 86vh;

  @include maxScreen(sm) {
    padding-top: 70px;

    h2 {
      margin-bottom: 10px;
      font-size: 26px;
      margin-top: 25px;
    }

    img {
      transform: scale(0.8);
      width: 60%;
    }
  }

  .error-404 {
    img {
      width: 23%;
    }
    h2 {
      font-size: 32px;
    }
    h4 {
      font-size: 17px;
      margin-top: 8px;
    }
  }

  a {
    cursor: pointer;
  }
}
</style>

