<template>
	<aside class="sidebar">
		<div class="sidebar__head">
			<UserPreview :avatar="avatar" name="Брускова Анастасия" />
		</div>

		<div class="sidebar__section">
			<LeftMenu class="sidebar__menu">
				<LeftMenuItem v-for="item in items" :key="item.title" :active="item.active">{{ item.title }}</LeftMenuItem>
			</LeftMenu>
		</div>

		<div v-for="category in categories" :key="category.id" class="sidebar__section">
			<div class="sidebar__section-title">{{ category.title }}</div>

			<TheSidebarResource
				v-for="resource in childs(category.id)"
				:key="resource.link"
				:img="resource.img"
				:text="resource.title"
				:link="resource.link"
				class="sidebar__resource"
			/>
		</div>

		<button @click="logout" class="sidebar__logout">Выйти из системы</button>
	</aside>
</template>

<script>
import UserPreview from '../UserPreview/UserPreview';
import avatar from '../../assets/img/avatar.png';
import LeftMenu from "../LeftMenu/LeftMenu";
import LeftMenuItem from "../LeftMenu/LeftMenuItem/LeftMenuItem";
import TheSidebarResource from "./TheSidebarResource/TheSidebarResource";
import { mapActions } from 'vuex';

import resource1 from '../../assets/img/resource-1.png';

export default {
	name: "TheSidebar",
	components: {TheSidebarResource, LeftMenuItem, LeftMenu, UserPreview},

	data: () => ({
		avatar,
		items: [
			{ title: 'Лента упоминаний', active: true },
			{ title: 'Хронология жизни' },
			{ title: 'Аналитика' },
			{ title: 'Настройка' },
		],

		categories: [
			{id: 1, title: 'Государство и право'},
			{id: 2, title: 'Карьера'},
			// {id: 3, title: 'Семья и отношения'},
			// {id: 4, title: 'Государство и право'},
		],

		resources: [
			{
				category: 1,
				title: 'Налог на имущество физических лиц в размере 199 руб. ',
				link: 'https://fssp.gov.ru',
				img: resource1,
			},

			{
				category: 2,
				title: 'Дизайнер-интерфейсов',
				link: 'https://freelance.ru',
				img: resource1,
			},

			{
				category: 2,
				title: 'РТ МИС • Medtech • Вакансии в IT',
				link: 'https://vk.com/ksx_ampi',
				img: resource1,
			},
		],
	}),

	computed: {
		childs() {
			return category =>
				this.resources.filter(item => item.category === category);
		}
	},

	methods: {
		...mapActions(['logout']),
	},
}
</script>

<style scoped lang="scss" src="./TheSidebar.scss"></style>
