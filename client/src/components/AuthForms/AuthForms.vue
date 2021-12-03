<template>
  <div class="auth-forms">
    <AuthFormsInfo class="auth-forms__info" />
    <LoginForm class="auth-forms__form" />
  </div>
</template>

<script>
import LoginForm from '../LoginForm/LoginForm';
import AuthFormsInfo from '../AuthForms/AuthFormsInfo/AuthFormsInfo';

export default {
  name: 'AuthForms',
  components: {
    AuthFormsInfo,
    LoginForm,
  },
};
</script>

<style lang="scss" scoped src="./AuthForms.scss"></style>
