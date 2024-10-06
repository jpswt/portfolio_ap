<template>
	<div class="wrapper">
		<DiabetesProject :projects="projects" />
	</div>
</template>

<script>
import DiabetesProject from './DiabetesProject.vue';

const diabetes = new URL(`@/assets/sl_frames/intro.png`, import.meta.url).href;
const time = new URL(`@/assets/rise_time.png`, import.meta.url).href;

export default {
	components: {
		DiabetesProject,
	},
	data() {
		return {
			projects: [
				{
					src: `${diabetes}`,
					btnURL: 'https://bluestarlet07.github.io/Diabetes/',
					text: 'This scenario-based eLearning concept project was developed for Type 1 Diabetics to practice making decisions on how to manage blood sugar levels effectively based on signs and symptoms.',
					audience: 'Type I Diabetics',
					development: 'Storyline 360 | Canva | Figma',
				},
				{
					src: `${time}`,
					btnURL: 'https://bluestarlet07.github.io/Diabetes/',
					text: '	Time Management in the Workplace This course covers essential aspects of effective time management, including identifying common challenges, exploring various tools and techniques, and finding a healthy balance between professional duties and personal life. Through interactive scenarios and real-life examples, this course helps learners understand how to implement these strategies in their daily routines to boost productivity and maintain work-life harmony. Audience: Adults Tools: Rise 360',
					audience: 'Adults',
					development: 'Rise 360',
				},
			],
		};
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
</style>
