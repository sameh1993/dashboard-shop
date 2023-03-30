<script>
import { onMounted, reactive, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const user = reactive({
      registeredLength: 6549,
      dailyVisitors: 951,
      newMsg: 852
    });
    const loading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    });

    return { user, loading };
  }
});
</script>

<template>
  <div v-if="loading" class="market-updates animated-background">
    <div v-for="(item, index) in user" :key="index" class="col-md-4 market-update-gd">
      <div class="market-update-block clr-block animated-background">
        <div class="col-md-8 market-update-left">
          <h3>321</h3>
          <h4>Registered User ..</h4>
          <p>Other hand, we denounce</p>
        </div>
        <div class="col-md-4 market-update-right">
          <!-- <i class="fa fa-file-text-o"> </i> -->
          <img src="@/assets/images/placeholder-image.png" />
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
  <div v-else class="market-updates loading animated-background">
    <div v-for="(item, index) in user" :key="index" class="col-md-4 market-update-gd">
      <div class="market-update-block clr-block animated-background">
        <div class="col-md-8 market-update-left">
          <h3 data-loading="text">321</h3>
          <h4 data-loading="text">Registered User ..</h4>
          <p data-loading="text">Other hand, we denounce</p>
        </div>
        <div class="col-md-4 market-update-right">
          <!-- <i class="fa fa-file-text-o"> </i> -->
          <img data-loading="img" src="@/assets/images/placeholder-image.png" />
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/globalRules/scss/mainRules.scss";
@import "@/main.scss";

.market-updates {
  .market-update-block {
    display: flex !important;
    width: 100%;
    padding: 15px;
    text-align: left;
    padding-bottom: 5px;
  }

  .market-update-right {
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      transform: scale(1.3);
    }
  }

  .market-update-block h4 {
    font-size: 14px;
  }
}

.loading {
  background-color: #eee;
  @include media-breakpoint-down(md) {
    & > div {
      margin-bottom: 20px !important;
    }
  }

  .market-update-left {
    display: flex !important;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;

    [data-loading="text"] {
      height: 20px;
    }
  }

  .market-update-right {
    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  img {
    @include maxScreen(sm) {
      width: 70% !important;
    }
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .market-update-block {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    transform: scalex(0.96) translatex(12px) !important;
  }
}
</style>
