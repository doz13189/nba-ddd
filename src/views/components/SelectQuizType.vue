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
import { SelectQuizValueObject } from '@/domain/models/Quiz'

export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {
    const selectedQuizType = ref<string>('')

    watchEffect(() => {
      const selectQuiz = new SelectQuizValueObject(selectedQuizType.value)
      
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
