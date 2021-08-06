<template>
    <div>
      <label for="pet-select">作るクイズの回答タイプを選ぶ</label>
    </div>

    <div>
      <select v-model="refAnswerType">
        <option disabled value="">1つ選んで下さい</option>
        <option value="free">自由記入</option>
        <option value="team">チーム選択</option>
      </select>
    </div>

    <div v-if="reactiveAnswerTypeControl.free">
      <label>
        <input type="text" v-model="inputTeam">
      </label>
    </div>

    <div v-if="reactiveAnswerTypeControl.team">
      <select v-model="selectedTeam">
        <option disabled value="">1つ選んで下さい</option>
        <option  v-for="item in refTeam" :key="item" :value="item">{{ item }}</option>
      </select>
    </div>

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, reactive } from 'vue';
import {
  SelectAnswerTypeValueObject,
  AnswerTypeControlEntity,
  TeamValueObject,
  TeamService
} from '@/domain/models/CreateQuiz/CreateAnswer'


export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {

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
      const selectAnswerType = new SelectAnswerTypeValueObject(refAnswerType.value)
      const checkResult = selectAnswerType.checkAnswerType()
      if (checkResult) {

        answerTypeControlEntity.setAnswerTypeControl(selectAnswerType.selectedAnswerType)
        answerTypeControlEntity.updateActiveProcess(reactiveAnswerTypeControl)

      }

    })

    watchEffect(() => {
      const team = new TeamValueObject(inputTeam.value)
      const checkResult = team.checkTeam()

      console.log({checkResult})

      emit('passStatusToParent', { type: 'createAnswer', status: checkResult })

    })

    watchEffect(() => {
      const team = new TeamValueObject(selectedTeam.value)
      const checkResult = team.checkTeam()

      console.log({checkResult})

      emit('passStatusToParent', { type: 'createAnswer', status: checkResult })

    })

    return {
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