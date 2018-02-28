<template>
<div>
    <div class="form-group">
        <label>Steam Community Market URL</label>
        <input v-model="url" class="form-control" v-on:change="updateItemObj()" placeholder="http://steamcommunity.com/market/listings/730/Clutch%20Case">
        <label>Purchase Price</label>
        <input v-model="purchasePrice" type="number" step="0.01" class="form-control" placeholder="E.g. 2.13">
        <!-- Images -->
        <img v-if="itemObj" v-bind:src="itemObj.imageUrl" height="200" width="200"/>
        <img v-else v-bind:src="placeHolderImg" height="200" width="200"/>
        <!-- Error HTML -->
        <div v-if="error" class="alert alert-danger" role="alert">
            Item could not be fetched. Make sure URL is valid.
        </div>
    </div>

    <button type="button" v-on:click="addItem()" :disabled=addButtonDisabled class="btn btn-primary">Add Item</button>
    <button type="button" v-on:click="clearInputs()" class="btn btn-warning">Clear</button>
</div>
  
</template>
<script>
import getItemObject from "./lib/itemretriever";

export default {
  data() {
    return {
      url: null,
      purchasePrice: 0,
      error: false,
      itemObj: null,
      placeHolderImg:
        "http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder2.png"
    };
  },
  computed: {
    addButtonDisabled() {
      return !(this.error === false && this.itemObj);
    }
  },
  methods: {
    updateItemObj() {
      console.log("Updating itemObj");

      var $this = this;
      getItemObject(this.url)
        .then(result => {
          $this.error = false;
          $this.itemObj = result;
        })
        .catch(err => {
          $this.error = true;
          $this.itemObj = null;
        });
    },
    addItem() {
      //add item to store
    },
    clearInputs() {
      this.url = "";
      this.purchasePrice = 0;
      this.itemObj = null;
      this.error = false;
    }
  }
};
</script>

