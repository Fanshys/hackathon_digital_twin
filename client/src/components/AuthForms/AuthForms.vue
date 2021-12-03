<template>
  <div class="auth-forms">
    <AuthFormsInfo class="auth-forms__info" />
    <WtTabs class="auth-forms__tabs">
      <template #tabs>
        <WtTab>Авторизация</WtTab>
        <WtTab>Регистрация</WtTab>
      </template>

      <WtTabItem>
        <LoginForm class="auth-forms__form" />
      </WtTabItem>
    </WtTabs>
  </div>
</template>

<script>
import WtTabs from '../ui/WtTabs/WtTabs';
import WtTab from '../ui/WtTabs/WtTab/WtTab';
import WtTabItem from '../ui/WtTabs/WtTabItem/WtTabItem';
import LoginForm from '../LoginForm/LoginForm';
import AuthFormsInfo from '../AuthForms/AuthFormsInfo/AuthFormsInfo';

export default {
  name: 'AuthForms',
  components: {
    AuthFormsInfo,
    LoginForm,
    WtTabItem,
    WtTab,
    WtTabs,
  },
};
</script>

<style lang="scss" scoped src="./AuthForms.scss"></style>
