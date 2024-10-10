<template>
	<h2>Style Guide</h2>
	<div class="guide-container">
		<h3>COLOR PALETTE</h3>
		<div class="colors">
			<div class="color">
				<div class="box" :style="{ backgroundColor: '#232A30' }"></div>
				<p>#232A30</p>
			</div>
			<div class="color">
				<div class="box" :style="{ backgroundColor: '#FFFFFF' }"></div>
				<p>#FFFFFF</p>
			</div>
			<div class="color">
				<div class="box" :style="{ backgroundColor: '#89C0BA' }"></div>
				<p>#89C0BA</p>
			</div>
			<div class="color">
				<div class="box" :style="{ backgroundColor: '#9DB5C0' }"></div>
				<p>#9DB5C0</p>
			</div>
			<div class="color">
				<div class="box" :style="{ backgroundColor: '#F27654' }"></div>
				<p>#F27654</p>
			</div>
			<div class="color">
				<div class="box" :style="{ backgroundColor: '#FF9F80' }"></div>
				<p>#FF9F80</p>
			</div>
		</div>
		<h3>TYPOGRAPHY</h3>
		<div class="typography">
			<h1>Heading, Roboto, 26px</h1>
			<h2 class="type-h2">Heading 2, Roboto, 24px</h2>
			<p>Body Text, Roboto, 12px</p>
		</div>
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
.guide-container {
	background-color: rgb(255, 255, 255);
	padding: 1rem;
	width: 90%;
	margin: 0 auto;
}

h2 {
	padding-block: 1rem;
	font-weight: 500;
}

h3 {
	font-weight: bold;
	text-align: center;
	text-decoration: underline;
}

.colors {
	display: flex;
	flex-wrap: wrap;
	column-gap: 1rem;
	overflow: hidden;
	justify-content: center;
	padding-bottom: 2rem;
	padding-top: 0.5rem;
}

.color {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.box {
	width: 125px;
	height: 125px;
	border: 1px solid rgb(185, 185, 185);
	/* background-color: #232a30; */
}

.typography {
	font-family: 'Roboto';
	margin-top: 0.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
}

h1 {
	font-size: 22px;
}

.type-h2 {
	font-size: 20px;
	padding: 0;
	font-weight: 400;
}

p {
	font-size: 16px;
	padding: 0;
}

@media (max-width: 800px) {
	.box {
		width: 100px;
		height: 100px;
	}
}
</style>
