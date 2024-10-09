<template>
	<div>
		<div class="frames">
			<div v-for="(frame, index) in frames" :key="index">
				<ImageCard :frame="frame" />
			</div>
		</div>
	</div>
</template>

<script>
import ImageCard from './ImageCard.vue';

const intro = new URL(`@/assets/sl_frames/intro.png`, import.meta.url).href;
const character = new URL(`@/assets/sl_frames/character.png`, import.meta.url)
	.href;
const infographic = new URL(
	`@/assets/sl_frames/infographic.png`,
	import.meta.url
).href;
const scenarioChallenge = new URL(
	`@/assets/sl_frames/challenge.png`,
	import.meta.url
).href;
const scenario = new URL(`@/assets/sl_frames/scenario.png`, import.meta.url)
	.href;
const question = new URL(`@/assets/sl_frames/question.png`, import.meta.url)
	.href;
const correctFeedback = new URL(
	`@/assets/sl_frames/correct_feedback.png`,
	import.meta.url
).href;
const incorrectFeedback = new URL(
	`@/assets/sl_frames/incorrect_feedback.png`,
	import.meta.url
).href;
const endLesson = new URL(`@/assets/sl_frames/end_lesson.png`, import.meta.url)
	.href;

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

@media (max-width: 800px) {
	.frames {
		grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
		gap: 0.5rem;
	}
}
</style>
