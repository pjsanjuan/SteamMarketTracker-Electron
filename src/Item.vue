<template>
  <div class="card text-center">
  <!-- <div class="card-header">
    Item Name
  </div> -->
  <div class="card-body">
      <div class="row">
            <div class="col">
                <img v-bind:src="itemObj.imageUrl" height="200" width="200"/>
            </div>
            <div class="col">
                <table>
                    <tr>
                        <td>Purchase Price</td>
                        <td>{{displayItem.buyPrice}}</td>
                    </tr>
                    <tr>
                        <td>Lowest Price</td>
                        <td>{{itemObj.data.lowest_price}}</td>
                    </tr>
                    <tr>
                        <td>Median Price</td>
                        <td>{{itemObj.data.median_price}}</td>
                    </tr>
                </table>    
            </div>
      </div>
  </div>
  <!-- <div class="card-footer text-muted">
    Link on Steam Market
  </div> -->
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
      return getItemObject(this.displayItem.url).then(result => result);
    }
  }
};
</script>

