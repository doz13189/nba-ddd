<template>

  <div class="mt-5 m-3">
    <p>{{ title }}の選手情報を入力して下さい。</p>
  </div>

  <div class="m-3">
    <input class="input is-primary is-small" type="text" placeholder="選手名" v-model="name">
  </div>

  <div class="m-3">

  </div>

  <div class="m-3">
    <div class="columns is-mobile">
      <div class="column">
        <p>ポジション</p>
      </div>
      <div class="column">
        <div class="select is-small">
          <select v-model="position">
            <option value="Guards">{{ positionService.getPosition('Guards') }}</option>
            <option value="Forwards">{{ positionService.getPosition('Forwards') }}</option>
            <option value="Center">{{ positionService.getPosition('Center') }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <div class="m-3">
    <div class="columns is-mobile">
      <div class="column">
        <p>身長(cm)</p>
      </div>
      <div class="column">
        <input class="input is-primary is-small" type="number" :max="heightService.maxHeight" :min="heightService.minHeight" v-model="height">
      </div>
    </div>
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
  props: ['title'],
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
