<template>
	<div class="about-wrapper">
		<div class="content-wrapper">
			<div class="content-left">
				<p>
					From a young age, my passion for learning and education was clear,
					inspired by teachers whose lessons have left a lasting impact on me.
					The desire to pass on that same inspiration to others led me to a
					career in education. After six years in the classroom, I discovered a
					deep interest in curriculum development, where my hands-on teaching
					experience provided valuable insight into the critical role of
					effective curriculum in student success.
				</p>
				<p>
					This passion guided me to transition into a role as an instructional
					designer for the United States Army, where I specialized in creating
					both resident and e-learning courses. My work in this field fueled my
					enthusiasm for designing engaging e-learning materials and platforms
					that put the learner at the center of the experience.
				</p>
				<p>
					Now, as a former elementary teacher turned instructional designer, I
					am dedicated to crafting innovative, learner-centric e-learning
					products. I am committed to using digital education to break down
					barriers and make learning accessible to all. By applying
					human-centered design principles, I strive to develop course materials
					that cater to diverse learning styles and ensure accessibility for all
					learners.
				</p>
			</div>
			<div class="content-right">
				<div class="profile-left">
					<img class="blob" src="../assets/profile.png" alt="" />
					<div class="links">
						<a href="mailto:amanda.n.perezid@gmail.com">
							<img class="email" src="../assets/email.png" alt="" />
						</a>
						<a
							href="https://www.linkedin.com/in/amandalauria-perez/"
							target="_blank"
						>
							<img class="linkedin" src="../assets/linkedin.png" alt="" />
						</a>
						<a href="https://bluestarlet07.github.io/Portfolio/" target="blank">
							<img class="document" src="../assets/document.png" alt="" />
						</a>
						<div v-if="isClicked">{{ value }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isClicked: false,
			value: '',
		};
	},
};
</script>

<style scoped>
.about-wrapper {
	max-width: 1280px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
}

.content-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
}
.content-left {
	width: 55%;
	padding-top: 2rem;
	padding-inline: 1rem;
}

.content-right {
	width: 45%;
	display: flex;
	/* flex-direction: column;
	justify-content: center;
	padding-top: 3rem;
	gap: 1rem 0; */
}

.profile-left {
	display: flex;
	flex: 1;
	width: 50%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.profile-right {
	flex: 1;
	width: 50%;
}

.blob {
	width: 250px;
}

.links {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0 1.25rem;
	padding-top: 0.5rem;
}

.email {
	width: 35px;
	height: 40px;
	/* object-fit: contain; */
}

.linkedin {
	width: 40px;
	height: 40px;
}

.document {
	width: 26px;
	height: 30px;
}
p {
	padding-bottom: 1rem;
}

@media (max-width: 1280px) {
	.profile-right {
		display: none;
	}
}

@media (max-width: 900px) {
	.content-wrapper {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}

	.content-left {
		width: 100%;
	}

	.content-right {
		width: 100%;
	}
	.links {
		width: 100%;
	}

	.about-wrapper {
		padding-top: 5rem;
		padding-bottom: 8rem;
	}
}
</style>
