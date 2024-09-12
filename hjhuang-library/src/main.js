import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(router)
app.mount('#app');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNwEBsHNOzAKUjMH8JAeFnB92Oxj79nnk",
    authDomain: "fit5032-3347b.firebaseapp.com",
    projectId: "fit5032-3347b",
    storageBucket: "fit5032-3347b.appspot.com",
    messagingSenderId: "618078822194",
    appId: "1:618078822194:web:f03c894b5d0ec0a1a9012b"
};

// Initialize Firebas
initializeApp(firebaseConfig);
