<template>
  <main ref="layout" class="main-layout">
		<div ref="aside" class="main-layout__aside">
			sidebar
		</div>

    <div class="main-layout__content">
      <KeepAlive>
        <RouterView />
      </KeepAlive>
    </div>
  </main>
</template>

<script>

export default {
  name: 'MainLayout',
};
</script>
<style src="./MainLayout.scss" lang="scss" scoped></style>
