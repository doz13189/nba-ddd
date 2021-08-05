<template>
  <div>
    <label>
      <input type="number" max=231 min=160 v-model="height">
    </label>
  </div>

  <div>
    <select v-model="position">
      <option disabled value="">1つ選んで下さい</option>
      <option value="Guards">ガード</option>
      <option value="Forwards">フォワード</option>
      <option value="Center">センター</option>
    </select>
  </div>

  <div>
    <label>
      <input type="text" v-model="name">
    </label>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';


export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {
    const position = ref<string | null>(null)
    const height = ref<number>(180)
    const name = ref<string | null>(null)

    watchEffect(() => {
      emit('passStatusToParent', { position: position.value, height: height.value, name: name.value })
    })

    return {
      position,
      height,
      name
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
