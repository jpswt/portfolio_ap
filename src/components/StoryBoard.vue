<template>
	<h2>Storyboard</h2>
	<p>
		Once the course design was agreed upon, I combined the text-based storyboard
		with the visuals to create the storyboard. I included programming notes, and
		files that would be needed for the project.
	</p>
	<div class="action-map">
		<div class="action-link">
			<a
				href="https://bluestarlet07.github.io/Portfolio/resources"
				target="_blank"
				>Click for pdf version</a
			>
		</div>
		<img src="../assets/actionmap.png" alt="" />
	</div>
</template>

<script>
const action = new URL(`@/assets/action_map.pdf`, import.meta.url).href;

export default {};
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
</style>
