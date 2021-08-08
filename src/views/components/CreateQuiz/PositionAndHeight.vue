<template>
  <div>
    <label>
      <input type="number" :max="heightService.maxHeight" :min="heightService.minHeight" v-model="height">
    </label>
  </div>

  <div>
    <p>1つ選んで下さい</p>

    <select v-model="position">
      <option value="Guards">{{ positionService.getPosition('Guards') }}</option>
      <option value="Forwards">{{ positionService.getPosition('Forwards') }}</option>
      <option value="Center">{{ positionService.getPosition('Center') }}</option>
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

import {
  PositionService,
  HeightService
} from '@/domain/models/CreateQuiz/QuizContents'

export default defineComponent({
  emits: ['passStatusToParent'],
  setup(props, { emit }) {
    const positionService =  new PositionService()
    const heightService =  new HeightService()

    const position = ref<string>('')
    const height = ref<number>(180)
    const name = ref<string>('')

    watchEffect(() => {
      emit('passStatusToParent', { position: position.value, height: height.value, name: name.value })
    })

    return {
      positionService,
      heightService,
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
