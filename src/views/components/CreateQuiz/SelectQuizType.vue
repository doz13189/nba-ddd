<template>
    <div class="block">
      <p>作るクイズのタイプを選ぶ</p>
    </div>

    <div class="block">
      <p>1つ選んで下さい</p>

      <select v-model="selectedQuizType">
        <option value="team">{{ quizType.getQuizType('team') }}</option>
        <!-- <option value="player">{{ quizType.getQuizType('player') }}</option> -->
      </select>
    </div>

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

import {
  SelectQuizTypeValueObject,
  quizTypeValueObject
} from '@/domain/models/CreateQuiz/SelectQuizType'


export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {
    const selectedQuizType = ref<string>('')

    watchEffect(() => {
      const selectQuiz = new SelectQuizTypeValueObject(selectedQuizType.value)
      
      const selectQuizStatus = selectQuiz.checkQuizType()
      emit('passStatusToParent', { type: 'selectQuizType', status: selectQuizStatus })
    })

    const quizType = new quizTypeValueObject()

    return {
      selectedQuizType,
      quizType
    }
  }
});
</script>

<style scoped>
</style>
