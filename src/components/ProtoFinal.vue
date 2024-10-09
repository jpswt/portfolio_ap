<template>
	<div class="proto-wrapper">
		<h2>Prototype</h2>
		<p>
			I developed a prototype in Storyline to test the project's functionality
			and gather early feedback from the client and SME. I completed all slides
			for the first part of the scenario. I shared the prototype with a small
			focus group, including diabetes educators and individuals with Type 1
			diabetes.
		</p>
		<h2>Full Development</h2>
		<button @click="openUrl">Click here to view project!</button>
	</div>
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
.proto-wrapper {
	padding-bottom: 10rem;
	padding-top: 1rem;
}

h2 {
	padding-block: 1rem;
	font-weight: 500;
}

p {
	padding-bottom: 1rem;
}

img {
	width: max(90%, 400px);
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
}
</style>
