<template>
  <component :is="tag" :style="imgStyles" :to="link ? link : false" class="avatar">
    <div v-if="initials" class="avatar__initials">
      {{ initials }}
    </div>
    <img
      v-if="img"
      :style="imgStyles"
      class="avatar__img"
      :src="img"
      :alt="alt"
    >
  </component>
</template>

<script>
export default {
  name: 'WtAvatar',
  props: {
    img: {
      type: String,
      default: null,
    },

    alt: {
      type: String,
      default: null,
    },

    width: {
      type: [String, Number],
      default: 47,
    },

    height: {
      type: [String, Number],
      default: 47,
    },

    link: {
      type: String,
      default: null,
    },

    name: {
      type: String,
      default: null,
    },
  },

  computed: {
    imgStyles() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },

    tag() {
      return this.link ? 'RouterLink' : 'div';
    },

    initials() {
      if (this.name) {
        const names = this.name.split(' ');
        if (names.length === 1) return names[0][0].toUpperCase();

        const [firstName, secondName] = names;
        return `${firstName[0]}${secondName[0]}`;
      }

      return null;
    },
  },
};
</script>

<style scoped lang="scss" src="./WtAvatar.scss"></style>
