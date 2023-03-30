<script>
export default {
  data() {
    return {
      loading: true,
      user: {
        registeredLength: 6549,
        dailyVisitors: 951,
        newMsg: 852,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  },
};
</script>

<template>
  <div>
    <div v-if="!loading" class="martket-update">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-md-7 col-sm-7">
                <h1>32</h1>
                <h4>registered user</h4>
                <p>Other hand, we denounce</p>
              </div>
              <div class="col-md-5 col-sm-5">
                <i class="fa fa-file-text-o"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-md-7 col-sm-7">
                <h1>85</h1>
                <h4>daily visitors</h4>
                <p>Other hand, we denounce</p>
              </div>
              <div class="col-md-5 col-sm-5">
                <i class="fa fa-file-text-o"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-md-7 col-sm-7">
                <h1>150</h1>
                <h4>new messages</h4>
                <p>Other hand, we denounce</p>
              </div>
              <div class="col-md-5 col-sm-5">
                <i class="fa fa-file-text-o"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="martket-update loading">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-md-7 col-sm-7">
                <h1>
                  <span data-loading="text">215</span>
                </h1>
                <h4>
                  <span data-loading="text">registered user</span>
                </h4>
                <p>
                  <span data-loading="text">Other hand, we denounce</span>
                </p>
              </div>
              <div class="col-md-5 col-sm-5">
                <img
                  src="@/assets/images/placeholder-img.png"
                  class="rounded-circle"
                  data-loading="img"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-md-7 col-sm-7">
                <h1>
                  <span data-loading="text">215</span>
                </h1>
                <h4>
                  <span data-loading="text">registered user</span>
                </h4>
                <p>
                  <span data-loading="text">Other hand, we denounce</span>
                </p>
              </div>
              <div class="col-md-5 col-sm-5">
                <img
                  src="@/assets/images/placeholder-img.png"
                  class="rounded-circle"
                  data-loading="img"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-md-7 col-sm-7">
                <h1>
                  <span data-loading="text">215</span>
                </h1>
                <h4>
                  <span data-loading="text">registered user</span>
                </h4>
                <p>
                  <span data-loading="text">Other hand, we denounce</span>
                </p>
              </div>
              <div class="col-md-5 col-sm-5">
                <img
                  src="@/assets/images/placeholder-img.png"
                  class="rounded-circle"
                  data-loading="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.martket-update {
  padding-left: 15px;
  padding-right: 15px;
  .row > div {
    @include media-breakpoint-down(sm) {
      padding-left: 0;
      padding-right: 0;
    }
    &:first-child .item {
      background-color: #68ae00;
      i {
        color: #68ae00;
      }
    }
    &:nth-of-type(2) .item {
      background-color: #fc8213;
      i {
        color: #fc8213;
      }
    }
    &:last-child .item {
      background-color: #337ab7;
      i {
        color: #337ab7;
      }
    }

    @include media-breakpoint-only(xs) {
      .item i {
        transform: scale(0.9);
      }
    }
  }
  .item {
    font-size: 45px;
    text-transform: capitalize;

    padding-top: 18px;
    padding-bottom: 18px;
    color: #fff;

    @include media-breakpoint-up(lg) {
      padding-left: 35px;
    }

    @include media-breakpoint-only(md) {
      margin-bottom: 15px;
      padding-left: 14px;
    }
    @include media-breakpoint-down(md) {
      margin-bottom: 15px;
    }
    @include media-breakpoint-down(xs) {
      text-align: center;
      padding: 15px;

      i {
        margin-top: 10px;
        height: 80px !important;
        width: 80px !important;
        line-height: 77px !important;
        font-size: 27px;
      }
    }
    h1 {
      font-size: 26px;
      margin-bottom: 3px;
      padding-top: 10px;
    }
    h4 {
      margin-top: 13px;
      font-weight: 600;
    }
    i {
      background-color: #f1f1f1;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      line-height: 100px;
      text-align: center;
    }
    p {
      margin-bottom: 0;
      margin-top: 0;
      font-size: 14px;
    }
  }
}

.martket-update.loading {
  p {
    margin-top: 10px;
  }
  img {
    width: 100px;
  }
}
</style>
