<template>
	<!-- <h2>Featured Project</h2> -->
	<div class="project-container">
		<div class="project">
			<img src="../assets/cybersecurity.png" alt="" />
			<button @click="openDiabetesUrl">Click here to view project!</button>
		</div>
		<div class="info-container">
			<div class="info">
				<p>
					How much do you know about cybersecurity? Through gamification, this
					course covers basic principles of cybersecurity including identifying
					online threats, creating strong passwords, and avoiding phishing
					scams.
				</p>
				<div class="stack">
					<div class="center">
						<h2 class="title">Audience</h2>
						<p>Adults</p>
					</div>
					<div class="center">
						<h2 class="title">Development</h2>
						<p>Storyline 360 | Canva</p>
					</div>
				</div>
			</div>
		</div>
		<div class="project">
			<img src="../assets/sl_frames/intro.png" alt="" />
			<button @click="openDiabetesUrl">Click here to view project!</button>
		</div>
		<div class="info-container">
			<div class="info">
				<p>
					This scenario-based eLearning course was developed for Type 1
					Diabetics to practice making decisions on how to manage blood sugar
					levels effectively based on signs and symptoms.
				</p>
				<div class="stack">
					<div class="center">
						<h2 class="title">Audience</h2>
						<p>Type I Diabetics</p>
					</div>
					<div class="center">
						<h2 class="title">Development</h2>
						<p>Storyline 360 | Canva | Figma</p>
					</div>
				</div>
			</div>
		</div>
		<div class="hr">
			<hr />
			<!-- <img src="../assets/hr.png" alt="" /> -->
		</div>
		<div class="project">
			<img src="../assets/rise_time.png" alt="" />
			<button @click="openTimeUrl">Click here to view project!</button>
		</div>
		<div class="info-container bottom">
			<div class="info">
				<p>
					This course covers essential aspects of effective time management,
					including identifying common challenges, exploring various tools and
					techniques, and finding a healthy balance between professional duties
					and personal life. Through interactive scenarios and real-life
					examples, this course helps learners understand how to implement these
					strategies in their daily routines to boost productivity and maintain
					a work-life harmony.
				</p>
				<div class="stack">
					<div class="center">
						<h2 class="title">Audience</h2>
						<p>Working Professionals</p>
					</div>
					<div class="center">
						<h2 class="title">Development</h2>
						<p>Rise 360</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		openDiabetesUrl() {
			window.open('https://bluestarlet07.github.io/Diabetes/', '_blank');
		},
		openTimeUrl() {
			window.open(
				'https://bluestarlet07.github.io/TimeManagement/#/',
				'_blank'
			);
		},
		openCyberUrl() {
			window.open('https://bluestarlet07.github.io/Diabetes/', '_blank');
		},
	},
};
</script>

<style scoped>
.project-container {
	padding-inline: 2rem;
}

.project {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem 0rem;
	padding-top: 2rem;
	padding-bottom: 1rem;
}

.info-container {
	display: flex;
	width: 100%;
	justify-content: center;
}

.info {
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	width: max(400px, 50%);
}

.stack {
	width: 100%;
	display: flex;
	justify-content: space-evenly;
}

h2 {
	padding-block: 1rem;
	font-weight: 500;
}
.center {
	text-align: center;
}

.title {
	padding: 0;
}

img {
	width: max(50%, 400px);
	align-self: center;
}
button {
	background-color: rgb(43, 137, 171);
	padding: 0.5rem 2rem;
	border-radius: 4px;
	color: white;
	border: none;
	font-size: 1.2rem;
	cursor: pointer;
	height: fit-content;
}

.bottom {
	padding-bottom: 4rem;
}

.hr {
	display: flex;
	justify-content: center;
	padding-top: 2rem;
	width: 100%;
	height: auto;
}

hr {
	width: 50%;
}

@media (max-width: 800px) {
	.project {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* gap: 1rem 0rem; */
		padding-bottom: 0;
	}

	img {
		width: max(50%, 320px);
		align-self: center;
	}

	button {
		margin-bottom: 2rem;
	}

	.stack {
		flex-direction: column;
		row-gap: 1rem;
	}

	hr {
		width: 100%;
	}
}
</style>
