<template>
  <div>

    <h1>クイズを作る</h1>

    <SelectQuizType/>
    <CreateQuizContents/>
    <SelectAnswerType/>
    <CreateAnswer/>

    <button type="button">次に進む</button>
    <button type="button">完了</button>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SelectQuizType from '@/views/components/SelectQuizType.vue'
import SelectAnswerType from '@/views/components/SelectAnswerType.vue'
import CreateQuizContents from '@/views/components/CreateQuizContents.vue'
import CreateAnswer from '@/views/components/CreateAnswer.vue'

export default defineComponent({
  components: {
    SelectQuizType,
    CreateQuizContents,
    SelectAnswerType,
    CreateAnswer
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
