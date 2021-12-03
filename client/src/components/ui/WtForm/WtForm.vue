<template>
  <form class="form" @submit.prevent="$emit('submit')">
    <slot />
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" src="./WtForm.scss" scoped></style>
