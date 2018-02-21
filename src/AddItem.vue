<template>
<div>
    <div class="form-group">
        <label>Steam Community Market URL</label>
        <input v-model="url" class="form-control" placeholder="E.g. http://steamcommunity.com/market/listings/730/Clutch%20Case">
        <label>Purchase Price</label>
        <input v-model="purchasePrice" type="number" step="0.01" class="form-control" placeholder="E.g. 2.13">
        <img v-bind:src="itemObj.imageUrl" height="200" width="200"/>
        <div v-if="error" class="alert alert-danger" role="alert">
            Item could not be fetched. Make sure URL is valid.
        </div>
    </div>

    <button v-bind:disabled="addItemEnabled" v-on:click="addItem" type="button" class="btn btn-primary">Add Item</button>
    <button type="button" class="btn btn-warning">Clear</button>
</div>
  
</template>
<script>
import getItemObject from "./lib/itemretriever";

export default {
  data() {
    return {
      url: "",
      purchasePrice: 0,
      error: false
    };
  },
  asyncComputed: {
    itemObj() {
      return getItemObject(this.url)
        .then(result => {
          this.error = false;
          return result;
        })
        .catch(err => {
          this.error = true;
        });
    }
  },
  computed: {
    addItemEnabled() {
      return url && this.error;
    }
  },
  methods: {
    addItem() {
      //add item to store
    },
    clearInputs() {
      this.url = "";
      this.purchasePrice = 0;
    }
  }
};
</script>

