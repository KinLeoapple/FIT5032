<script setup>
import BHeader from './components/BHeader.vue'
</script>

<template>
  <div class="container">
    <header>
      <BHeader />
    </header>

    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>
