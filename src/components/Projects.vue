<template>
	<div class="wrapper">
		<h2>Featured Projects</h2>
		<DiabetesProject />
		<h2>Storyline 360 Interactions</h2>
		<SLModules />
	</div>
</template>

<script>
import DiabetesProject from './DiabetesProject.vue';
import SLModules from './SLModules.vue';

const diabetes = new URL(`@/assets/sl_frames/intro.png`, import.meta.url).href;
const time = new URL(`@/assets/rise_time.png`, import.meta.url).href;

export default {
	components: {
		DiabetesProject,
		SLModules,
	},
};
</script>

<style scoped>
.wrapper {
	max-width: 1280px;
	margin: 0 auto;
	padding-top: 5rem;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding-bottom: 8rem;
}

h2 {
	text-align: center;
}
</style>
