<template>
  <div class="content">
		<div :class="['content__search', classList]"><WtSearch @close="searchIsOpen = false"/></div>

    <TheFilters @open-search="searchIsOpen = true" />

    <div class="feeds">
      <FeedCard
        v-for="feedcard of stats"
        :key="feedcard.filePath"
        :link="feedcard.content.link"
        :tags="feedcard.tags"
        :icon="feedcard.content.icon"
        :date="feedcard.date"
        :desc="feedcard.content.desc"
        :title="feedcard.content.title"
      />
    </div>
  </div>
</template>

<script>
import FeedCard from '../FeedCard/FeedCard.vue';
import TheFilters from '../TheFilters/TheFilters.vue';
import {mapActions, mapGetters} from 'vuex';
import vk from '../../assets/img/vk.png';
import WtSearch from "../ui/WtSearch/WtSearch";

export default {
  components: {WtSearch, FeedCard, TheFilters},
  data() {

    return {
			searchIsOpen: false,

      feedCards: [
        {
          title: '26 / 647. Как в РТ МИС «вездекод» покоряли | ВКонтакте',
          link: 'vk.com›@rtmisteam-26-647-kak-v-rt-mis-vezdekod-…',
          tags: ['Карьера', 'Статья'],
          date: '28.10.2020',
          desc: 'Команду «Кубань IT» собрали наши коллеги: Паша Кривошеев, Дима Власенко, Настя Брускова и Саша Торсунов. Поздравляем коллег с успехом (26 из 647 все-таки сильно) и делимся с вами их впечатлениями! ',
          icon: vk
        },
        {
          title: 'Анастасия Брускова ВКонтакте, Россия, id124501994',
          link: 'vk-look.com›user/ksx_ampi',
          tags: ['Профиль'],
          date: '03.09.2020',
          desc: 'Биография Анастасии Брусковой, ВКонтакте. Анастасия Брускова. ... Анастасия Брускова, Россия. Родилась Анастасия 18 апреля 1996 года. ... КОММИКС | комиксы, манга, подарки в Перми Мы из Перми, но делаем доставку по всей России!',
          icon: vk
        },
        {
          title: 'Анастасия Брускова, 25 лет, Россия - Люди ВКонтакте',
          link: 'vkpeople.com›id124501994',
          tags: ['Карьера', 'Статья'],
          date: '19.08.2018',
          desc: 'Анализ профиля Анастасии Брусковой, Россия. Все подписчики и друзья Анастасии ВКонтакте, фотографии и видео пользователя, персональные настройки профиля и еще много другой полезной информации. Читать ещё',
          icon: vk
        },
      ]
    }
  },
  methods: {
    ...mapActions(['getStats'])
  },
  computed: {
    ...mapGetters(['stats', 'userInfo']),

		classList() {
			return {'content__search--hidden': !this.searchIsOpen}
		}
  },
  mounted() {
    this.getStats(this.userInfo);
  },
}
</script>

<style lang="scss" src="./TheContent.scss" scoped></style>
