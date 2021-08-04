<template>

  <button type="button" v-on:click="goNext" :disabled="!localGoNextButtonStatus">次に進む</button>

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';


export default defineComponent({
  props: ['goNextButtonType', 'goNextButtonStatus'],
  emits: ['passStatusToParent'],
  setup(props, { emit }) {

    const localGoNextButtonStatus = ref<boolean>(props.goNextButtonStatus)

    watchEffect(() => {
      localGoNextButtonStatus.value = props.goNextButtonStatus
    })

    const goNext = (() => {
      emit('passStatusToParent', { type: props.goNextButtonType, status: false })
    })

    return {
      localGoNextButtonStatus,
      goNext
    }

    
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
