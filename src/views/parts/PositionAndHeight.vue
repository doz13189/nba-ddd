<template>
  <div>
    <span>{{ position }}</span>
    <span> : </span>
    <span>{{ height }} cm</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    position: String,
    height: String
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
