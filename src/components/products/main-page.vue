<script setup>
import { required } from "@vuelidate/validators";
import { reactive, onMounted, ref, computed } from "vue";
import starRating from "@/components/helps/star-rating.vue";
import { useProductStore } from "@/stores/products.js";
import SingleProduct from "@/components/products/single-product.vue";

const loading = ref(true);
const productStore = useProductStore();

function getUrlImg(img) {
  const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
  return imageUrl;
}
// const products = reactive([]);
const products = computed(() => {
  return productStore.ourProducts;
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<template>
  <div class="products">
    <div v-if="!loading" class="product-block">
      <div class="pro-head">
        <h2>products</h2>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 col-sm-12" v-for="(item, index) in products" :key="index">
          <SingleProduct :item="item" />
        </div>
      </div>
    </div>
    <div v-else class="product-block loading">
      <div class="pro-head">
        <h2 data-loading="item">
          <span data-loading="text">products</span>
        </h2>
      </div>

      <div class="row">
        <div class="col-md-3" v-for="(item, index) in products" :key="index">
          <div class="item">
            <div class="project-eff">
              <div id="nivo-lightbox-demo">
                <p>
                  <a
                    href="images/pro1.jpg"
                    data-lightbox-gallery="gallery1"
                    id="nivo-lightbox-demo"
                  >
                    <span class="rollover1"></span>
                  </a>
                </p>
              </div>
              <img
                data-loading="img"
                class="img-responsive"
                src="@/assets/images/placeholder-image.png"
                alt
              />
            </div>
            <div class="produ-cost text-center">
              <h4>
                <span data-loading="text">{{ item.productName }}</span>
              </h4>
              <h5>
                <span data-loading="text">{{ item.price }} $</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.products {
  padding-left: 25px;
  padding-right: 25px;
  .pro-head h2 {
    margin-bottom: 20px;
  }

  .row > div {
    margin-bottom: 25px;

    h5 {
      font-size: 14px;
    }
  }
  h4 a {
    color: #fff;
  }
}
.votes i {
  font-size: 11px;
}
.img-responsive {
  min-height: 250px;
}

.loading [data-loading="img"] {
  height: 250px;
}

.project-eff img {
  width: 100%;
}

.loading {
  .pro-head h2 {
    margin-left: 0;
  }
}
</style>