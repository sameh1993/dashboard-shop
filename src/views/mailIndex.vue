
<script>
import composeComp from "@/components/mailbox/compose.vue";
import MsgDetails from "../components/mailbox/msgDetails.vue";
import { mapState } from "pinia";
import { useMailStore } from "@/stores/mails.js";
export default {
  components: {
    composeComp,
    MsgDetails
  },
  data() {
    return {
      view: "inbox"
    };
  },
  computed: {
    ...mapState(useMailStore, ["inbox", "sentItem", "draft"]),
    getView() {
      return this.view;
    },
    getMsgs() {
      if (this.getView == "sentItem") {
        return this.sentItem;
      } else if (this.getView == "draft") {
        return this.draft;
      } else if (this.getView == "important") {
        return this.inbox.filter(item => item.star == true);
      } else if (this.getView == "delete") {
        return this.draft;
      } else if (this.getView == "inbox") {
        return this.inbox;
      }
    }
  },
  methods: {
    fetchView(view) {
      this.view = view;
    }
  },
  mounted() {
    this.emitter.on("setView", value => {
      console.log(value);
      this.view = value;
    });
  }
};
</script>


<template>
  <div class="inner-block">
    <div class="inbox">
      <h2>inbox</h2>

      <compose-comp />
      <!-- start msg details comp -->
      <transition name="fade">
        <msg-details :msgs="this.getMsgs" />
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.inner-block {
  overflow: hidden;
}
</style>