<template>
	<li class="left-menu-item">
		<RouterLink :class="['left-menu-item__link', classList]" to="#"><slot /></RouterLink>
	</li>
</template>

<script>
export default {
	name: "LeftMenuItem",

	props: {
		active: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		classList() {
			return {'left-menu-item__link--active': this.active};
		}
	}
}
</script>

<style scoped lang="scss" src="./LeftMenuItem.scss"></style>
