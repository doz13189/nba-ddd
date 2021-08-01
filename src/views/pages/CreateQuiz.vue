<template>
  <div>

    <h1>クイズを作る</h1>

    <SelectQuizType
      v-if="selectQuizType"
      @passStatusToParent="updateCreatingActiveProcess($event)"
      />
    <!-- <QuizCreatingProcess :creatingProcessType="creatingProcessType" :creatingProcessStatus="creatingProcessStatus"/> -->
    <GoNextCreatingProcess
      v-if="selectQuizType"
      @passStatusToParent="updateCreatingProcessComplete($event)"
      :goNextButtonType="'selectQuizType'"
      :goNextButtonStatus="gotNextButtonStatus"
      />
    
    <!-- {{ creatingProcessType }}
    {{ creatingProcessStatus }} -->

    <CreateQuizContents/>
    <SelectAnswerType/>
    <CreateAnswer/>
    <DecideTitle/>
    <SaveQuiz/>

  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import SelectQuizType from '@/views/components/SelectQuizType.vue'
import SelectAnswerType from '@/views/components/SelectAnswerType.vue'
import CreateQuizContents from '@/views/components/CreateQuizContents.vue'
import CreateAnswer from '@/views/components/CreateAnswer.vue'
import DecideTitle from '@/views/components/DecideTitle.vue'
import SaveQuiz from '@/views/components/SaveQuiz.vue'
import GoNextCreatingProcess from '@/views/components/GoNextCreatingProcess.vue'

import { QuizCreatingProcessManagementEntity } from '@/domain/models/Quiz'

export default defineComponent({
  components: {
    SelectQuizType,
    CreateQuizContents,
    SelectAnswerType,
    CreateAnswer,
    DecideTitle,
    SaveQuiz,
    GoNextCreatingProcess
  },
  setup() {
    const quizCreatingProcessManagement = new QuizCreatingProcessManagementEntity()
    const gotNextButtonStatus = ref<boolean>(false)
    const selectQuizType = ref<boolean>(quizCreatingProcessManagement.getCreatingProcessComplete('selectQuizType'))

    const updateCreatingActiveProcess = (event: { type: string, status: boolean}) => {
      quizCreatingProcessManagement.setCreatingActiveProcess(event.type, event.status)
      gotNextButtonStatus.value = quizCreatingProcessManagement.getCreatingActiveProcess(event.type)
    }

    const updateCreatingProcessComplete = (event: { type: string, status: boolean}) => {
      quizCreatingProcessManagement.setCreatingProcessComplete(event.type, event.status)
      selectQuizType.value = quizCreatingProcessManagement.getCreatingProcessComplete(event.type)
    }

    // ProcessComplete
    return {
      updateCreatingActiveProcess,
      updateCreatingProcessComplete,
      quizCreatingProcessManagement,
      gotNextButtonStatus,
      selectQuizType
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
