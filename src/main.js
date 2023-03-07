import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import './assets/tailwind.css';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/about',
			name: 'About',
			component: About,
		},
	],
});

createApp(App).use(router).mount('#app');
