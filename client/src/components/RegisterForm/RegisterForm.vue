<template>
  <div class="register-form">
    <WtForm @submit="submit">
      <WtInput
        v-model.trim="$v.formName.$model"
        :error="nameError"
        label="Имя"
      />

      <WtInput
        v-model.trim="$v.formEmail.$model"
        :error="emailError"
        label="Email"
      />

      <WtInput
        v-model.trim="$v.formPassword.$model"
        :error="passwordError"
        type="password"
        label="Пароль"
      />

      <div>
        <WtButton :loading="registerIsLoading" class="auth-forms__form-button">
          Зарегистрироваться
        </WtButton>
      </div>
    </WtForm>
  </div>
</template>

<script>
import WtInput from '../ui/WtInput/WtInput';
import WtForm from '../ui/WtForm/WtForm';
import WtButton from '../ui/WtButton/WtButton';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { email, name, password } from '../../helpers/validation/validation';

export default {
  name: 'RegisterForm',

  components: {
    WtButton,
    WtForm,
    WtInput,
  },

  data: () => ({
    formName: '',
    formEmail: '',
    formPassword: '',
  }),

  validations: {
    formName: name,
    formEmail: email,
    formPassword: password,
  },

  computed: {
    ...mapGetters('auth', ['registerErrors', 'registerIsLoading']),

    emailError() {
      if (this.registerErrors.email && this.registerErrors.email[0]) {
        return this.registerErrors.email[0];
      }

      return this.$validationError(this.$v.formEmail, 'email');
    },

    nameError() {
      if (this.registerErrors.name && this.registerErrors.name[0]) {
        return this.registerErrors.name[0];
      }

      return this.$validationError(this.$v.formName, 'name');
    },

    passwordError() {
      if (this.registerErrors.password && this.registerErrors.password[0]) {
        return this.registerErrors.password[0];
      }

      return this.$validationError(this.$v.formPassword, 'password');
    },
  },

  methods: {
    ...mapActions('auth', ['register']),
    ...mapMutations('auth', ['clearRegisterErrors']),

    submit() {
      this.clearRegisterErrors();
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.register({
          name: this.formName,
          email: this.formEmail,
          password: this.formPassword,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./RegisterForm.scss"></style>
