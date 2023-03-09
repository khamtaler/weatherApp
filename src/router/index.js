import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import WeatherView from '@/views/WeatherView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/weather/:city',
		name: 'weather',
		component: WeatherView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
