import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Gallery from './components/Gallery.vue';
import Level1 from './views/Level1.vue';
import Level2 from './views/Level2.vue';

const routes = [
  { path: '/', component: App },
  { path: '/gallery', component: Gallery },
  { path: '/level1', component: Level1 },
  { path: '/level2', component: Level2 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
