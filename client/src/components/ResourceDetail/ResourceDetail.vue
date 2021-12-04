<template>
	<div class="resources-detail">
		<div v-if="isEmpty" class="resources-detail__empty">
			<div class="resources-detail__icon">👈</div>
			<div class="resources-detail__text">
				Здесь будет подробная информация
				об источнике. Выберите источник в левой
				части экрана.
			</div>
		</div>

		<div class="resources-detail__info">
			<img v-if="img" :src="img" class="resources-detail__img">

			<div v-if="date" class="resources-detail__date">
				{{ date }}
			</div>

			<h2 v-if="title" class="resources-detail__title">
				{{ title }}
			</h2>

			<a class="resources-detail__link" v-if="link" :href="link">{{ link }}</a>

			<div v-if="description" v-html="description" class="resources-detail__description"></div>

			<WtButton v-if="link" :to="link">Перейти на источник</WtButton>
		</div>
	</div>
</template>

<script>
import WtButton from "../ui/WtButton/WtButton";
export default {
	name: "ResourceDetail",
	components: {WtButton},
	props: {
		isEmpty: {
			type: Boolean,
			default: true,
		},

		img: {
			type: String,
			default: null
		},

		title: {
			type: String,
			default: null
		},

		link: {
			type: String,
			default: null
		},

		description: {
			type: String,
			default: null
		},

		date: {
			type: String,
			default: null
		}
	}
}
</script>

<style scoped lang="scss" src="./ResourceDetail.scss"></style>
