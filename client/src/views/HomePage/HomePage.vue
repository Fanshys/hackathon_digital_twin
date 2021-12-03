<template>
  <div class="auth-page" :style="{ 'background-image': `url(${background})` }">
    <div class="auth-page__background" />
    <AuthForms class="auth-page__forms" />
    <img :src="skeleton" alt="webtester" class="auth-page__img">
  </div>
</template>

<script>
import AuthForms from '../../components/AuthForms/AuthForms';
import background from '../../assets/img/auth-bg.svg';
import skeleton from '../../assets/img/skeleton.svg';

export default {
  name: 'AuthPage',
  components: { AuthForms },
  data: () => ({ background, skeleton }),
};
</script>

<style src="HomePage.scss" lang="scss" scoped></style>
