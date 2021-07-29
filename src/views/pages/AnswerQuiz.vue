<template>
  <div>
    <h1>クイズに答えるよ</h1>
    <div>
      <router-link to='/multiplePlayers'>みんなでクイズ</router-link>
    </div>
    <div>
      <router-link to='/onePlayer'>ひとりでクイズ</router-link>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/views/components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld
  }
}
</script>
