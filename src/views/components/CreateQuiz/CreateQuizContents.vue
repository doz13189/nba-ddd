<template>

  <div>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('one', $event)"/>
    <!-- 
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('two', $event)"/>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('three', $event)"/>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('four', $event)"/>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('five', $event)"/>
    -->
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PositionAndHeight from '@/views/components/CreateQuiz/PositionAndHeight.vue'

import {
  OrderValueObject,
  HeightValueObject,
  PositionValueObject,
  NameValueObject,
  CreateQuizContentsEntity
} from '@/domain/models/CreateQuiz/QuizContents'


export default defineComponent({
  emits: ['passStatusToParent'],
  components: {
    PositionAndHeight
  },
  setup(props, { emit }) {
    const createQuizContents = new CreateQuizContentsEntity()

    const updatePositionAndHeight = (passedOrder: string, event: { position: string, height: number, name: string,}) => {

      const order = new OrderValueObject(passedOrder)
      const position = new PositionValueObject(event.position)
      const height = new HeightValueObject(event.height)
      const name = new NameValueObject(event.name)

      if (
        order.checkOrder() &&
        position.checkPosition() &&
        height.checkHeight() &&
        name.checkName()
      ) {

        createQuizContents.updateQuizContents(order, position, height, name)

        const checkResult = createQuizContents.checkAllQuizContents()
        if (checkResult) {
          emit('passStatusToParent', { type: 'createQuizContents', status: true })
        }

      }

    }

    return {
      updatePositionAndHeight
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
