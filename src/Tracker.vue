<template>
<div class="text-center">
    <ul class="list-group overflow-scroll">
        <li v-for="elem in items" :key="elem.imageUrl" class="list-group-item">
            <item v-bind:displayItem="elem"></item>
        </li>
    </ul>
</div>
</template>

<script>
import item from "./Item.vue";

export default {
  components: {
    item: item
  },
  name: "tracker",
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
};
</script>
<style scoped>
.overflow-scroll{
    max-height: 500px;
    overflow-y: scroll;
}
</style>


