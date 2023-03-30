<script>
import useVulidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { loginUser } from "@/firebase/auth.js";
import { useAuthStore } from "../../stores/auth";
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";
import { mapActions, mapGetters, mapState } from "pinia";
import { reactive } from "vue";

export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const user = reactive({
      email: "",
      password: ""
    });

    return { v$: useVulidate(), user, authStore };
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  validations() {
    return {
      user: {
        email: { required, email },
        password: { required, minLength: minLength(6) }
      }
    };
  },
  computed: {
    ...mapState(useAuthStore, ["idToken"])
  },
  methods: {
    ...mapActions(useAuthStore, ["updateIdToken"]),
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      };
    },
    loginUser() {
      const msg = document.querySelector(".ourMsg");
      loginUser(this.user)
        .then(result => {
          this.updateIdToken(result.accessToken);
          this.$router.push("/");
          this.$notify({
            title: "Authorization",
            text: "You have been logged in!"
          });
        })
        .catch(err => {
          console.log(err);
          let error = err;
          error.replace("auth/", "");
          error.replace("-", " ");
          notify({
            title: "error",
            text: error
          });
        });
    }
  },
  mounted() {
    this.$notify({
      title: "welcome dear",
      text: `
        user : admin@example.com <br />
        pass: admin12345
      `
    });
  }
};
</script>

<template>
  <div class>
    <!--inner block start here-->
    <div class="signup-page-main">
      <div class="signup-main">
        <div class="signup-head">
          <h1>Login</h1>
        </div>
        <div class="signup-block">
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <input
                autocomplete="off"
                type="text"
                :class="status(v$.user.email)"
                v-model="v$.user.email.$model"
                name="email"
                placeholder="Email"
              />
              <p
                class="text-danger"
                v-for="(item, index) of v$.user.email.$errors"
                :key="index"
              >{{ item.$message }}</p>
              <!-- <p>{{ v$.user.email.$errors }}</p> -->
            </div>
            <div class="form-group">
              <input
                autocomplete="off"
                type="password"
                name="password"
                :class="status(v$.user.password)"
                class="lock"
                v-model="v$.user.password.$model"
                placeholder="Password"
              />
              <p
                class="text-danger"
                v-for="(item, index) of v$.user.password.$errors"
                :key="index"
              >{{ item.$message }}</p>
            </div>

            <button :disabled="v$.$invalid" class="btn-submit">Submit</button>
          </form>
          <!-- <div class="sign-down">
            <h4>
              create account?
              <router-link class="text-info" to="/register">signup here.</router-link>
            </h4>
            <h5>
              <router-link to="/">Go Back to Home</router-link>
            </h5>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signup-page-main {
  display: flex;
  min-height: 100vh;
  align-items: center;
}
form {
  .alert-danger {
    padding: 11px;
    color: #fff !important;
  }
}

.dirty {
  border-color: #5a5 !important;
  background: #efe;
}

.dirty:focus {
  outline-color: #8e8 !important;
}

.error {
  border-color: red !important;
  background: #fdd !important;
}

.error:focus {
  outline-color: #f99;
}

.btn-submit {
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  background: #337ab7;
  width: 100%;
  margin: 0 auto;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-size: 1em;
  display: block;
  font-family: "Carrois Gothic", sans-serif;
}

.form-group {
  margin-bottom: 17px;

  input {
    margin-bottom: 0 !important;
  }
}
</style>
