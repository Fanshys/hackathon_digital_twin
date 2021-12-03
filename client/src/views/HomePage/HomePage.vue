<template>
  <div class="main-layout">
		<div class="main-layout__sidebar"><TheSidebar/></div>
		<div class="main-layout__content">content</div>
		<div class="main-layout__detail-content">detail</div>
  </div>
</template>

<script>
import TheSidebar from "../../components/TheSidebar/TheSidebar";
export default {
  name: 'HomePage',
	components: {TheSidebar},
};
</script>

<style src="./HomePage.scss" lang="scss" scoped></style>
