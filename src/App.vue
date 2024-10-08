<script>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
	components: {
		NavBar,
		Footer,
	},
	data() {
		return {
			isDesktop: true,
			width: window.innerWidth,
		};
	},
	mounted() {
		this.handleResize();
		this.$nextTick(() => {
			window.addEventListener('resize', this.handleResize);
		});
	},
	destroyed() {
		window.removeEventListener('resize', this.handleResize);
	},
	methods: {
		handleResize() {
			this.isDesktop = true;
			this.width = window.innerWidth;
			if (this.width <= 800) {
				this.isDesktop = false;
			}
		},
	},
	watch: {
		handleScreenSize() {
			window.addEventListener('resize', this.handleResize);
			return () => window.removeEventListener('resize', this.handleResize);
		},
	},
};
</script>

<template>
	<div class="container">
		<header>
			<NavBar />
		</header>
		<router-view v-if="isDesktop" v-slot="{ Component }" class="wrapper">
			<transition name="route" mode="out-in">
				<component :is="Component"></component>
			</transition>
		</router-view>

		<RouterView v-else class="wrapper" />
	</div>
	<Footer class="footer"></Footer>
</template>

<style scoped>
.wrapper {
	min-height: calc((100vh - 56px));
	margin: 0 auto;
}

.route-enter-from {
	opacity: 0;
	transform: translateX(100px);
}

.route-enter-active {
	transition: all 0.3s ease-out;
}

.route-leave-to {
	opacity: 0;
	transform: translateX(-100px);
}

.route-leave-active {
	transition: all 0.3s ease-in;
}

/* @media (max-width: 800px) {
	.wrapper {
		min-height: 100vh;
	}
} */
</style>
