<template>
	<div class="user-preview">
		<div class="user-preview__avatar">
			<img class="user-preview__avatar-img" :src="avatar" :alt="name">
		</div>

		<div class="user-preview__info">
			<div class="user-preview__text">{{ wish }}</div>
			<div class="user-preview__name">{{ name }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UserPreview",

	props: {
		avatar: {
			type: String,
			required: true,
		},

		name: {
			type: String
		},

		wish: {
			type: String,
			default: 'Хорошего дня 🌞'
		}
	}
}
</script>

<style scoped lang="scss" src="./UserPreview.scss"></style>
