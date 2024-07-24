<script setup>
defineProps({
    name: {
        type: String,
        default: "Haojun"
    }
})
</script>

<template>
    <div class="myName">Hello, 
        <span>{{ name }}</span>. 
        This is your first vue app.</div>
</template>

<style>
.myName {
    margin-top: 5rem;
    font-size: 1.2rem;
}

.myName span {
    text-decoration: underline;
    color: hsla(160, 100%, 37%, 1);
}
</style>