<template>

  <div>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight(1, $event)"/>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight(2, $event)"/>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight(3, $event)"/>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight(4, $event)"/>
    <PositionAndHeight @passStatusToParent="($event) => updatePositionAndHeight(5, $event)"/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PositionAndHeight from '@/views/parts/PositionAndHeight.vue';

import {
  QuizContentsOrderValueObject,
  QuizContentsValueObject,
  CreateQuizContentsValueObject
} from '@/domain/models/Quiz'

export default defineComponent({
  emits: ['passStatusToParent'],
  components: {
    PositionAndHeight
  },
  setup(props, { emit }) {
    const createQuizContents = new CreateQuizContentsValueObject()

    const updatePositionAndHeight = (order: number, event: { position: string, height: number, name: string,}) => {
      console.log(order, event.position, event.height)

      createQuizContents.updateQuizContents(
        new QuizContentsOrderValueObject(order),
        new QuizContentsValueObject(event.position, event.height, event.name)
      )

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
