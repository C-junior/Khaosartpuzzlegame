<template>
  <div class="container">
    <h1>Welcome to Khaos Art Puzzle</h1>
    <button @click="showGallery">Gallery</button>
    <router-link to="/level1">Level 1</router-link>
    <!-- Add more level buttons as needed -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    showGallery() {
      this.$router.push('/gallery');
    },
  },
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 50px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>
