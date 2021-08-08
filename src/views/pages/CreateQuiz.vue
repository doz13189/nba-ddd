<template>
  <div class="container">

    <div class="has-text-centered m-5">
      <h1 class="title">クイズを作る</h1>
    </div>

    <div v-if="reactiveActiveProcess.selectQuizType">
      <SelectQuizType
        @passStatusToParent="updateProcessComplete($event)"
        />

      <GoNextCreatingProcess
        @passStatusToParent="updateActiveProcess($event)"
        :goNextButtonType="'selectQuizType'"
        :goNextButtonStatus="reactiveProcessComplete"
        />
    </div>

    <div v-if="reactiveActiveProcess.createQuizContents">
      <CreateQuizContents
        @passStatusToParent="updateProcessComplete($event)"
        />
        
      <GoNextCreatingProcess
        @passStatusToParent="updateActiveProcess($event)"
        :goNextButtonType="'createQuizContents'"
        :goNextButtonStatus="reactiveProcessComplete"
        />
    </div>

    <div v-if="reactiveActiveProcess.createAnswer">
      <CreateAnswer
        @passStatusToParent="updateProcessComplete($event)"
        />

      <GoNextCreatingProcess
        @passStatusToParent="updateActiveProcess($event)"
        :goNextButtonType="'createAnswer'"
        :goNextButtonStatus="reactiveProcessComplete"
        />
    </div>

    <div v-if="reactiveActiveProcess.decideTitle">
      <DecideTitle
        @passStatusToParent="updateProcessComplete($event)"
        />

      <GoNextCreatingProcess
        @passStatusToParent="updateActiveProcess($event)"
        :goNextButtonType="'decideTitle'"
        :goNextButtonStatus="reactiveProcessComplete"
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

import {
  ProcessManagementEntity,
  ProcessManagementValueObject
} from '@/domain/models/CreateQuiz/ProcessManagement'

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
    const processManagementEntity = new ProcessManagementEntity()

    const activeProcess = processManagementEntity.exportActiveProcess()
    const reactiveActiveProcess = reactive(activeProcess)

    const updateActiveProcess = (event: { type: string }) => {
      processManagementEntity.setNextActiveProcess(event.type)
      processManagementEntity.updateActiveProcess(reactiveActiveProcess)
    }


    const processManagementValueObject = new ProcessManagementValueObject()

    const processComplete = processManagementValueObject.exportProcessComplete()
    const reactiveProcessComplete = reactive(processComplete)

    const updateProcessComplete = (event: { type: string, status: boolean}) => {
      processManagementValueObject.setProcessComplete(event.type, event.status)
      processManagementValueObject.updateProcessComplete(reactiveProcessComplete)
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
