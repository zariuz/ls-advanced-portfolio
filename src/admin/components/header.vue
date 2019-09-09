<template lang="pug">
  .header
      .container
        .header__wrap
          .header__info
            .header__user
              .header__avatar
                img(src="../../images/content/me.jpg").avatar
              .header__username
                span.username Евгений Нечетов
            span.header__subtitle Панель администрирования
          a(href="#").header__exit Выйти
</template>
<style lang="pcss">
@import '../../styles/mixins.pcss';
@import '../../styles/admin/header.pcss';
</style>