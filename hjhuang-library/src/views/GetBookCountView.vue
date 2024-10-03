<script setup>
import axios from "axios";
import {ref} from "vue";

const count = ref(null);
const error = ref(null);

const getBookCount = async () => {
  try {
    const response = await axios.get()
  } catch (error) {

  }
}
</script>

<template>
  <div id="app">
    <h1>Book Counter</h1>
    <button @click="getBookCount">Get Book Count</button>
    <p v-if="count !== null">Total number of books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>

</style>