<template>
	<h2>Action Map</h2>
	<p>
		The clinic created a goal to improve patient management of blood sugar
		levels. The objective was defined as: “Improve the ability of individuals
		with Type 1 Diabetes to manage blood sugar levels effectively throughout the
		day, reducing the incidence of high and low blood sugar levels by 20%.” I
		used this goal as the desired outcome in the action map. By incorporating
		data from patient interviews and input from a diabetes educator, I
		identified the key actions patients need to take to achieve the goal, as
		well as the essential knowledge they require.
	</p>
	<div class="action-map">
		<div class="action-link">
			<a
				href="https://bluestarlet07.github.io/Portfolio/resources"
				rel="noreferrer noopener"
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
	font-weight: 500;
}

p {
	padding-bottom: 2rem;
}

.action-map {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* padding-bottom: 1rem; */
}
.action-link {
	width: 90%;
	display: flex;
	justify-content: flex-end;
}

img {
	width: max(90%, 330px);
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
