<script>
import useVulidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { signupUser } from "@/firebase/auth.js";
export default {
  setup() {
    return { v$: useVulidate() };
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  validations() {
    return {
      user: {
        // name: { required, minLength: minLength(6) },
        email: { required, email },
        password: { required, minLength: minLength(6) }
      }
    };
  },
  methods: {
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      };
    },
    signupUser() {
      const msg = document.querySelector(".ourMsg");

      signupUser(this.user)
        .then(result => {
          // return console.log("res", result)
          if (result.msg == "user is registered") {
            this.$router.push({ path: "/register/login" });
          }
        })
        .catch(err => {
          if (err.errorMessage.includes("email-already-in-use")) {
            this.$notify({
              text: "email address already exists"
            });
          } else {
            this.$notify({
              text: "err.errorMessage"
            });
          }
        });
    }
  }
};
</script>

<template>
  <!--inner block start here-->
  <div class="signup-page-main">
    <div class="signup-main">
      <div class="signup-head">
        <h1>Sign Up</h1>
      </div>
      <div class="signup-block">
        <form @submit.prevent="signupUser()">
          <div class="form-group">
            <input
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
          </div>
          <div class="form-group">
            <input
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
          <div class="forgot-top-grids">
            <div class="forgot-grid">
              <ul>
                <li>
                  <input type="checkbox" id="brand1" value />
                  <label for="brand1">
                    <span></span>I agree to the terms
                  </label>
                </li>
              </ul>
            </div>

            <div class="clearfix"></div>
          </div>
          <button :disabled="v$.$invalid" class="btn-submit">Submit</button>
        </form>
        <div class="sign-down">
          <h4>
            Already have an account?
            <router-link class="text-info" to="/register/login">Login here.</router-link>
          </h4>
          <h5>
            <router-link class="text-info" to="/">Go Back to Home</router-link>
          </h5>
        </div>
      </div>
    </div>
  </div>
  <!--inner block end here-->
</template>

<style lang="scss" scoped>
.signup-page-main {
  display: flex;
  min-height: 100vh;
  align-items: center;
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
