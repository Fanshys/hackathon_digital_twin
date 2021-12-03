<template>
  <button
    ref="button"
    class="main-layout-drag"
    :class="{
      'main-layout-drag--visible': mouseIsDown ,
      'main-layout-drag--no-valid': isFew || isMuch
    }"
    :style="styles"
    @mousedown="mouseIsDown = true"
    @mouseup="onMouseUp"
  />
</template>

<script>
export default {
  name: 'MainLayoutDrag',

  props: {
    // For using aside ref
    parentRefs: {
      type: Object,
      required: true,
    },

    min: {
      type: [String, Number],
      default: null,
    },

    max: {
      type: [String, Number],
      default: null,
    },
  },

  data: () => ({
    mouseIsDown: false,
    styles: {},
    currentWidth: 0,
  }),

  computed: {
    isFew() {
      return this.mouseIsDown && this.min >= this.currentWidth;
    },

    isMuch() {
      return this.mouseIsDown && this.max <= this.currentWidth;
    },
  },

  mounted() {
    this.currentWidth = this.parentRefs.aside.offsetWidth;
    document.body.addEventListener('mousemove', this.onMouseMove);
    document.body.addEventListener('mouseup', this.onMouseUp);
  },

  destroyed() {
    document.body.removeEventListener('click', this.onMouseMove);
    document.body.removeEventListener('click', this.onMouseUp);
  },

  methods: {
    onMouseUp() {
      if (!this.mouseIsDown) return;

      if (this.isFew) this.currentWidth = this.min;

      if (this.isMuch) this.currentWidth = this.max;

      this.$emit('input', this.currentWidth);

      this.mouseIsDown = false;
      this.styles = {};
    },

    onMouseMove(e) {
      if (this.mouseIsDown) {
        const containerWidth = this.parentRefs.aside.offsetWidth;
        this.currentWidth = window.innerWidth - e.clientX;

        this.styles = {
          transform: `translateX(${e.clientX - (window.innerWidth - containerWidth)}px)`,
        };
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./MainLayoutDrag.scss"></style>
