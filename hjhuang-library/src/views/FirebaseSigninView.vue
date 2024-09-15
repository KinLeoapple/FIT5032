<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();
const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then(data => {
        console.log("Firebase Register Successful!");
        router.push("/");
        console.log(data.currentUser);
      }).catch(error => {
        console.log(error.code);
      })
}
</script>

<template>
<h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email"></p>
  <p><input type="password" placeholder="Password" v-model="password"></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
  <p><router-link to="/FireRegister">
    <button>Register an account</button>
  </router-link></p>
</template>

<style scoped>

</style>