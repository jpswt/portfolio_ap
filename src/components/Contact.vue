<template>
	<div class="home-wrapper">
		<div class="form-container">
			<h2 class="name-text">Contact Me!</h2>
			<div class="form-wrapper">
				<div class="contact-wrapper">
					<div :class="{ invalid: !this.error.name.isValid }">
						<input
							v-model="contact.name"
							type="text"
							name="name"
							:placeholder="namePlaceholder"
							@blur="clearValidation('name')"
						/>
					</div>
					<div :class="{ invalid: !this.error.email.isValid }">
						<input
							v-model="contact.email"
							type="text"
							:placeholder="emailPlaceholder"
							@blur="clearValidation('email')"
						/>
					</div>
					<div :class="{ invalid: !this.error.msg.isValid }">
						<textarea
							v-model="contact.message"
							type="text"
							:placeholder="msgPlaceholder"
							@blur="clearValidation('msg')"
						></textarea>
					</div>
				</div>
			</div>
			<div v-if="isSent" class="message">
				{{ successMsg }}
			</div>
			<div v-else class="button">
				<button @click="handleSubmit" type="button">Submit</button>
			</div>
		</div>
		<div>
			<img src="../assets/email.webp" alt="" />
		</div>
	</div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
	data() {
		return {
			contact: {
				name: '',
				email: '',
				message: '',
			},
			error: {
				name: { isValid: true },
				email: { isValid: true },
				msg: { isValid: true },
			},
			successMsg: 'Your message has been sent!',
			isSent: false,
			isValidForm: true,
		};
	},
	methods: {
		validateForm() {
			this.isValidForm = true;
			if (this.contact.name === '') {
				this.error.name.isValid = false;
				this.isValidForm = false;
			}
			if (!this.contact.email.includes('@')) {
				this.error.email.isValid = false;
				this.isValidForm = false;
				this.contact.email = '';
			}
			if (this.contact.message === '') {
				this.error.msg.isValid = false;
				this.isValidForm = false;
			}
		},
		clearValidation(field) {
			this.error[field].isValid = true;
		},
		async handleSubmit(e) {
			try {
				console.log(e);
				this.validateForm();

				if (!this.isValidForm) {
					return;
				}

				await emailjs
					.send(
						'service_4m3ch8l',
						'template_os4l2h5',
						this.contact,
						'2W8Xeo2kxz5dOXvQL'
					)
					.then(
						(result) => {
							console.log(result.text);
							this.isSent = true;
						},
						(error) => {
							console.log(error.text);
						}
					);
				setTimeout(() => {
					this.isSent = false;
					this.contact = {
						name: '',
						email: '',
						message: '',
					};
				}, 3000);
			} catch (error) {
				console.log(error);
			}
		},
	},
	computed: {
		namePlaceholder() {
			return this.error.name.isValid ? 'Name' : 'Please enter your name';
		},
		emailPlaceholder() {
			return this.error.email.isValid ? 'Email' : 'Please enter a valid email';
		},
		msgPlaceholder() {
			return this.error.msg.isValid
				? 'Type a message...'
				: 'Please enter a message';
		},
	},
};
</script>

<style scoped>
.home-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	gap: 0 2rem;
	padding: 1rem;
	padding-top: 4rem;
}
.form-container {
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
}
.form-wrapper {
	display: flex;
	flex-direction: column;
	place-items: center center;
}
.content-wrapper {
	display: flex;
	flex-direction: column;
	gap: 1rem 0;
}
.contact-wrapper {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

input {
	width: 26rem;
	padding: 0.5rem;
	border-radius: 8px;
	outline: none;
	background-color: rgb(241, 241, 241);
	border: 2px solid rgb(43, 137, 171);
}

textarea {
	width: 26rem;
	height: 8rem;
	padding: 0.5rem;
	border-radius: 8px;
	background-color: rgb(241, 241, 241);
	border: 2px solid rgb(43, 137, 171);
	font-family: 'Heebo';
}

.button {
	display: flex;
	justify-content: center;
}

button {
	background-color: #2b89ab;
	width: 12rem;
	padding-block: 0.5rem;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

.message {
	text-align: center;
	color: #2b89ab;
	font-weight: 700;
	font-size: 18px;
}

h1 {
	font-size: 50px;
	font-weight: 600;
}
h2 {
	font-size: 36px;
	font-weight: 500;
}

img {
	width: 350px;
	height: 350px;
	rotate: 0deg;
}

.invalid {
	color: red;
}

.invalid input,
.invalid textarea {
	border: 2px solid red;
}

.invalid ::placeholder {
	color: red;
}
@media (max-width: 800px) {
	.home-wrapper {
		flex-direction: column;
		justify-content: flex-start;
		padding-top: 8rem;
	}

	img {
		display: none;
	}
}
</style>
