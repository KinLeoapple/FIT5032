<script setup>
import axios from "axios";
import {ref} from "vue";

const jsondata = ref(null);
const error = ref(null)

const getBookCountAPI = async () => {
  try {
    const response = await axios.get("https://countbooks-kc5ola4uga-uc.a.run.app");
    jsondata.value = response.data;
    error.value = null;
  } catch (error) {
    console.error("Error fetching book count:", error);
    error.value = error;
    jsondata.value = null;
  }
}

getBookCountAPI();
</script>

<template>
  <pre>{{ jsondata }}</pre>
</template>

<style scoped>

</style>