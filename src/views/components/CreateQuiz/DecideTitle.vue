<template>

  <div class="m-3">
    <p>タイトルを入力して下さい。</p>
    <input class="input is-primary" type="text" v-model="refTitle">
  </div>

</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue';
import { DecideTitleValueObject } from '@/domain/models/CreateQuiz/DecideTitle'

export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {
    const refTitle = ref<string>('')

    watchEffect(() => {
      const decideTitle = new DecideTitleValueObject(refTitle.value)
      
      const checkResult = decideTitle.checkTitle()
      emit('passStatusToParent', { type: 'decideTitle', status: checkResult })
    })

    return {
      refTitle
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
