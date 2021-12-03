<template>
	<a href="#" class="user-preview">
		<div class="user-preview__avatar">
			<img class="user-preview__avatar-img" :src="avatar" :alt="name">
		</div>

		<div class="user-preview__info">
			<div class="user-preview__text">{{ wish }}</div>
			<div class="user-preview__name">
				{{ name }}
				<svg class="user-preview__icon" width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.437896 11.7808C-0.0652398 11.4358 -0.146814 10.8065 0.255694 10.3753L4.33929 6L0.255694 1.62472C-0.146815 1.19346 -0.0652403 0.564174 0.437895 0.219167C0.941031 -0.125841 1.6752 -0.0559197 2.07771 0.375339L6.74435 5.37531C7.08522 5.74052 7.08522 6.25947 6.74435 6.62469L2.07771 11.6247C1.6752 12.0559 0.941032 12.1258 0.437896 11.7808Z" fill="inherit"/>
				</svg>
			</div>
		</div>
	</a>
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
