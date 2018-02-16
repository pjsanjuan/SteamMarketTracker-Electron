<template>
  <div class="card text-center">
  <div class="card-header">
    Item Name
  </div>
  <div class="card-body">
      <div class="row">
            <div class="col">
                Picture Goes Here
            </div>
            <div class="col">
                Pricring Information Goes Here
                {{displayItem}}
                {{itemObj}}
            </div>
      </div>
  </div>
  <div class="card-footer text-muted">
    Link on Steam Market
  </div>
</div>
</template>

<script>
import getItemObject from "./lib/itemretriever";

export default {
  props: {
    displayItem: Object
  },
  name: "item",
  asyncComputed: {
    itemObj() {
      return getItemObject(this.displayItem.url);
    }
  }
};
</script>

