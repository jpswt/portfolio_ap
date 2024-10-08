<template>
	<h2>Storyboard</h2>
	<p>
		Once the course design was agreed upon, I combined the text-based storyboard
		with the visuals to create the storyboard. I included programming notes, and
		files that would be needed for the project.
	</p>
	<div class="table-wrapper" v-if="isDesktop">
		<table>
			<thead>
				<tr>
					<th class="bold">Screen Title</th>
					<th class="bold">On-Screen Title</th>
					<th class="bold">Programming Notes</th>
					<th class="bold">Image</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(slide, index) in slides"
					:key="index"
					:currentSlide="setSlide(index)"
				>
					<td class="stretch">
						<p>
							{{ slide.title }}
						</p>
					</td>
					<td class="stretch">
						<p>
							<span class="bold">Body: </span>
							{{ slide.text.body }}
						</p>
						<p class="css-fix">
							<span class="bold">Button: </span>
							{{ slide.text.btn }}
						</p>
					</td>
					<td class="stretch">
						<ol>
							<li v-for="(note, index) in slide.notes" :key="index">
								{{ note.note }}
							</li>
						</ol>
					</td>
					<td class="stretch">
						<div
							v-for="(image, index) in slide.images"
							:key="index"
							class="img-wrapper"
						>
							<img :src="image.src" alt="" class="sb_img" id="test" />
						</div>
						<div v-if="showButton" class="btn-container">
							<p @click="openModal">Click to enlarge</p>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="table-wrapper" v-else>
		<table>
			<tbody
				v-for="(slide, index) in slides"
				:key="index"
				:currentSlide="setSlide(index)"
			>
				<tr>
					<td class="bold">Screen Title</td>
					<td>
						<p>
							{{ slide.title }}
						</p>
					</td>
				</tr>
				<tr>
					<td class="bold">On-Screen Title</td>
					<td>
						<p>
							<span class="bold">Body: </span>
							{{ slide.text.body }}
						</p>
						<p class="css-fix">
							<span class="bold">Button: </span>
							{{ slide.text.btn }}
						</p>
					</td>
				</tr>
				<tr>
					<td class="bold">Programming Notes</td>
					<td>
						<ol>
							<li v-for="(note, index) in slide.notes" :key="index">
								{{ note.note }}
							</li>
						</ol>
					</td>
				</tr>
				<tr class="tr-flex">
					<td class="bold flex1">Image</td>
					<td class="flex2">
						<div
							v-for="(image, index) in slide.images"
							:key="index"
							class="img-wrapper"
						>
							<img :src="image.src" alt="" class="sb_img" id="test" />
						</div>
						<div v-if="showButton" class="btn-container">
							<p @click="openModal">Click to enlarge</p>
						</div>
					</td>
				</tr>
				<tr class="bg">
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
	<Modal v-if="showModal" @close="closeModal">
		<template v-slot:header> This is a new modal header. </template>

		<template v-slot:body>
			<img class="modal-image" src="../assets/sl_frames/alex_all.png" alt="" />
		</template>

		<template v-slot:footer> This is a new modal footer. </template>
	</Modal>
</template>

<script>
import Modal from './Modal.vue';

const intro = new URL(`@/assets/sl_frames/intro.png`, import.meta.url).href;
const alex = new URL(`@/assets/sl_frames/alex_all.png`, import.meta.url).href;
const morning1 = new URL(
	`@/assets/sl_frames/alex_morning1.png`,
	import.meta.url
).href;
const morning2 = new URL(
	`@/assets/sl_frames/alex_morning2.png`,
	import.meta.url
).href;
const decision = new URL(
	`@/assets/sl_frames/alex_decision.png`,
	import.meta.url
).href;

const btnText = `Choice 1 - Skip breakfast and head out for your morning run. Choice 2 - Eat 15 grams of fast-acting carbohydrates, wait 15 minutes, and recheck your blood sugar. Info button `;

export default {
	components: { Modal },
	mounted() {
		this.handleResize();
		this.$nextTick(() => {
			window.addEventListener('resize', this.handleResize);
		});
	},
	destroyed() {
		window.removeEventListener('resize', this.handleResize);
	},
	data() {
		return {
			isDesktop: true,
			currentSlide: null,
			showModal: false,
			slides: [
				{
					title: 'Course Intro - The Highs and Lows of Diabetes',
					text: {
						body: 'You will navigate a scenario-based experience as a Type 1 diabetic. Throughout the journey, you will make informed decisions to effectively manage your blood sugar levels. Your goal is to keep your blood sugar within a healthy range by making informed decisions based on the symptoms you experience.',
						btn: 'Continue',
					},
					notes: [{ note: 'The continue button will advance to slide.' }],
					images: [{ src: `${intro}` }],
				},
				{
					title: 'Character Introduction  - Meet Alex',
					text: {
						body: 'Click on Alex to say hi.',
						btn: 'Next',
					},
					notes: [
						{ note: 'The next button will advance to slide number 3.' },
						{
							note: 'Once Alex is selected, a layer appears that gives information about Alex. Each conversation bubble is programmed into the timeline.',
						},
						{ note: 'The next button will advance to slide number 3.' },
					],
					images: [{ src: `${alex}` }],
				},
				{
					title: 'Scenario: Morning 8:00am',
					text: {
						body: 'You wake up feeling a bit off. Click the glucometer to check if your blood sugar is in the normal range.',
						btn: ' The next button will advance to slide number 7. ',
					},
					notes: [
						{
							note: 'Once the glucometer is selected, a layer will appear with an hour glass that is programmed for 3 seconds in the timeline. After the 3 seconds 65mg/dl will appear.',
						},
						{
							note: 'The next button is programmed to appear in the layer timeline once 65mg/dl appears. ',
						},
					],
					images: [{ src: `${morning1}` }, { src: `${morning2}` }],
				},
				{
					title: 'Decision 1',
					text: {
						body: 'You wake up feeling a bit off. Click the glucometer to check if your blood sugar is in the normal range.',
						btn: `\n- Choice 1 - Skip breakfast and head out for your morning run.\n- Choice 2 - Eat 15 grams of fast-acting carbohydrates, wait 15 minutes, and recheck your blood sugar.\n- Info button `,
					},
					notes: [
						{
							note: 'Choice 1 - Skip breakfast and head out for your morning run will advance to the consequence on slide number 8.',
						},
						{
							note: 'Choice 2 - Eat 15 grams of fast-acting carbohydrates, wait 15 minutes, and recheck your blood sugar will advance to correct feedback on slide number 9.',
						},
						{
							note: 'Info button will go to slide 5 infographic.',
						},
					],
					images: [{ src: `${decision}` }],
				},
			],
		};
	},
	methods: {
		handleResize() {
			this.isDesktop = true;
			this.width = window.innerWidth;
			if (this.width <= 1000) {
				this.isDesktop = false;
			}
		},
		setSlide(slide) {
			this.currentSlide = slide;
		},
		openModal() {
			this.showModal = true;
		},
		closeModal() {
			this.showModal = false;
		},
	},
	computed: {
		showButton() {
			console.log(this.currentSlide);
			return this.currentSlide === 1;
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

<style scoped>
h2 {
	padding-block: 1rem;
}

p {
	padding-bottom: 2rem;
}

.action-map {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 2rem;
}
.action-link {
	width: 90%;
	display: flex;
	justify-content: flex-end;
}

img {
	width: max(90%, 400px);
	align-self: center;
}

a {
	color: rgb(43, 137, 171);
	text-decoration: none;
	font-weight: 600;

	&:hover,
	&.active-link {
		color: rgb(43, 137, 171);
	}
}

.table-wrapper {
	display: flex;
	justify-content: center;
}

table {
	table-layout: fixed;
	/* border: 1px solid black; */
	border-collapse: collapse;
	width: 90%;
}

table p,
ol,
img {
	padding-block: 0.5rem;
}

table thead tr {
	text-align: center;
}

td {
	border: 1px solid black;
	padding-inline: 1rem;
}

.stretch {
	vertical-align: top;
}

.bold {
	font-weight: 700;
}

.color {
	font-weight: 800;
	color: black;
}

ol {
	padding-left: 1rem;
}

.btn-container {
	display: flex;
	justify-content: center;
	color: #598392;
	p {
		font-weight: 700;
		cursor: pointer;
	}
}

.css-fix {
	white-space: pre-wrap;
}

.img-wrapper {
	display: flex;
	justify-content: center;
}

.sb_img {
	width: 90%;
}

.modal-image {
	width: 900px;
}

@media (max-width: 1000px) {
	table {
		table-layout: unset;
		width: 100%;
	}

	ol {
		padding-inline: 1.5rem;
		padding-bottom: 1rem;
	}

	.sb_img {
		width: max(40%, 300px);
	}

	.tr-flex tr {
		display: flex;
	}

	.flex1 {
		flex: 1;
	}

	.flex2 {
		flex: 2;
	}

	.bg {
		background-color: rgb(215, 215, 215);
		width: 100%;
		height: 15px;
		border: 1px solid black;
	}

	.bg {
		td {
			border-right: none;
			border-left: none;
		}
	}

	.modal-image {
		width: 400px;
	}

	.btn-container {
	}
}
</style>
