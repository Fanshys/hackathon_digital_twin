<template>
  <div class="filters">
    <WtSelect :options="sortArray" title="Сортировка:" />
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
    }
  },
  components: {
    WtSelect
  },
}
</script>

<style lang="scss" src="./TheFilters.scss" scoped></style>
