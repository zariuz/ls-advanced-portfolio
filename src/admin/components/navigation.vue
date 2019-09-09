<template lang="pug">
  section.navigation
      .container
        .navigation__wrap
          nav.nav
            ul.nav__list
              li.nav__child(v-for="item in navigation") {{item}}
</template>
<script>
export default {
  data() {
    return {
      navigation: ['Обо мне', 'Работы', 'Отзывы']
    };
  }
};
</script>
<style lang="pcss">
@import '../../styles/mixins.pcss';
@import '../../styles/admin/navigation.pcss';
</style>