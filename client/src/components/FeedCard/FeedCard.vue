<template>
  <article class="feed-card">
    <div class="feed-card__left">
      <img class="feed-card__icon" v-if="icon" :src="icon" alt="icon">
    </div>
    <div class="feed-card__right">
      <div class="feed-card__header">
        <div class="feed-card__header-text">
          <p class="feed-card__header-title">{{title}}</p>
          <a v-if="link" target="_blank" :href="link" class="feed-card__header-link">{{link.substr(0, 60)}}</a>
        </div>
        <div class="feed-card__header-tags">
          <span v-for="tag of tags" :key="tag" class="feed-card__header-tag">
            {{tag}}
          </span>
        </div>
        <div class="feed-card-popover">
          <wt-dropdown right>
            <button class="feed-card-popover__open">
              <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14C0 12.9 0.9 12 2 12ZM2 10C0.9 10 0 9.1 0 8C0 6.9 0.9 6 2 6C3.1 6 4 6.9 4 8C4 9.1 3.1 10 2 10ZM2 4C0.9 4 0 3.1 0 2C0 0.9 0.9 0 2 0C3.1 0 4 0.9 4 2C4 3.1 3.1 4 2 4Z" fill="#99A2AD"/>
              </svg>
            </button>

            <template v-slot:content>
              <div class="feed-card-popover__content">
                <button class="feed-card-popover__button">Пожаловаться</button>
                <button class="feed-card-popover__button">Информация о сайта</button>
              </div>
            </template>
          </wt-dropdown>
        </div>
      </div>
      <div class="feed-card__desc">
        <span v-if="date" class="feed-card__date">
          {{date}} -
        </span>
        <span v-html="desc"></span>
      </div>
    </div>
  </article>
</template>

<script>
import WtDropdown from '../ui/WtDropdown/WtDropdown.vue';

export default {
  components: {
    WtDropdown
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: () => []
    },
    desc: {
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

<style lang="scss" src="./FeedCard.scss" scoped></style>
