<template>
	<li class="left-menu-item"><RouterLink to="#"><slot /></RouterLink></li>
</template>

<script>
export default {
	name: "LeftMenuItem"
}
</script>

<style scoped lang="scss" src="./LeftMenuItem.scss"></style>
