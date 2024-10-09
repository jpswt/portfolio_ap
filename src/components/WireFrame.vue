<template>
	<div>
		<h2>Visual Mock-ups</h2>
		<p>
			I started by creating a wireframe to establish the course layout. Then, I
			moved on to designing the course's visual elements. Patient interviews
			provided valuable insights into their daily lives, including the
			challenges and decisions they face throughout the day. It was crucial to
			include a character in the scenario-based activity that encounters similar
			challenges and decision-making situations as the clinic’s patients.
		</p>
		<div class="frames">
			<div v-for="(frame, index) in frames" :key="index">
				<ImageCard :frame="frame" />
			</div>
		</div>
	</div>
</template>

<script>
import ImageCard from './ImageCard.vue';

const intro = new URL(`@/assets/wireframes/01-intro.png`, import.meta.url).href;
const character = new URL(
	`@/assets/wireframes/02-character.png`,
	import.meta.url
).href;
const infographic = new URL(
	`@/assets/wireframes/03-infographic.png`,
	import.meta.url
).href;
const scenarioChallenge = new URL(
	`@/assets/wireframes/04-scenario_ch.png`,
	import.meta.url
).href;
const scenario = new URL(`@/assets/wireframes/05-scenario.png`, import.meta.url)
	.href;
const question = new URL(`@/assets/wireframes/06-question.png`, import.meta.url)
	.href;
const correctFeedback = new URL(
	`@/assets/wireframes/07-feedback_c.png`,
	import.meta.url
).href;
const incorrectFeedback = new URL(
	`@/assets/wireframes/08-feedback_i.png`,
	import.meta.url
).href;
const endLesson = new URL(
	`@/assets/wireframes/09-end_lesson.png`,
	import.meta.url
).href;

export default {
	components: { ImageCard },
	data() {
		return {
			frames: [
				{
					title: 'Introduction Slide',
					src: `${intro}`,
				},
				{
					title: 'Character Slide',
					src: `${character}`,
				},
				{
					title: 'Infographic Slide',
					src: `${infographic}`,
				},
				{
					title: 'Challenge Slide',
					src: `${scenarioChallenge}`,
				},
				{
					title: 'Scenario Slide',
					src: `${scenario}`,
				},
				{
					title: 'Question Slide',
					src: `${question}`,
				},
				{
					title: 'Correct Feedback',
					src: `${correctFeedback}`,
				},
				{
					title: 'Incorrect Feedback',
					src: `${incorrectFeedback}`,
				},
				{
					title: 'End of Lesson',
					src: `${endLesson}`,
				},
			],
		};
	},
};
</script>

<style scoped>
.frames {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
	gap: 1rem 2rem;
	justify-content: center;
	padding-bottom: 2rem;
}
h2 {
	padding-top: 2rem;
	padding-bottom: 1rem;
	font-weight: 500;
}

p {
	padding-bottom: 2rem;
}

@media (max-width: 800px) {
	.frames {
		grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
		gap: 0.5rem;
	}
}
</style>
