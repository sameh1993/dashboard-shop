<script>
import { reactive, ref, onMounted } from "vue";
export default {
  setup() {
    const loading = ref(true)
    const sales = reactive([
      {
        prog_name: "rating",
        progress: 435,
        total: 550,
      },
      {
        prog_name: "Quality",
        progress: 360,
        total: 550,
      },
      {
        prog_name: "amount",
        progress: 290,
        total: 550,
      },
      {
        prog_name: "Farming",
        progress: 220,
        total: 550,
      },
      {
        prog_name: "Farming",
        progress: 290,
        total: 550,
      },
    ]);

    onMounted(() => {
      setTimeout(() => {
        loading.value = !loading.value
      }, 2000)
    })

    return { sales, loading };
  },
};
</script>

<template>
  <div v-if="!loading" class="prograc-blocks">
    <!--Progress bars-->
    <div class="home-progres-main">
      <h3>Total Sales</h3>
    </div>
    <div class="bar_group group_ident-1">
      <div v-for="(item, index) in sales" :key="index">
        <p class="b_label">{{ item.prog_name }}</p>
        <div class="bar_group__bar thin" label="Rating" show_values="true" tooltip="true" value="343" :style="
          'margin-bottom: 30px; width: ' + (item.progress * 100) / item.total + '% ;'
        ">
          <div class="b_tooltip">
            <span> {{ item.progress }} </span>
            <div class="b_tooltip--tri"></div>
          </div>
          <p class="bar_label_min">0</p>
          <p class="bar_label_max">{{ item.total }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="prograc-blocks loading">
    <!--Progress bars-->
    <div class="home-progres-main">
      <h3 data-loading="text">Total Sales ..</h3>
    </div>
    <div class="bar_group group_ident-1">
      <div class v-for="(item, index) in sales" :key="index">
        <p data-loading="text" class="b_label">{{ item.prog_name }}</p>
        <div data class="bar_group__bar thin" label="Rating" show_values="true" tooltip="true" value="343" :style="
          'margin-bottom: 30px; width: 0 ;'
        ">
          <div class="b_tooltip">
            <span data-loading="text"> {{ item.progress }} </span>
            <div class="b_tooltip--tri"></div>
          </div>
          <p data-loading="text" class="bar_label_min custom">0</p>
          <p data-loading="text" class="bar_label_max custom">{{ item.total }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/GlobalRules/scss/mainRules.scss";

.prograc-blocks {
  padding: 18px;

  @include maxScreen(md) {
    margin-top: 30px;
  }

  .home-progres-main {
    margin: 0px 0 5px;
  }

  .bar_group {
    @include maxScreen(md) {
      &>div {
        margin-bottom: 32px;

        .b_label {
          font-size: 13px;
        }
      }


    }
  }

  .bar_group p {
    margin-bottom: 4px;
  }
}

.loading {
  [data-loading='text'] {
    margin-left: 0 !important;
    padding-left: 0;
  }

  .bar_group__bar {
    margin-bottom: 32px !important;
  }

  .b_tooltip {
    display: none;
  }

  .bar_label_min {
    left: 0;
  }

  .custom {
    transform: translateY(7px)
  }

  .bar_group p {
    height: 21px;
    margin-top: 3px;
  }

  .b_tooltip {
    transform: translateX(-50%) translateY(-46px);
  }
}
</style>
