<template>
	<div class="about-wrapper">
		<div class="content-wrapper">
			<div class="content-left">
				Left stuff testing if the float is going to work the way I want it to in
				mobile
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
				<div class="profile-right"></div>
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
	padding-top: 5rem;
	display: flex;
	flex-direction: column;
	height: 100%;
}

.content-wrapper {
	width: 100%;
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

@media (max-width: 1280px) {
	.profile-right {
		display: none;
	}
}

@media (max-width: 800px) {
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
}
</style>
