<template>
    <div>
      <label for="pet-select">作るクイズのタイプを選ぶ</label>
    </div>

    <div>
      <select v-model="selectedQuizType">
        <option disabled value="">1つ選んで下さい</option>
        <option value="1">このチームはどこ？</option>
        <!-- <option value="2">この画像の人はだれ？</option> -->
      </select>
    </div>

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { SelectQuizTypeValueObject } from '@/domain/models/CreateQuiz/SelectQuizType'


export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {
    const selectedQuizType = ref<string>('')

    watchEffect(() => {
      const selectQuiz = new SelectQuizTypeValueObject(selectedQuizType.value)
      
      const selectQuizStatus = selectQuiz.checkQuizType()
      emit('passStatusToParent', { type: 'selectQuizType', status: selectQuizStatus })
    })

    return {
      selectedQuizType
    }
  }
});
</script>

<style scoped>
</style>
