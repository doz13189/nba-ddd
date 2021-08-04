<template>
  <label>
    <input type="number" name="number" max=230 min=162 v-model="position">
  </label>

  <div>
    <select v-model="height">
      <option disabled value="">1つ選んで下さい</option>
      <option value="Guards">ガード</option>
      <option value="Forwards">フォワード</option>
      <option value="Center">センター</option>
    </select>
  </div>

  <div>
    <span>{{ position }}</span>
    <span> : </span>
    <span>{{ height }} cm</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {
    const position = ref<string>('')
    const height = ref<number>(0)

    watchEffect(() => {
      // const selectQuiz = new SelectQuizValueObject(selectedQuizType.value)
      // const selectQuizStatus = selectQuiz.checkQuizType()
      emit('passStatusToParent', { position: position, height: height })
    })

    return {
      position,
      height
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
