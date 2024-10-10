<template>
	<div class="wrapper">
		<ProcessIntro />
		<ActionMap />
		<WireFrame />
		<WireFrameSL />
		<StyleGuide />
		<StoryBoard />
		<ProtoFinal />
	</div>
</template>

<script>
import ActionMap from './ActionMap.vue';
import ProcessIntro from './ProcessIntro.vue';
import ProtoFinal from './ProtoFinal.vue';
import StoryBoard from './StoryBoard.vue';
import StyleGuide from './StyleGuide.vue';
import WireFrame from './WireFrame.vue';
import WireFrameSL from './WireFrameSL.vue';

export default {
	components: {
		ProcessIntro,
		ActionMap,
		WireFrame,
		WireFrameSL,
		StyleGuide,
		StoryBoard,
		ProtoFinal,
	},
	data() {
		return {};
	},
};
</script>

<style scoped>
.wrapper {
	max-width: 1280px;
	margin: 0 auto;
	padding-top: 5rem;
	padding-inline: 2rem;
	/* display: flex; */
	/* flex-direction: column; */
	height: 100%;
}
</style>
