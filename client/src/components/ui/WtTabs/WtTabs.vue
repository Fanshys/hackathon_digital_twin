<template>
  <div class="tabs">
    <div class="tabs__list">
      <slot name="tabs">
        <WtTab v-for="tab in tabs" :id="tab.id" :key="tab.id">
          {{ tab.name }}
        </WtTab>
      </slot>
    </div>

    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<script>
import WtTab from './WtTab/WtTab.vue';

export default {
  components: {
    WtTab,
  },

  model: {
    prop: 'activeTabId',
    event: 'tab-change',
  },

  props: {
    tabs: {
      type: Array,
      default: () => [],
    },

    activeTabId: {
      type: [String, Number],
      default: null,
    },

    active: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      activeTabIndex: this.active || 0,
    };
  },

  watch: {
    activeTabId() {
      this.selectActive();
    },

    active() {
      this.activeTabIndex = this.active;
    },
  },

  mounted() {
    if (this.activeTabId) {
      this.initVModelMode();
    } else {
      this.initIndexMode();
    }

    this.selectActive();
  },

  methods: {
    selectActive() {
      this.$children.forEach((tab) => {
        if (this.activeTabId && tab.id === this.activeTabId) {
          tab.isActive = true;
        } else tab.isActive = tab.index === this.activeTabIndex;
      });
    },

    initVModelMode() {
      this.$children.forEach((tab) => {
        if (tab.$vnode.componentOptions.tag === 'WtTab') {
          tab.$on('tab-change', ({ id }) => {
            this.$emit('tab-change', id);
          });
        }
      });
    },

    initIndexMode() {
      const tabNodes = [];
      const tabItemNodes = [];

      this.$children.forEach((tab) => {
        if (tab.$vnode.componentOptions.tag === 'WtTab') {
          tab.$on('tab-change', ({ index }) => {
            this.activeTabIndex = index;
            this.selectActive();
          });

          tabNodes.push(tab);
          tab.index = tabNodes.length - 1;
        } else if (tab.$vnode.componentOptions.tag === 'WtTabItem') {
          tabItemNodes.push(tab);
          tab.index = tabItemNodes.length - 1;
        }
      });
    },
  },
};
</script>

<style lang="scss" src="./WtTabs.scss" scoped></style>
