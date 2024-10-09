<template>
	<div class="frame-container">
		<p>{{ frame.title }}</p>
		<img :src="frame.src" alt="" />
	</div>
</template>

<script>
export default {
	props: {
		frame: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.frame-container {
	display: flex;
	flex-direction: column;
	width: fit-content;
}
img {
	width: 250px;
	height: 150px;
}

p {
	font-size: 1rem;
}

@media (max-width: 800px) {
	img {
		width: 150px;
		height: 100px;
	}
}
</style>
