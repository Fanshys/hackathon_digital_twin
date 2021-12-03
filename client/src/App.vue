<template>
	<div>
		<component :is="layout" />
	</div>
</template>

<script>
import MainLayout from './layouts/MainLayout/MainLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';

export default {
	name: 'App',
	components: {
		MainLayout,
		EmptyLayout,
	},

	computed: {
		layout() {
			return this.$route.meta.layout || 'MainLayout';
		},
	},
};
</script>
