<script setup>
import {ref} from "vue";
import db from "@/firebase/init.js";
import {collection, addDoc} from "firebase/firestore";

const isbn = ref("");
const name = ref("");
const addBook = async () => {
  try {
    const isbnNumber = Number(isbn.value);
    if (isNaN(isbnNumber)) {
      alert("ISBN must be a valid number");
      return;
    }
    await addDoc(collection(db, "books"), {
      isbn: isbnNumber,
      name: name.value,
    });
  } catch (error) {
    console.log("Error adding book: " + error);
  }
}
</script>

<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <!-- ISBN -->
      <div>
        <label for="isbn">ISBN: </label>
        <input type="text" v-model="isbn" id="isbn" required/>
      </div>
      <!-- Name -->
      <div>
        <label for="name">Name: </label>
        <input type="text" v-model="name" id="name" required/>
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<style scoped>

</style>