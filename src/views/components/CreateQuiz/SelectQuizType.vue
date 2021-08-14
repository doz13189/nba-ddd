<template>
    <div class="m-3">
      <p>作るクイズのタイプを選んで下さい。</p>
    </div>

    <div class="select m-3">
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

import {
  QuizIdService
} from '@/domain/models/Quiz/QuizId'


export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {

    // クイズIDの呼び出し
    const quizIdService = new QuizIdService()
    const quizIdObjectValue = quizIdService.callInject()

    const selectedQuizType = ref<string>('')

    watchEffect(() => {
      const selectQuiz = new SelectQuizTypeValueObject(quizIdObjectValue, selectedQuizType.value)
      
      // クイズタイプの選択がされているかチェック
      const selectQuizStatus = selectQuiz.checkQuizType()
      emit('passStatusToParent', { type: 'selectQuizType', status: selectQuizStatus })

      // クイズタイプのデータ書き込み
      selectQuiz.writeQuizType()

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
