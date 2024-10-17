<script setup>
import BHeader from '@/components/BHeader.vue'

const showHeader = () => {
  return this.$route.name !== 'CountBookAPI';
}
</script>

<template>
  <div class="container">
    <header v-if="showHeader">
      <BHeader />
    </header>

    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>
