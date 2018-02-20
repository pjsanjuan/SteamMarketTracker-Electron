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
var ipcRenderer = require("electron").ipcRenderer;

export default {
  components: {
    sidebar: sidebar,
    tracker: tracker
  },
  name: "app",
  created: function() {
    this.$store.commit("setItems", ipcRenderer.sendSync("fetchItemJson-sync"));
  }
};
</script>
