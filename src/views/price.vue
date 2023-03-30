3

<script>
import { useProductStore } from "../stores/products.js";
import { mapState } from "pinia";
import footerComp from "../components/footer.vue";
export default {
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState(useProductStore, ["pricePlans"])
  },
  components: {
    footerComp
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
};
</script>

<template>
  <div v-if="!loading" class="inner-block">
    <div class="price-block-main">
      <div class="prices-head">
        <h2>Prices</h2>
      </div>
      <div class="price-tables">
        <div v-for="(item, index) in pricePlans" :key="index" class="col-md-4 price-grid">
          <div class="price-block">
            <div class="price-gd-top pric-clr1">
              <h4>{{ item.planName }}</h4>
              <h3>
                <span class="usa-dollar">$</span>
                {{ item.price }}
                <span class="per-month">/mon</span>
              </h3>
              <h5>{{ item.ofter }}</h5>
            </div>
            <div class="price-gd-bottom">
              <div class="price-list">
                <ul>
                  <li>{{ item.disk }} Disk</li>
                  <li>{{ item.bandWidth }} Bandwidth Monthly</li>
                  <li>{{ item.emailAccount }} Email Account</li>
                  <li>{{ item.subDomain }} Sub Domains</li>
                </ul>
              </div>
            </div>
            <div class="price-selet pric-clr1">
              <a class="popup-with-zoom-anim" href="#small-dialog">Select Plan</a>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>

      <!-- start footer component -->
      <footer-comp />
    </div>
  </div>
  <div v-else class="inner-block loading">
    <div class="price-block-main">
      <div class="prices-head">
        <h2 data-loading="text">Prices ...</h2>
      </div>
      <div class="price-tables">
        <div v-for="(item, index) in pricePlans" :key="index" class="col-md-4 price-grid">
          <div class="price-block">
            <div class="price-gd-top pric-clr1">
              <h4 data-loading="text">{{ item.planName }} ...</h4>
              <h3 data-loading="text">
                <span class="usa-dollar">$</span>
                {{ item.price }}
                <span class="per-month">/mon</span>
              </h3>
              <h5 data-loading="text">{{ item.ofter }}</h5>
            </div>
            <div class="price-gd-bottom">
              <div class="price-list">
                <ul class>
                  <li data-loading="text">{{ item.disk }} Disk ..</li>
                  <li data-loading="text">{{ item.bandWidth }} Bandwidth Monthly</li>
                  <li data-loading="text">{{ item.emailAccount }} Email Account</li>
                  <li data-loading="text">{{ item.subDomain }} Sub Domains</li>
                </ul>
              </div>
            </div>
            <div class="price-selet pric-clr1">
              <a data-loading="text" class="popup-with-zoom-anim" href="#small-dialog">Select Plan</a>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>

      <!-- start footer component -->
      <footer-comp />
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading {
  .price-gd-bottom ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin-top: 5px;
    }
  }

  .price-gd-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;

    h3,
    h5,
    h4 {
      margin-bottom: 5px;
    }
  }
}
</style>