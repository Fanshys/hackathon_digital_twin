<template>
	<div class="resources-detail">
		<div v-if="isEmpty" class="resources-detail__empty">
			<div class="resources-detail__icon">👈</div>
			<div class="resources-detail__text">
				Здесь будет подробная информация
				об источнике. Выберите источник влевой
				части экрана.
			</div>
		</div>

		<div class="resources-detail__info">
			
		</div>
	</div>
</template>

<script>
export default {
	name: "ResourceDetail",

	props: {
		isEmpty: {
			type: Boolean,
			default: true,
		}
	}
}
</script>

<style scoped lang="scss" src="./ResourceDetail.scss"></style>
