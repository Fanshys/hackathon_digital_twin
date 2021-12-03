<template>
  <div class="login-form">
    <WtForm @submit="submit">
      <WtInput
        v-model.trim="$v.formEmail.$model"
        label="Email"
      />

      <WtInput
        v-model.trim="$v.formPassword.$model"
        label="Пароль"
        type="password"
      />

      <div>
        <WtButton :loading="loginIsLoading" class="auth-forms__form-button">
          Войти
        </WtButton>
      </div>
    </WtForm>
  </div>
</template>

<script>
import WtInput from '../ui/WtInput/WtInput';
import WtForm from '../ui/WtForm/WtForm';
import WtButton from '../ui/WtButton/WtButton';
import {
  email, password,
} from '../../helpers/validation/validation';
import { mapActions } from 'vuex';

export default {
  name: 'LoginForm',

  components: {
    WtButton,
    WtForm,
    WtInput,
  },

  data: () => ({
    formEmail: '',
    formPassword: '',
  }),

  validations: {
    formEmail: email,
    formPassword: password,
  },

  methods: {
    ...mapActions(['login']),
    submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.login({
          email: this.formEmail,
          password: this.formPassword,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./LoginForm.scss"></style>
