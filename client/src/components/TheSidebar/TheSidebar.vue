<template>
	<aside class="sidebar">
		<div class="sidebar__head">
			<UserPreview :avatar="avatar" name="Брускова Анастасия" />
		</div>

		<LeftMenu>
			<LeftMenuItem v-for="item in items" :key="item.title">{{ item.title }}</LeftMenuItem>
		</LeftMenu>

	</aside>
</template>

<script>
import UserPreview from '../UserPreview/UserPreview';
import avatar from '../../assets/img/avatar.png';
import LeftMenu from "../LeftMenu/LeftMenu";
import LeftMenuItem from "../LeftMenu/LeftMenuItem/LeftMenuItem";

export default {
	name: "TheSidebar",
	components: {LeftMenuItem, LeftMenu, UserPreview},

	data: () => ({
		avatar,
		items: [
			{ title: 'Лента упоминаний' },
			{ title: 'Хронология жизни' },
			{ title: 'Аналитика' },
			{ title: 'Настройка' },
		]
	}),
}
</script>

<style scoped lang="scss" src="./TheSidebar.scss"></style>
