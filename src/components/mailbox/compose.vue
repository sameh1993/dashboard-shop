<script>
import { useMailStore } from "@/stores/mails.js";
import { useMainStore } from "@/stores/main.js";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useMailStore, ["inbox", "sentItem", "draft", "important"]),
    ...mapState(useMainStore, ["username", "levelControl", "userImg"])
  },
  methods: {
    emitSetView(value) {
      this.emitter.emit("setView", value);
      this.$router.push("/mailbox/inbox");
    },
    getUrlImg(img) {
      const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
      return imageUrl;
    }
  }
};
</script>

<template>
  <div class="col-md-4 compose">
    <div class="border">
      <div class="mail-profile">
        <div class="mail-pic">
          <img class :src="getUrlImg(userImg)" alt />
        </div>
        <div class="mailer-name">
          <h5 class="text-white">{{ username }}</h5>
          <h6 class="text-white">malorum@gmail.com</h6>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="compose-block">
        <router-link to="/mailbox/compose">Compose</router-link>
      </div>
      <div class="compose-bottom">
        <nav class="nav-sidebar">
          <ul class="nav tabs">
            <li @click="this.emitSetView('inbox')" class="active">
              Inbox
              <span class="bg-danger">{{ inbox.length }}</span>
            </li>
            <li @click="this.emitSetView('sentItem')" class>
              Sent Item
              <span>{{ sentItem.length }}</span>
            </li>
            <li @click="this.emitSetView('important')" class>
              Important
              <span v-if="important == 0" class="bg-info">{{ important }}</span>
            </li>
            <li @click="this.emitSetView('draft')" class>
              Draft
              <span class="bg-danger">{{ draft.length }}</span>
              <div class="clearfix"></div>
            </li>
            <li @click="$this.emitSetView('delete')" class>Delete</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav > li {
  width: 100%;
}

.nav.tabs li {
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
}

.mail-pic {
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
}

@media (max-width: 667px) {
  .mail-pic {
    width: 100% !important;
    margin: auto;
    text-align: center;
  }

  .mailer-name {
    width: 100%;
    text-align: center;
  }
}

.nav.tabs li {
  padding: 15px;
  border-bottom: 1px dotted #ccc;
  position: relative;

  span {
    position: absolute;
    width: 27px;
    height: 27px;
    line-height: 27px;
    text-align: center;
    right: 20px;
    border-radius: 50%;
    font-size: 11px;
    color: #fff;
    background-color: var(--danger);
  }
}
</style>