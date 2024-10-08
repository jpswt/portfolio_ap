import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AboutMe from '../components/AboutMe.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
import Process from '../components/Process.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutMe,
			// component: () => import('../components/AboutMe.vue'),
		},
		{
			path: '/projects',
			name: 'projects',
			component: Projects,
			// component: () => import('../components/Projects.vue'),
		},
		{
			path: '/process',
			name: 'process',
			component: Process,
			// component: () => import('../components/Resume.vue'),
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact,
			// component: () => import('../components/Contact.vue'),
		},
	],
	scrollBehavior() {
		// return new Promise((resolve, reject) => {
		// 	setTimeout(() => {
		// 		resolve({ top: 0 });
		// 	}, 500);
		// });
		return { top: 0 };
	},
	linkExactActiveClass: 'active-link',
	linkActiveClass: 'active-link',
});

export default router;
