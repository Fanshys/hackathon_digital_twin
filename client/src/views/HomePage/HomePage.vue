<template>
  <div class="main-layout">
		<div class="main-layout__sidebar"><TheSidebar/></div>
		<div class="main-layout__content">
			<TheContent />
		</div>
		<div class="main-layout__detail-content">detail</div>
  </div>
</template>

<script>
import TheSidebar from "../../components/TheSidebar/TheSidebar";
import TheContent from "../../components/TheContent/TheContent";

export default {
  name: 'HomePage',
	components: {TheSidebar, TheContent},
};
</script>

<style src="./HomePage.scss" lang="scss" scoped></style>
