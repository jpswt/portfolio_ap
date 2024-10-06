<template>
	<div class="footer" v-if="!showMobileMenu">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns:svgjs="http://svgjs.dev/svgjs"
			width="2000"
			height="120"
			preserveAspectRatio="none"
			viewBox="0 0 2000 180"
		>
			<g mask='url("#SvgjsMask1355")' fill="none">
				<path
					d="M 0,35 C 66.8,41.2 200.4,66.4 334,66 C 467.6,65.6 534.4,32.2 668,33 C 801.6,33.8 868.4,73.8 1002,70 C 1135.6,66.2 1202.4,13.4 1336,14 C 1469.6,14.6 1537.2,72.2 1670,73 C 1802.8,73.8 1934,29 2000,18L2000 200L0 200z"
					fill="rgba(18, 69, 89, 1)"
				></path>
				<path
					d="M 0,154 C 100,146.6 300,116.4 500,117 C 700,117.6 800,154 1000,157 C 1200,160 1300,127.2 1500,132 C 1700,136.8 1900,171.2 2000,181L2000 200L0 200z"
					fill="rgba(174, 195, 176, 1)"
				></path>
			</g>
			<defs>
				<mask id="SvgjsMask1355">
					<rect width="2000" height="180" fill="#ffffff"></rect>
				</mask>
			</defs>
		</svg>
	</div>
</template>

<script>
export default {
	props: ['showMobileMenu'],
};
</script>

<style scoped>
.footer {
	overflow-x: hidden;
	height: 120px;
	position: fixed;
	bottom: 0;
	/* z-index: -100; */
}
</style>
