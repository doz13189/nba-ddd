<template>
  <div>

    <div class="has-text-centered block">
      <h1 class="title">クイズを作る</h1>
    </div>

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
      <CreateQuizContents
        @passStatusToParent="updateProcessComplete($event)"
        />
        
      <GoNextCreatingProcess
        @passStatusToParent="updateActiveProcess($event)"
        :goNextButtonType="'createQuizContents'"
        :goNextButtonStatus="reactiveProcessComplete.createQuizContents"
        />
    </div>

    <div v-if="reactiveActiveProcess.createAnswer">
      <CreateAnswer
        @passStatusToParent="updateProcessComplete($event)"
        />

      <GoNextCreatingProcess
        @passStatusToParent="updateActiveProcess($event)"
        :goNextButtonType="'createAnswer'"
        :goNextButtonStatus="reactiveProcessComplete.createAnswer"
        />
    </div>

    <div v-if="reactiveActiveProcess.decideTitle">
      <DecideTitle
        @passStatusToParent="updateProcessComplete($event)"
        />

      <GoNextCreatingProcess
        @passStatusToParent="updateActiveProcess($event)"
        :goNextButtonType="'decideTitle'"
        :goNextButtonStatus="reactiveProcessComplete.decideTitle"
        />
    </div>

    <div v-if="reactiveActiveProcess.saveQuiz">
      <SaveQuiz/>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import SelectQuizType from '@/views/components/CreateQuiz/SelectQuizType.vue'
import CreateQuizContents from '@/views/components/CreateQuiz/CreateQuizContents.vue'
import CreateAnswer from '@/views/components/CreateQuiz/CreateAnswer.vue'
import DecideTitle from '@/views/components/CreateQuiz/DecideTitle.vue'
import SaveQuiz from '@/views/components/CreateQuiz/SaveQuiz.vue'
import GoNextCreatingProcess from '@/views/components/CreateQuiz/GoNextCreatingProcess.vue'

import { ProcessManagementEntity } from '@/domain/models/CreateQuiz/ProcessManagement'

export default defineComponent({
  components: {
    SelectQuizType,
    CreateQuizContents,
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
