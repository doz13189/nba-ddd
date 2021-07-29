<template>

  <div>
    <PositionAndHeight :position="'Center'" :height="'178'"/>
    <PositionAndHeight :position="'Center'" :height="'178'"/>
    <PositionAndHeight :position="'Center'" :height="'178'"/>
    <PositionAndHeight :position="'Center'" :height="'178'"/>
    <PositionAndHeight :position="'Center'" :height="'178'"/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PositionAndHeight from '@/views/parts/PositionAndHeight.vue';

export default defineComponent({
  components: {
    PositionAndHeight
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
