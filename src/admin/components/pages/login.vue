<template lang="pug">
  .overlay
      .login
        .login__wrap
          .login__close
            button.close
          h1.login__title Авторизация
          .login__form
            form.form(@submit.prevent="sendForm")
              app-input(
                title="Логин"
                icon="login"
                type="text"
                v-model="user.name"
              )         
              app-input(
                title="Пароль"
                icon="password"
                type="password"
                v-model="user.password"
              )
              .login__btn
                input.btn.btn__login(
                  type='submit'
                )
</template>
<script>
import { Validator } from 'simple-vue-validator';
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';
export default {
  validators: {
    'user.name': value => {
      return Validator.value(value).required();
    },
    'user.password': value => {
      return Validator.value(value).required();
    }
  },
  data() {
    return {
      user: {
        name: '',
        password: ''
      }
    };
  },
  methods: {
    async sendForm() {
      const success = await this.$validate();
      console.log('success', success);
      if (success) {
        // send form
      }
    }
  },
  components: {
    appInput: () => import('./../../components/input')
  }
};
</script>
<style lang="pcss">
@import '../../../styles/mixins.pcss';
@import '../../../styles/admin/login.pcss';
</style>