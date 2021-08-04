<template>
  <div>

    <h1>クイズを作る</h1>

    <div v-if="reactiveActiveProcess.selectQuizType">
      <SelectQuizType
        @passStatusToParent="updateProcessComplete($event)"
        />

      <GoNextCreatingProcess
        @passStatusToParent="updateActiveProcess($event)"
        :goNextButtonType="'selectQuizType'"
        :goNextButtonStatus="reactiveProcessComplete.selectQuizType"
        />
    </div>

    <div v-if="reactiveActiveProcess.createQuizContents">
      <CreateQuizContents/>
    </div>

    <!-- reactiveActiveProcess: {{ reactiveActiveProcess.get('selectQuizType') }}
    reactiveActiveProcess: {{ reactiveActiveProcess.get('createQuizContents') }}

    reactiveProcessComplete: {{ reactiveProcessComplete.get('selectQuizType') }}
    reactiveProcessComplete: {{ reactiveProcessComplete.get('createQuizContents') }} -->

    <!-- <div v-if="selectAnswerTypeActiveProcess"> -->
      <SelectAnswerType/>
    <!-- </div> -->

    <!-- <div v-if="createAnswerActiveProcess"> -->
      <CreateAnswer/>
    <!-- </div> -->

    <!-- <div v-if="decideTitleActiveProcess"> -->
      <DecideTitle/>
    <!-- </div> -->

    <!-- <div v-if="saveQuizActiveProcess"> -->
      <SaveQuiz/>
    <!-- </div> -->

  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import SelectQuizType from '@/views/components/SelectQuizType.vue'
import SelectAnswerType from '@/views/components/SelectAnswerType.vue'
import CreateQuizContents from '@/views/components/CreateQuizContents.vue'
import CreateAnswer from '@/views/components/CreateAnswer.vue'
import DecideTitle from '@/views/components/DecideTitle.vue'
import SaveQuiz from '@/views/components/SaveQuiz.vue'
import GoNextCreatingProcess from '@/views/components/GoNextCreatingProcess.vue'

import { ProcessManagementEntity } from '@/domain/models/Quiz'

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
    const processManagement = new ProcessManagementEntity()

    const activeProcess = processManagement.exportActiveProcess()
    const reactiveActiveProcess = reactive(activeProcess)

    const processComplete = processManagement.exportProcessComplete()
    const reactiveProcessComplete = reactive(processComplete)

    const updateActiveProcess = (event: { type: string, status: boolean}) => {
      processManagement.setActiveProcess(event.type, event.status)
      processManagement.setNextActiveProcess(event.type)
      processManagement.updateActiveProcess(reactiveActiveProcess)
    }

    const updateProcessComplete = (event: { type: string, status: boolean}) => {
      processManagement.setProcessComplete(event.type, event.status)
      processManagement.updateProcessComplete(reactiveProcessComplete)
    }

    return {
      updateActiveProcess,
      updateProcessComplete,
      reactiveActiveProcess,
      reactiveProcessComplete
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
