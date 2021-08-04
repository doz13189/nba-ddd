<template>
  <label>
    <input type="number" name="number" max=230 min=162>
  </label>

  <div>
    <select v-model="selectedQuizType">
      <option disabled value="">1つ選んで下さい</option>
      <option value="1">このチームはどこ？</option>
      <option value="2">この画像の人はだれ？</option>
    </select>
  </div>
  
  <div>
    <span>{{ position }}</span>
    <span> : </span>
    <span>{{ height }} cm</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    position: String,
    height: String
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
