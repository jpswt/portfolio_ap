<template>
	<!-- <h2>Featured Project</h2> -->
	<div class="project-container">
		<div class="project">
			<img src="../assets/sl_modules/dnd.png" alt="" />
			<button @click="openDnDUrl">Click here to view project!</button>
		</div>
		<div class="info-container">
			<div class="info">
				<p>
					A dynamic drag-and-drop exercise, where participants engage in
					selecting items needed for recipe.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		openDnDUrl() {
			window.open('https://bluestarlet07.github.io/drag_and_drop/', '_blank');
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
