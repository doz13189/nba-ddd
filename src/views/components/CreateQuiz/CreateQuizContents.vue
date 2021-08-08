<template>

  <div>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('one', $event)" title="1人目"/>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('two', $event)" title="2人目"/>
    <!-- <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('three', $event)" title="3人目"/> -->
    <!-- <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('four', $event)" title="4人目"/> -->
    <!-- <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight('five', $event)" title="5人目"/> -->
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
      if (order.checkOrder()) { emit('passStatusToParent', { type: 'createQuizContents', status: false }) }

      const position = new PositionValueObject(event.position)
      if (position.checkPosition()) { emit('passStatusToParent', { type: 'createQuizContents', status: false }) }

      const height = new HeightValueObject(event.height)
      if (height.checkHeight()) { emit('passStatusToParent', { type: 'createQuizContents', status: false }) }

      const name = new NameValueObject(event.name)
      if (name.checkName()) { emit('passStatusToParent', { type: 'createQuizContents', status: false }) }

      createQuizContents.updateQuizContents(order, position, height, name)

      const checkResult = createQuizContents.checkAllQuizContents()
      if (checkResult) {
        emit('passStatusToParent', { type: 'createQuizContents', status: true })
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
