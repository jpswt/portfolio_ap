<template>
	<nav>
		<div class="nav-wrapper">
			<img class="logo" src="../assets/logo.png" alt="" />
			<div class="nav-links">
				<RouterLink class="link-wrapper" to="/">
					<HomeIcon class="icon link-text" />
					<span class="link-text"> Home </span>
				</RouterLink>

				<RouterLink class="link-wrapper" to="/about">
					<IdentificationIcon class="update-icon link-text" />
					<span class="link-text">About</span>
				</RouterLink>
				<RouterLink class="link-wrapper" to="/projects">
					<DocumentTextIcon class="icon link-text" />
					<span class="link-text">Projects</span>
				</RouterLink>
				<RouterLink class="link-wrapper" to="/process">
					<Cog6ToothIcon class="icon link-text" />
					<span class="link-text">Process</span>
				</RouterLink>
				<RouterLink class="link-wrapper" to="/contact">
					<EnvelopeIcon class="icon link-text" />
					<span class="link-text">Contact</span>
				</RouterLink>
			</div>
			<Bars3Icon
				class="hamburger-icon"
				@click="toggleMenu"
				:class="{ 'hamburger-inactive': showMobileMenu }"
			/>
			<div class="xmark-wrapper" v-if="showMobileMenu">
				<XMarkIcon
					v-if="showMobileMenu"
					class="xmark-icon"
					@click="toggleMenu"
					:class="{ 'xmark-active': showMobileMenu }"
				/>
			</div>
			<transition name="slide-open">
				<div class="mobile-nav-links" v-if="showMobileMenu">
					<RouterLink class="link-wrapper" to="/" @click="toggleMenu">
						<HomeIcon class="icon link-text" />
						<span class="link-text"> Home </span>
					</RouterLink>

					<RouterLink class="link-wrapper" to="/about" @click="toggleMenu">
						<IdentificationIcon class="update-icon link-text" />
						<span class="link-text">About</span>
					</RouterLink>
					<RouterLink class="link-wrapper" to="/projects" @click="toggleMenu">
						<DocumentTextIcon class="icon link-text" />
						<span class="link-text">Projects</span>
					</RouterLink>
					<RouterLink class="link-wrapper" to="/process" @click="toggleMenu">
						<Cog6ToothIcon class="icon link-text" />
						<span class="link-text">Process</span>
					</RouterLink>
					<RouterLink class="link-wrapper" to="/contact" @click="toggleMenu">
						<EnvelopeIcon class="icon link-text" />
						<span class="link-text">Contact</span>
					</RouterLink>
				</div>
			</transition>
		</div>
	</nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import {
	HomeIcon,
	IdentificationIcon,
	DocumentTextIcon,
	EnvelopeIcon,
	Bars3Icon,
	XMarkIcon,
	Cog6ToothIcon,
} from '@heroicons/vue/24/outline';
// import { IdentificationIcon } from '@heroicons/vue/24/outline';
// import { DocumentTextIcon } from '@heroicons/vue/24/outline';
// import { EnvelopeIcon } from '@heroicons/vue/24/outline';
// import { Bars3Icon } from '@heroicons/vue/24/outline';
// import { XMarkIcon } from '@heroicons/vue/24/outline';
// import { Cog6ToothIcon } from '@heroicons/vue/24/outline';

export default {
	components: {
		HomeIcon,
		IdentificationIcon,
		DocumentTextIcon,
		EnvelopeIcon,
		Bars3Icon,
		XMarkIcon,
		Cog6ToothIcon,
	},
	data() {
		return {
			showMobileMenu: false,
		};
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.handleResize);
		});
	},
	destroyed() {
		window.removeEventListener('resize', this.handleResize);
	},
	methods: {
		toggleMenu() {
			this.showMobileMenu = !this.showMobileMenu;
		},
		closeMenu() {
			setTimeout(() => {
				this.showMobileMenu = false;
			}, 200);
		},
		handleResize() {
			const width = window.innerWidth;
			if (width > 800) {
				this.showMobileMenu = false;
			}
		},
	},
	watch: {
		showMobileMenu() {
			if (this.showMobileMenu) {
				setTimeout(() => {
					document.querySelector('.xmark-icon').style.display = 'block';
				}, 250);
			}
		},
		closeMobileMenu() {
			if (!this.showMobileMenu) {
				document.querySelector('.link-text').style.display = 'none';
			}
		},
	},
};
</script>

<style>
nav {
	width: 100%;
	display: flex;
	height: 80px;
	position: fixed;
	background-color: #ebebe5;
	caret-color: transparent;
}
.nav-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1280px;
	margin: 0 auto;
	height: 100%;
	/* z-index: 99999; */
}

.logo {
	width: 55px;
	height: 55px;
}

.nav-links {
	display: flex;
}

.link-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 1rem;
	gap: 0.3rem;
	text-decoration: none;
	color: hsl(0, 0%, 14%);

	&:hover,
	&.active-link {
		/* color: hsl(197, 88%, 38%); */
		color: rgb(43, 137, 171);
	}
}

.link-text {
	font-size: 16px;
	font-weight: 600;
}

.icon {
	width: 24px;
	height: 24px;
}

.update-icon {
	width: 30px;
	height: 32px;
}

.xmark-wrapper {
	display: flex;
	justify-content: flex-end;
	/* width: 100vw; */
	z-index: 1001;
	transition: 1s ease-in;
}

.xmark-icon {
	display: none;
	color: rgb(207, 207, 207);
	width: 40px;
}

.hamburger-icon {
	display: none;
	width: 40px;
}

.mobile-nav-links {
	position: fixed;
	top: 0;
	width: 100%;
	min-height: 100vh;
	background-color: #598392;
	color: #01161e;
	padding: 6rem 4rem;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem 0;
}

.slide-open-enter-active,
.slide-open-leave-active {
	transition: 0.3s ease-in-out;
}

.slide-open-enter-from,
.slide-open-leave-to {
	transform: translateX(-100%);
}

.slide-open-enter-to {
	transform: translateX(0);
}

/* Mobile media query  */

@media (max-width: 800px) {
	.nav {
		/* width: 100%; */
		margin: 0 1rem;
	}

	.nav-links {
		display: none;
	}

	.hamburger-icon {
		display: block;
		margin-right: 0.5rem;
		cursor: pointer;
	}

	.hamburger-inactive {
		display: none;
	}

	.xmark-icon {
		margin-right: 0.5rem;
		color: #01161e;
		cursor: pointer;
	}

	.xmark-active {
		z-index: 1001;
	}

	.link-wrapper {
		/* margin-left: 8.5rem; */
		width: 148px;
		justify-content: flex-start;
		color: #01161e;

		&:hover,
		&.active-link {
			/* color: hsl(197, 88%, 38%); */
			color: hsl(29, 55%, 92%);
		}
	}

	.link-text {
		font-size: 28px;
		font-weight: 600;
		margin-left: 0.25rem;
	}

	.icon {
		width: 26px;
		height: 28px;
	}

	.update-icon {
		width: 30px;
		height: 30px;
	}
}
</style>
