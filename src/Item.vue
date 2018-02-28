<template>
  <div class="card text-center">
  <!-- <div class="card-header">
    Item Name
  </div> -->
  <div class="card-body">
      <div class="row">
            <div class="col">
                <img v-bind:src="item.imgUrl" height="200" width="200"/>
            </div>
            <div class="col">
                <table>
                    <tr>
                        <td>Purchase Price</td>
                        <td>{{displayItem.buyPrice}}</td>
                    </tr>
                    <tr>
                        <td>Lowest Price</td>
                        <td>{{item.steamData.lowest_price}}</td>
                    </tr>
                    <tr>
                        <td>Median Price</td>
                        <td>{{item.steamData.median_price}}</td>
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
import {getItem} from "./lib/itemretriever";
import Item from '../classes/Item'
import RawItem from '../classes/RawItem'

export default {
  props: {
    displayItem: RawItem
  },
  name: "item",
  asyncComputed: {
    item() {
      return getItem(this.displayItem).then(result => result);
    }
  }
};
</script>

