<template>
	<h2>The Process</h2>
	<p>
		With the help of a diabetes education clinic, I conducted several interviews
		with Type 1 diabetic patients. This provided valuable insights into living
		with Type 1 diabetes and the challenges of managing blood sugar levels
		effectively. Using data from these interviews, along with guidance from a
		diabetes educator, I created an action map that informed the development of
		a text-based storyboard. From there, I designed a wireframe and visual
		mockup in Figma. While awaiting approval of the visual mockup, I began
		prototyping in Articulate Storyline 360.
	</p>
</template>

<script>
export default {
	methods: {
		openUrl() {
			window.open('https://bluestarlet07.github.io/Diabetes/', '_blank');
		},
	},
};
</script>

<style scoped>
.project {
	display: flex;
	align-items: center;
	gap: 0 2rem;
}

.info {
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
}
h2 {
	padding-block: 1rem;
	font-weight: 500;
}

img {
	width: max(45%, 400px);
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

@media (max-width: 800px) {
	.project {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem 0rem;
	}

	button {
		margin-bottom: 2rem;
	}
}
</style>
