<template>

  <button type="button" class="button is-primary is-rounded" v-on:click="back">ひとつ戻る</button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  props: ['backButtonType'],
  emits: ['passStatusToParent'],
  setup(props, { emit }) {

    const back = (() => {
      emit('passStatusToParent', { type: props.backButtonType })
    })

    return {
      back
    }

    
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
