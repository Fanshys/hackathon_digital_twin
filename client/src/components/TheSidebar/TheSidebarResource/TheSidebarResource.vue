<template>
	<a :href="link" class="sidebar-resource">
		<div class="sidebar-resource__img-wrap">
			<img class="sidebar-resource__img" :src="img">
		</div>

		<div class="sidebar-resource__info">
			<div class="sidebar-resource__text">{{ text }}</div>
			<div class="sidebar-resource__link">{{ link }}</div>
		</div>
	</a>
</template>

<script>
export default {
	name: "TheSidebarResource",

	props: {
		text: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
	}
}
</script>

<style scoped lang="scss" src="./TheSidebarResource.scss"></style>
