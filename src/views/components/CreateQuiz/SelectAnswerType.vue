<template>
    <div>
      <label for="pet-select">作るクイズの回答タイプを選ぶ</label>
    </div>

    <div>
      <select name="pets" id="pet-select">
          <option value="free">自由記入</option>
          <option value="team">チーム選択</option>
      </select>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {

    emit('passStatusToParent', { type: 'createQuizContents', status: true })

    return {
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>