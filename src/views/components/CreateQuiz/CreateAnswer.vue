<template>

    <div class="m-3">
      <p>クイズの回答を作って下さい。</p>
    </div>

    <div class="m-3">
      <div class="select">
        <select v-model="refAnswerType">
          <option value="free">{{ answerTypeService.getAnswerType('free') }}</option>
          <option value="team">{{ answerTypeService.getAnswerType('team') }}</option>
        </select>
      </div>
    </div>

    <div class="m-3">
      <div v-if="reactiveAnswerTypeControl.free">
        <input class="input is-primary" type="text" v-model="inputTeam">
      </div>

      <div v-if="reactiveAnswerTypeControl.team">
        <div class="select">
          <select v-model="selectedTeam">
            <option disabled value="">1つ選んで下さい</option>
            <option  v-for="item in refTeam" :key="item" :value="item">{{ item }}</option>
          </select>
        </div>
      </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, reactive } from 'vue';

import {
  AnswerTypeService,
  SelectAnswerTypeValueObject,
  AnswerTypeControlEntity,
  TeamValueObject,
  TeamService
} from '@/domain/models/CreateQuiz/CreateAnswer'

import {
  QuizIdService
} from '@/domain/models/Quiz/QuizId'


export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {

    // クイズIDの呼び出し
    const quizIdService = new QuizIdService()
    const quizIdObjectValue = quizIdService.callInject()

    const answerTypeService = new AnswerTypeService()

    const teamService = new TeamService()
    const teamArray =  teamService.exportTeamAsArray()
    const refTeam = ref<Array<string>>(teamArray)

    const refAnswerType = ref<string>('')
    const inputTeam = ref<string>('')
    const selectedTeam = ref<string>('')
    
    const answerTypeControlEntity = new AnswerTypeControlEntity()
    const answerTypeControl = answerTypeControlEntity.exportAnswerTypeControl()
    const reactiveAnswerTypeControl = reactive(answerTypeControl)

    watchEffect(() => {

      // 回答タイプを変更したタイミングで値を初期化
      inputTeam.value = ''
      selectedTeam.value = ''

      const selectAnswerType = new SelectAnswerTypeValueObject(refAnswerType.value)

      const checkResult = selectAnswerType.checkAnswerType()
      if (checkResult) {

        answerTypeControlEntity.setAnswerTypeControl(selectAnswerType.selectedAnswerType)
        answerTypeControlEntity.updateActiveProcess(reactiveAnswerTypeControl)

      }

    })

    watchEffect(() => {

      const team = new TeamValueObject(quizIdObjectValue, inputTeam.value)
      const checkResult = team.checkTeam()

      emit('passStatusToParent', { type: 'createAnswer', status: checkResult })

      // 作成したクイズの回答を書き込み
      team.writeAnswer()

    })

    watchEffect(() => {

      const team = new TeamValueObject(quizIdObjectValue, selectedTeam.value)
      const checkResult = team.checkTeam()
      emit('passStatusToParent', { type: 'createAnswer', status: checkResult })

      // 作成したクイズの回答を書き込み
      team.writeAnswer()

    })

    return {
      answerTypeService,
      refAnswerType,
      refTeam,
      inputTeam,
      selectedTeam,
      reactiveAnswerTypeControl
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>