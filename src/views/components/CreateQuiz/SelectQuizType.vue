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
import { defineComponent, ref, watchEffect, inject } from 'vue';

import {
  SelectQuizTypeValueObject,
  quizTypeValueObject
} from '@/domain/models/CreateQuiz/SelectQuizType'


export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {

    const quizId: string | undefined = inject('quizId')
    // ドメインの処理なので、どこかのタイミングでドメインに移行する必要あり
    // 後続の SelectQuizTypeValueObject に undefined の quizId を渡すのを防いでいる
    if (quizId === undefined) { throw new Error('クイズIDが設定されていません。') }

    const selectedQuizType = ref<string>('')

    watchEffect(() => {
      const selectQuiz = new SelectQuizTypeValueObject(quizId, selectedQuizType.value)
      
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
