<template>
  <div class="main-layout">
		<div class="main-layout__sidebar"><TheSidebar/></div>
		<div class="main-layout__content">
			<TheContent />
		</div>
		<div class="main-layout__detail-content">
			<ResourceDetail
				:is-empty="!activeStat"
				:date="stat.date"
				:description="stat.desc"
				:title="stat.title"
				:link="stat.link"
				:img="stat.img"
			/>
		</div>
  </div>
</template>

<script>
import TheSidebar from "../../components/TheSidebar/TheSidebar";
import TheContent from "../../components/TheContent/TheContent";
import ResourceDetail from "../../components/ResourceDetail/ResourceDetail";
import {mapGetters} from 'vuex';

export default {
  name: 'HomePage',
	components: {ResourceDetail, TheSidebar, TheContent},
	computed: {
		...mapGetters(['activeStat']),
		stat() {
			return this.activeStat?.content || {};
		}
	}
	// data: () => ({
	// 	detail: {
	// 		img: 'https://inbenefit.com/wp-content/uploads/2017/10/%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D1%8B-%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85-%D0%B8-%D0%BE%D0%BF%D1%8B%D1%82%D0%BD%D1%8B%D1%85-%D1%8E%D0%B7%D0%B5%D1%80%D0%BE%D0%B2-03.jpg',
	// 		title: '26 / 647. Как в РТ МИС\n' +
	// 			'«вездекод» покоряли | ВКонтакте',
	// 		description: '26-ой из 647-и команд стала команда «Кубань IT» на ежегодном хакатоне ВКонтакте «Вездекод», который в этом году прошел с 7 по 20 сентября в онлайн-формате.\n' +
	// 			'\n' +
	// 			'Команду «Кубань IT» собрали наши коллеги: Паша Кривошеев, Дима Власенко, Настя Брускова ...',
	// 		link: 'vk.com',
	// 		date: '17.03.2021',
	// 	}
	// }),
};
</script>

<style src="./HomePage.scss" lang="scss" scoped></style>
