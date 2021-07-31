<template>
  <div>

    <h1>クイズを作る</h1>

    <SelectQuizType @passStatusToParent="updateCreatingProcess($event)"/>
    <CreateQuizContents/>
    <SelectAnswerType/>
    <CreateAnswer/>
    <DecideTitle/>
    <SaveQuiz/>
    <QuizCreatingProcess :creatingProcessType="creatingProcessType" :creatingProcessStatus="creatingProcessStatus"/>
    {{ creatingProcessType }}
    {{ creatingProcessStatus }}

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
import QuizCreatingProcess from '@/views/components/QuizCreatingProcess.vue'


export default defineComponent({
  components: {
    SelectQuizType,
    CreateQuizContents,
    SelectAnswerType,
    CreateAnswer,
    DecideTitle,
    SaveQuiz,
    QuizCreatingProcess
  },
  setup() {
    const creatingProcessType = ref<string>('')
    const creatingProcessStatus = ref<boolean>(false)

    const updateCreatingProcess = (event: { type: string, status: boolean}) => {
      creatingProcessType.value = event.type
      creatingProcessStatus.value = event.status
    }
    return {
      creatingProcessType,
      creatingProcessStatus,
      updateCreatingProcess
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
