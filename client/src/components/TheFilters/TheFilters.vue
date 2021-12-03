<template>
  <div class="filters">
    <div class="filters__sort">
      <WtSelect :options="sortArray" title="Сортировка:" />
      <WtSelect :options="groupArray" title="Группировка:" :preselectOption="1" />
    </div>

		<div class="filters__right">
			<button class="filters__search" @click="$emit('open-search')">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.67188 0C11.9102 0 15.3437 3.43359 15.3437 7.67188C15.3437 9.50391 14.7031 11.1836 13.6328 12.5039L18.9062 17.7773C19.2188 18.0898 19.2188 18.5938 18.9062 18.9062C18.5938 19.2188 18.0898 19.2188 17.7773 18.9062L12.5039 13.6328C11.1836 14.7031 9.50391 15.3438 7.67188 15.3438C3.43359 15.3438 0 11.9102 0 7.67188C0 3.43359 3.4375 0 7.67188 0ZM7.67188 13.75C11.0273 13.75 13.75 11.0273 13.75 7.67188C13.75 4.31641 11.0273 1.59375 7.67188 1.59375C4.31641 1.59375 1.59375 4.31641 1.59375 7.67188C1.59375 11.0273 4.31641 13.75 7.67188 13.75Z" fill="#A09FA2"/>
				</svg>
			</button>
			<button class="filters-button">Фильтры</button>
		</div>

  </div>
</template>

<script>
import WtSelect from '../ui/WtSelect/WtSelect.vue';

export default {
  data() {
    return {
      sortArray: [
        {
          value: 1,
          name: 'По дате'
        },
        {
          value: 2,
          name: 'По репутации'
        }
      ],
      groupArray: [
        {
          value: 1,
          name: 'Не группировать'
        },
        {
          value: 2,
          name: 'По источникам'
        },
        {
          value: 3,
          name: 'По типу'
        },
        {
          value: 4,
          name: 'По дате'
        }
      ]
    }
  },
  components: {
    WtSelect
  },
}
</script>

<style lang="scss" src="./TheFilters.scss" scoped></style>
