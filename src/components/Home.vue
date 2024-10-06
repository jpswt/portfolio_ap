<template>
	<div class="home-wrapper">
		<div class="content-wrapper">
			<h2 class="name-text">Hi, I'm Amanda</h2>
			<h1 class="designer-text">I am an Instructional Designer</h1>
			<h2 class="'project-text'">I create E-learning projects!</h2>
		</div>
		<img src="../assets/smiley-face.png" alt="" />
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	gap: 0 2rem;
	padding: 1rem;
	height: 100%;
}

/* .content-wrapper {
} */

h1 {
	font-size: 50px;
	font-weight: 600;
}
h2 {
	font-size: 36px;
	font-weight: 500;
}

img {
	width: 200px;
	height: 200px;
}

@media (max-width: 935px) {
	.home-wrapper {
		flex-direction: column;
	}
}

@media (max-width: 800px) {
	.home-wrapper {
		height: calc((100% + 80px));
	}
}

@media (max-width: 705px) {
	h1 {
		font-size: 44px;
		font-weight: 600;
	}
	h2 {
		font-size: 30px;
		font-weight: 500;
	}
}

@media (max-width: 625px) {
	h1 {
		font-size: 34px;
		font-weight: 600;
	}
	h2 {
		font-size: 26px;
		font-weight: 500;
	}
}
</style>
