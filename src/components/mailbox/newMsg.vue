
<script>
import useVulidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVulidate() };
  },
  data() {
    return {
      sendTo: "",
      subject: "",
      content: ""
    };
  },
  methods: {
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      };
    }
  },
  validations() {
    return {
      sendTo: { required, email },
      subject: { required },
      content: { required }
    };
  }
};
</script>

<template>
  <div class="col-md-8 compose-right">
    <div class="inbox-details-default">
      <div class="inbox-details-heading">Compose New Message</div>
      <div class="inbox-details-body">
        <div class="alert alert-info border">Please fill details to send a new message</div>
        <form class="com-mail">
          <input type="text" :class="status(v$.sendTo)" v-model="v$.sendTo.$model" />
          <p class="alert alert-danger" v-for="(item, indox) of v$.sendTo.$error" :key="indox">
            {{
            item.$message
            }}
          </p>

          <input type="text" :class="status(v$.subject)" v-model="v$.subject.$model" />
          <p class="alert alert-danger" v-for="(item, indox) of v$.subject.$error" :key="indox">
            {{
            item.$message
            }}
          </p>

          <textarea rows="6" :class="status(v$.content)" v-model="v$.content.$model"></textarea>
          <p
            class="alert alert-danger"
            v-for="(item, indox) of v$.content.$error"
            :key="indox"
          >{{ item.$message }}</p>

          <div class="form-group">
            <div class="btn btn-default btn-file border">
              <i class="fa fa-paperclip"></i> Attachment
              <input type="file" name="attachment" />
            </div>
          </div>

          <button :disabled="v$.$invalid" class="btn-submit btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>