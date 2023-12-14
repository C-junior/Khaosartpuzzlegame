<template>
    <div>
      <h1>Gallery</h1>
      <!-- Include gallery content or images here -->
      <button @click="goHome">Back to Home</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/');
      },
    },
  };
  </script>
  