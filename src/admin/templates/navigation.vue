<template lang="pug">
  section.navigation
      .container
        .navigation__wrap
          nav.nav
            ul.nav__list
              li.nav__child.nav__child_active Обо мне
              li.nav__child Работы
              li.nav__child Отзывы
</template>
<style lang="pcss">
@import '../../styles/mixins.pcss';
.navigation {
  color: $black-color;
  &__wrap {
    @include tablets {
      width: 85%;
      margin: 0 auto;
    }
  }
}
</style>