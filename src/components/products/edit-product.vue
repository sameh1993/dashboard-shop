<script>
import { useVuelidate } from "@vuelidate/core";
import { required, numeric, alpha, url } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      product: {
        name: "",
        img: "",
        price: "",
        discount: 0,
        desc: ""
      }
    };
  },
  validations() {
    return {
      product: {
        name: { required },
        price: { required, numeric },
        discount: { numeric }
      }
    };
  },
  methods: {
    updateProduct(e) {
      e.preventDefault();
      const form = document.getElementById("form");
      const data = new FormData(form);
      console.log(data);
    },
    loadFile(event) {
      const file = event.target.files[0];
      const front = document.querySelector(".front");
      this.product.img = URL.createObjectURL(event.target.files[0]);
    },
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      };
    }
  }
};
</script>

<template>
  <div class="edit">
    <form @submit="updateProduct" class="form" id="form">
      <div class="upload-img">
        <img src="@/assets/images/placeholder-image.png" class="back" />
        <img class="front" v-if="product.img" :src="product.img" />
        <input type="file" name="img" @input="loadFile" />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          name="name"
          type="text"
          placeholder="product name"
          v-model="v$.product.name.$model"
          :class="status(v$.product.name)"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          name="price"
          type="text"
          placeholder="enter price"
          v-model="v$.product.price.$model"
          :class="status(v$.product.price)"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          name="discount"
          v-model="v$.product.discount.$model"
          placeholder="product discount"
          :class="status(v$.product.discount)"
        />
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary text-capitalize">send</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.edit {
  .form {
    width: 45%;
    background-color: #fff;
    margin: auto;
    padding: 35px;

    .form-control {
      height: 41px;
      padding-top: 8px;
    }
    .upload-img {
      position: relative;
      text-align: center;
      height: 173px;
      & > * {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 110px;
        height: 110px;
        background: #fff;
        border-radius: 50%;
      }
      .front {
        z-index: 5;
        transform: translate(-50%, -50%) scale(1.2);
      }
      input {
        position: absolute;
        z-index: 9;
        opacity: 0;
      }
    }
    .btn {
      min-width: 120px;
      margin-top: 20px;
    }
  }
}
</style>