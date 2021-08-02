<template>

  <div>
    <label>
      <input type="number" name="number" max=230 min=162>
    </label>
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
  emits: ['passStatusToParent'],
  components: {
    PositionAndHeight
  },
  setup(props, { emit }) {
    // const selectedQuizType = ref<string>('')

    // watchEffect(() => {
    //   const selectQuiz = new SelectQuizValueObject(selectedQuizType.value)
    //   const selectQuizStatus = selectQuiz.checkQuizType()
      emit('passStatusToParent', { type: 'selectQuizType', status: true })
    // })

    // return {
    //   selectedQuizType
    // }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
