<template>

  <div class="m-3">
    <p>タイトルを入力して下さい。</p>
    <input class="input is-primary" type="text" v-model="refTitle">
  </div>

</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue';
import { DecideTitleValueObject } from '@/domain/models/CreateQuiz/DecideTitle'

import {
  QuizIdService
} from '@/domain/models/Quiz/QuizId'


export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {

    // クイズIDの呼び出し
    const quizIdService = new QuizIdService()
    const quizIdObjectValue = quizIdService.callInject()

    const refTitle = ref<string>('')

    watchEffect(() => {
      const decideTitle = new DecideTitleValueObject(quizIdObjectValue, refTitle.value)
      
      const checkResult = decideTitle.checkTitle()
      emit('passStatusToParent', { type: 'decideTitle', status: checkResult })

      // 作成したクイズのタイトルを書き込み
      decideTitle.writeAnswer()

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
