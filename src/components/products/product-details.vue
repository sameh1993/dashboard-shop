<script>
// import title from "@/components/helps/title.vue";
import starRating from "@/components/helps/star-rating.vue";
import { mapActions, mapState } from "pinia";
// import socialLinks from "@/components/helps/social-links.vue";
import { useProductStore } from "@/stores/products.js";
import SingleProduct from "@/components/products/single-product.vue";
export default {
  data() {
    return {};
  },
  components: {
    // title,
    starRating,
    // socialLinks
    SingleProduct
  },
  methods: {
    ...mapActions(useProductStore, ["getProductByName", "deleteProductByName"]),
    getUrlImg(img) {
      const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
      return imageUrl;
    }
  },
  computed: {
    ...mapState(useProductStore, ["ourProducts"]),
    item() {
      return this.getProductByName(this.$route.params.name);
    },
    products() {
      return this.ourProducts;
    }
  }
};
</script>

<template>
  <div class="product-details">
    <div class>
      <!-- start head com -->
      <!-- <title name="our project" /> -->
      <div class="details body">
        <div class="row">
          <div class="col-md-5">
            <div class="parent-img w-100 text-center">
              <img :src="getUrlImg(item.img)" alt />
            </div>
          </div>
          <div class="col-md-7 info">
            <h3 class="text-capitalize">{{ item.productName }}</h3>
            <!-- start rating -->
            <star-rating rating="2.5" />

            <!-- // price  -->
            <div class="price">
              <span class="text-success">{{ item.discount }}%</span>
              <span>${{ item.price }}</span>
            </div>

            <p
              class="desc"
            >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
        </div>
      </div>

      <div class="related">
        <div class="head text-capitalize">
          <h3>related product</h3>
        </div>
        <div class="body">
          <div v-for="(item, index) of products" :key="index" class="col-md-3">
            <!-- start single product cmoponent -->
            <SingleProduct :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.product-details {
  padding: 2em 0;

  .container {
    @include media-breakpoint-down(sm) {
      margin-left: 0 !important;
      margin-right: 0 !important;
      max-width: auto !important;
      padding: 0;
    }
  }

  .details {
    width: 70%;
    margin: auto;
    border: 1px solid #c5c5c55c;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 15px;
  }

  .body {
    & > .row > div {
      @include media-breakpoint-down(sm) {
        padding-left: 0;
        padding-right: 0;
      }
    }

    .parent-img {
      position: relative;
      height: 221px;
      background: #fff;
      display: flex;
      justify-content: center;
    }
  }
  .row {
    margin-top: 15px;
    h3 {
      margin-bottom: 10px;
      color: var(--mainColor);
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .price {
    font-size: 20px;
    span:first-child {
      margin-right: 10px;
    }
  }

  .related {
    .row > div {
      margin-bottom: 30px;
    }
  }

  .desc {
    margin-top: 10px;
    line-height: 2;
    font-size: 15px;
  }
  .social {
    justify-content: flex-start !important;
  }

  .main-button {
    display: inline-block;
    margin-top: 5px;
  }
}

.related {
  padding: 3em 0;
  color: var(--mainColor);

  h3 {
    margin-bottom: 20px;
    margin-left: 25px;
    @include media-breakpoint-down(sm) {
      text-align: center;
    }
  }
  .body {
    .row > div {
      margin-bottom: 20px;
    }
  }
}
</style>