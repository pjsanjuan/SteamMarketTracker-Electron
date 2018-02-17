<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <sidebar></sidebar>
      </div>
      <div class="col-10">
          <tracker></tracker>
      </div>

    </div>
  </div>
</template>

<script>
import sidebar from "./Sidebar.vue";
import tracker from "./Tracker.vue";
import fse from "fs-extra";
// import {remote} from "electron"

export default {
  components: {
    sidebar: sidebar,
    tracker: tracker
  },
  name: "app",
  created: function() {
    //   console.log(remote.getPath('appData'))
  }
};
</script>
