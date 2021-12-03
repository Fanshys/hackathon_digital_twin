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
import {mapGetters} from 'vuex';

export default {
  name: 'AuthPage',
  components: { AuthForms },
  computed: {
    ...mapGetters(['isAuth']),
  },
  data: () => ({ background, skeleton }),
  mounted() {
    if (this.isAuth) {
      this.$router.push('/home');
    }
  },
};
</script>

<style src="./AuthPage.scss" lang="scss" scoped></style>
