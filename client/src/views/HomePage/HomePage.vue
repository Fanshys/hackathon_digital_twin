<template>
  <div class="main-layout">
		<div class="main-layout__sidebar"><TheSidebar/></div>
		<div class="main-layout__content">
			<TheContent />
		</div>
		<div class="main-layout__detail-content"><ResourceDetail /></div>
  </div>
</template>

<script>
import TheSidebar from "../../components/TheSidebar/TheSidebar";
import TheContent from "../../components/TheContent/TheContent";
import ResourceDetail from "../../components/ResourceDetail/ResourceDetail";

export default {
  name: 'HomePage',
	components: {ResourceDetail, TheSidebar, TheContent},
};
</script>

<style src="./HomePage.scss" lang="scss" scoped></style>
