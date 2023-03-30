<script>
import { reactive, ref, onMounted } from "vue";
export default {
  setup() {
    const loading = ref(true);
    const followers = reactive([
      {
        project: "facebook",
        manager: "Malorum",
        status: "in progress",
        progress: "20"
      },
      {
        project: "Twitter",
        manager: "Evan",
        status: "completed",
        progress: "100"
      },
      {
        project: "Google",
        manager: "John",
        status: "in progress",
        progress: "49"
      },
      {
        project: "facebook",
        manager: "Malorum",
        status: "in progress",
        progress: "74"
      },
      {
        project: "facebook",
        manager: "Malorum",
        status: "in progress",
        progress: "50"
      },
      {
        project: "Twitter",
        manager: "Evan",
        status: "completed",
        progress: "74"
      },
      {
        project: "Google",
        manager: "John",
        status: "in progress",
        progress: "49"
      },
      {
        project: "Google",
        manager: "John",
        status: "in progress",
        progress: "49"
      }
    ]);

    function getStatus(value) {
      let status = "";
      if (value < 50) {
        status = "label-danger";
      } else if (value > 50 && value < 75) {
        status = "label-warning";
      } else {
        status = "label-success";
      }

      return status;
    }

    onMounted(() => {
      setTimeout(() => {
        loading.value = !loading.value;
      }, 2000);
    });

    return { getStatus, followers, loading };
  }
};
</script>


<template>
  <div v-if="!loading" class="work-progres">
    <div class="chit-chat-heading">Recent Followers</div>
    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Project</th>
            <th>Manager</th>

            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in followers" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.project }}</td>
            <td>Malorum</td>

            <td>
              <span class="label" :class="getStatus(item.progress)">in progress</span>
            </td>
            <td>
              <span class="badge badge-info">50%</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else class="work-progres loading">
    <div data-loading="text" class="chit-chat-heading">Recent Followers ...</div>
    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead>
          <tr data-loading>
            <!-- <th data-loading="">#</th>
            <th data-loading="">Project</th>
            <th data-loading="">Manager</th>

            <th data-loading="">Status</th>
            <th data-loading="">Progress</th>-->
          </tr>
        </thead>
        <tbody>
          <tr data-loading v-for="(item, index) in followers" :key="index">
            <td data-loading>
              <span data-loading="text">{{ index + 1 }}</span>
            </td>
            <td data-loading>
              <span data-loading="text">{{ item.project }}</span>
            </td>
            <td>
              <span data-loading="text">Malorum</span>
            </td>

            <td data-loading>
              <span data-loading="text" class="label" :class="getStatus(item.progress)">
                in
                progress
              </span>
            </td>
            <td data-loading>
              <span data-loading="text" class="badge badge-info">50%</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
.work-progres {
  padding: 20px !important;
}

.table > tbody > tr > td {
  text-align: left;
}

.loading {
  table {
    margin-top: 21px;

    .td {
      height: 21px;
      margin-top: 5px;
      padding: 10px 8px !important;
    }
  }

  [data-loading="text"] {
    border-radius: 4px;
    height: 22px;
  }
}
</style>