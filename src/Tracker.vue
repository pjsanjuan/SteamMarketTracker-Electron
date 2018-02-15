<template>
<div class="text-center">
    This will be the tracker component.
    It's job will be to render the Item's to display.
    {{items}}
</div>
</template>

<script>
import item from "./Item.vue"

export default {
  components: {
      'item': item
  },
  name: "tracker",
  computed: {
      items(){
          return this.$store.state.items
      }
  }
};
</script>

