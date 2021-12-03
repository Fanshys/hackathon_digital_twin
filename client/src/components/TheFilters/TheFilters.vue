<template>
  <div class="filters">
    <div class="filters__sort">
      <WtSelect :options="sortArray" title="Сортировка:" />
      <WtSelect :options="groupArray" title="Группировка:" :preselectOption="1" />
    </div>

    <button class="filters-button">Фильтры</button>
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
