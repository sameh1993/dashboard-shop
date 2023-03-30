
<script>
import { useMainStore } from "@/stores/main.js";
import { mapState } from "pinia";
import { computed } from "vue";
import { useCounterStore } from "@/stores/counter.js";
import { useAuthStore } from "@/stores/auth.js";
import { RouterLink, useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const msgs = [{ username: "sameh", img: "", timeStamp: "1 hour age" }];
    const notications = [
      { username: "sameh", img: "", timeStamp: "1 hour age" }
    ];
    const counterStore = useCounterStore();
    const authStore = useAuthStore();
    const activeSlideBar = computed(() => {
      return counterStore.active;
    });

    function getUrlImg(img) {
      const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
      return imageUrl;
    }

    function logout() {
      authStore.updateIdToken(null);
      router.push("/register/login");
    }
    return { msgs, notications, logout, authStore, activeSlideBar, getUrlImg };
  },
  computed: {
    printMsgs: function() {
      return this.msgs;
    },
    ...mapState(useMainStore, ["username", "userImg", "levelControl"])
  },
  components: { RouterLink }
};
</script>


<template>
  <div class="header-main fixed" :class="activeSlideBar ? 'left' : ''">
    <div class="header-left">
      <div class="logo-name">
        <router-link to="/">
          <h1>Shoppy</h1>
        </router-link>
      </div>
      <!--search-box-->
      <div class="search-box">
        <form class="form">
          <input type="text" placeholder="Search..." />
          <button class>
            <i class="fa fa-search rounded-circle"></i>
          </button>
        </form>
      </div>
      <!--//end-search-box-->
      <div class="clearfix"></div>
    </div>
    <div class="header-right">
      <div class="profile_details_left">
        <!--notifications of menu start -->
        <ul class="nofitications-dropdown">
          <li class="dropdown head-dpdn">
            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-envelope"></i>
              <span class="badge">{{ printMsgs.length }}</span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <div class="notification_header">
                  <h3>You have 3 new messages</h3>
                </div>
              </li>
              <li>
                <a>
                  <div class="user_img">
                    <img :src="getUrlImg('p2.png')" alt />
                  </div>
                  <div class="notification_desc">
                    <p>Lorem ipsum dolor</p>
                    <p>
                      <span>1 hour ago</span>
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </a>
              </li>
              <li class="odd">
                <a>
                  <div class="user_img">
                    <img :src="getUrlImg('p3.png')" alt />
                  </div>
                  <div class="notification_desc">
                    <p>Lorem ipsum dolor</p>
                    <p>
                      <span>1 hour ago</span>
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </a>
              </li>
              <li>
                <a>
                  <div class="user_img">
                    <img src="@/assets/images/p4.png" alt />
                  </div>
                  <div class="notification_desc">
                    <p>Lorem ipsum dolor</p>
                    <p>
                      <span>1 hour ago</span>
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </a>
              </li>
              <li>
                <div class="notification_bottom">
                  <RouterLink to="/mailbox/inbox">See all notifications</RouterLink>
                </div>
              </li>
            </ul>
          </li>
          <li class="dropdown head-dpdn">
            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-bell"></i>
              <span class="badge blue">3</span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <div class="notification_header">
                  <h3>You have 3 new notification</h3>
                </div>
              </li>
              <li>
                <a>
                  <div class="user_img">
                    <img src="@/assets/images/p5.png" alt />
                  </div>
                  <div class="notification_desc">
                    <p>Lorem ipsum dolor</p>
                    <p>
                      <span>1 hour ago</span>
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </a>
              </li>
              <li class="odd">
                <a>
                  <div class="user_img">
                    <img src="@/assets/images/p6.png" alt />
                  </div>
                  <div class="notification_desc">
                    <p>Lorem ipsum dolor</p>
                    <p>
                      <span>1 hour ago</span>
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </a>
              </li>
              <li>
                <a>
                  <div class="user_img">
                    <img src="@/assets/images/p7.png" alt />
                  </div>
                  <div class="notification_desc">
                    <p>Lorem ipsum dolor</p>
                    <p>
                      <span>1 hour ago</span>
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </a>
              </li>
              <li>
                <div class="notification_bottom">
                  <a>See all notifications</a>
                </div>
              </li>
            </ul>
          </li>
          <li class="dropdown head-dpdn">
            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-tasks"></i>
              <span class="badge blue1">9</span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <div class="notification_header">
                  <h3>You have 8 pending task</h3>
                </div>
              </li>
              <li>
                <a>
                  <div class="task-info">
                    <span class="task-desc">Database update</span>
                    <span class="percentage">40%</span>
                    <div class="clearfix"></div>
                  </div>
                  <div class="progress progress-striped active">
                    <div class="bar yellow" style="width: 40%"></div>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div class="task-info">
                    <span class="task-desc">Dashboard done</span>
                    <span class="percentage">90%</span>
                    <div class="clearfix"></div>
                  </div>
                  <div class="progress progress-striped active">
                    <div class="bar green" style="width: 90%"></div>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div class="task-info">
                    <span class="task-desc">Mobile App</span>
                    <span class="percentage">33%</span>
                    <div class="clearfix"></div>
                  </div>
                  <div class="progress progress-striped active">
                    <div class="bar red" style="width: 33%"></div>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div class="task-info">
                    <span class="task-desc">Issues fixed</span>
                    <span class="percentage">80%</span>
                    <div class="clearfix"></div>
                  </div>
                  <div class="progress progress-striped active">
                    <div class="bar blue" style="width: 80%"></div>
                  </div>
                </a>
              </li>
              <li>
                <div class="notification_bottom">
                  <a>See all pending tasks</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <!--notification menu end -->
      <div class="profile_details">
        <ul>
          <li class="dropdown profile_details_drop">
            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <div class="profile_img">
                <span class="prfil-img">
                  <img :src="getUrlImg('p6.png')" alt />
                </span>
                <div class="user-name">
                  <p>{{ username }}</p>
                  <span>{{ levelControl }}</span>
                </div>
                <i class="fa fa-angle-down lnr"></i>
                <i class="fa fa-angle-up lnr"></i>
                <div class="clearfix"></div>
              </div>
            </a>
            <ul class="dropdown-menu drp-mnu">
              <li>
                <router-link to="/">
                  <i class="fa fa-cog"></i> Settings
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <i class="fa fa-user"></i> Profile
                </router-link>
              </li>
              <li>
                <a @click="logout()" class="logout">
                  <i class="fa fa-sign-out"></i> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/GlobalRules/scss/mainRules.scss";
@import "@/main.scss";
.header-main {
  position: fixed;
  top: 0;
  right: 0;
  left: 57px;
  z-index: 60;
  transition: left 0.3s;
  .fixed {
    position: fixed;
    top: 0;
    margin: 0 auto;
    z-index: 1;
    background: #fff;
  }
  .header-left {
    @include media-breakpoint-down(sm) {
      display: flex;
      align-items: center;
    }
  }

  #menu li a {
    text-transform: capitalize !important;
  }

  .header-right {
    @include media-breakpoint-down(sm) {
      display: flex;
      align-content: center;
    }
  }
}

.setting {
  li {
    cursor: pointer;
  }

  .logout {
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }
}

.header-main.fixed .dropdown-toggle::after {
  display: none;
}

.logo-name h1 {
  @include maxScreen(md) {
    margin-top: 0;
  }
  @include media-breakpoint-down(xs) {
    margin-top: 5px;
  }
}

.search-box {
  @include minScreen(md) {
    width: 50%;
    margin: 6px auto;
  }

  @include maxScreen(sm) {
    width: 55%;
    // margin-left: 13px;
  }

  input[type="submit"] {
    transform: scale(0.7);
  }
}

.form {
  display: flex;

  input[type="submit"] {
    transform: scale(0.7);
  }

  button {
    border: 0;
    background-color: transparent;
    transform: translatex(15px);

    i {
      color: var(--mainColor);
      @include maxScreen(sm) {
        padding-right: 25px;
      }
    }
  }
}

.msgs > li {
  transition: background-color 0.3s linear;
  text-align: center;

  &:hover {
    background-color: #ebebeb;
  }
}

.dropdown-menu {
  transition: all 0s !important;
}

.prfil-img {
  img {
    border-radius: 50%;
    width: 44px;
    height: 44px;
  }
}

.fa-bars {
  @include maxScreen(sm) {
    display: none !important;
  }
}

li.dropdown.head-dpdn {
  margin-right: 8px;
}

li.dropdown.head-dpdn a.dropdown-toggle {
  margin: 1em 0.3em;
}

.header-main {
  height: 83px;
}

.profile_details_left {
  @include media-breakpoint-down(xs) {
    width: 41%;
  }
  ul {
    @include maxScreen(sm) {
      li.dropdown.head-dpdn {
        padding: 10px 2px;
      }
    }
  }
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-menu li a {
  // display: flex !important;
  justify-content: center;
  align-items: left !important;
  width: 96%;
  font-size: 12px;
}

.header-main.fixed {
  height: auto;
}

ul li ul.dropdown-menu.drp-mnu {
  @include maxScreen(md) {
    transform: translate3d(0px, 68px, 0px);
  }
}

.notification_desc p {
  padding: 0;
  margin: 0;
  font-size: 11px;
}

@media (min-width: 767px) {
  .left {
    left: 225px;
  }

  .profile_details li a i.fa.lnr {
    right: 0 !important;
  }
}
</style>
