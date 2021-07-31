<template>

  <div>
    <button type="button">次に進む</button>
  </div>

</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';
import { QuizCreatingProcessManagementEntity } from '@/domain/models/Quiz'

export default defineComponent({
  props: ['creatingProcessType', 'creatingProcessStatus'],
  setup(props) {
    const quizCreatingProcessManagement = new QuizCreatingProcessManagementEntity()
    watchEffect(() => {
      console.log('creatingProcessType', props.creatingProcessType)
      console.log('creatingProcessStatus', props.creatingProcessStatus)
      const getResult = quizCreatingProcessManagement.getQuizActiveProcess(props.creatingProcessType)
      console.log({getResult})
    })

    
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
