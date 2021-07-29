<template>
    <div>
      <label for="pet-select">作るクイズのタイプを選ぶ</label>
    </div>

    <div>
      <select name="pets" id="pet-select">
          <option value="dog">このチームはどこ？</option>
          <option value="cat">この選手はだれ？</option>
      </select>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
