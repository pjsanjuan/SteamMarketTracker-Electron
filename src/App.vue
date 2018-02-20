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
// import fse from "fs-extra";
// var ipcRenderer = require("electron").ipcRenderer;

export default {
  components: {
    sidebar: sidebar,
    tracker: tracker
  },
  name: "app",
  created: function() {
    var tempItems = JSON.parse(
      '{"items":[{"url":"http://steamcommunity.com/market/listings/730/Clutch%20Case","buyPrice":10.2},{"url":"http://steamcommunity.com/market/listings/730/AK-47%20%7C%20Redline%20%28Field-Tested%29","buyPrice":10.7},{"url":"http://steamcommunity.com/market/listings/730/AK-47%20%7C%20Frontside%20Misty%20%28Field-Tested%29","buyPrice":3.5}]}'
    );
    this.$store.commit('setItems', tempItems)
    console.log(this.$store.getters.getItems)
  }
  //   created: function() {
  //     var store = this.$store;
  //     store = JSON.parse('{"items":[{"url":"http://steamcommunity.com/market/listings/730/Clutch%20Case","buyPrice":10.2},{"url":"http://steamcommunity.com/market/listings/730/AK-47%20%7C%20Redline%20%28Field-Tested%29","buyPrice":10.7},{"url":"http://steamcommunity.com/market/listings/730/AK-47%20%7C%20Frontside%20Misty%20%28Field-Tested%29","buyPrice":3.5}]}'
  // )
  //     // ipcRenderer.on("itemJson", itemJson => {
  //     //   var savedItems = fse.readJsonSync(itemJson);
  //     //   $store.commit("setItems", items);
  //     // });
  //   }
};
</script>
