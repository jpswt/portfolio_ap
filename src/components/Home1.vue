<template>
	<!-- <div class="home-wrapper">
		<div class="content-wrapper">
			<h2 class="name-text">Hi, I'm Amanda</h2>
			<h1 class="designer-text">I am an Instructional Designer</h1>
			<h2 class="'project-text'">I create E-learning projects!</h2>
		</div>
		<img src="../assets/smiley-face-20-a09a5.png" alt="" />
	</div> -->
	<div>home</div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-wrapper {
	max-width: 1280px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0 1rem;
	min-height: 100%;
}

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

@media (max-width: 1280px) {
	.content-wrapper {
		margin: 6rem auto;
		justify-content: center;
		padding: 0 1rem;
	}
}
</style>
