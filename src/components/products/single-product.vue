<script>
import starRating from "@/components/helps/star-rating.vue";
import { useProductStore } from "@/stores/products.js";
import { mapActions } from "pinia";
export default {
  props: ["item"],
  components: {
    starRating
  },
  methods: {
    ...mapActions(useProductStore, ["deleteProductByName"]),
    getUrlImg(img) {
      const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
      return imageUrl;
    }
  }
};
</script>

<template>
  <div class="item">
    <div class="parent-img">
      <img class :src="getUrlImg(item.img)" alt />
      <div class="modify">
        <router-link class="fa fa-pencil-square-o" to="/e-commerce/product/edit"></router-link>
        <i @click="deleteProductByName(item.productName)" class="fa fa-trash"></i>
      </div>
    </div>
    <div class="produ-cost text-center">
      <starRating :rating="item.rating"></starRating>
      <h4>
        <router-link :to="`/e-commerce/product/${item.productName}`">{{ item.productName }}</router-link>
      </h4>
      <h5>
        <span class="text-danger">{{ item.discount + "%" }}</span> |
        <span>${{ item.price - ( item.price * item.discount ) / 100 }}</span>
      </h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  h4 a {
    color: #fff;
  }

  .produ-cost {
    padding: 16px 1.2em;
  }

  .parent-img {
    position: relative;
    height: 250px;
    display: flex;
    justify-content: center;
    align-content: center;

    img {
      max-width: 100%;
    }
    .modify {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      padding: 10px 5px;
      a,
      i {
        width: 25px;
        height: 30px;
        color: #fff;
        border-radius: 3px;
        line-height: 28px;
        text-align: center;
        margin: 0 4px;
        font-size: 12px;
        background: #222;
        margin-bottom: 7px;
      }
    }
  }
}
</style>