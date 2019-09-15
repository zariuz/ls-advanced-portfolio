<template lang="pug">
  section.navigation
      .container
        .navigation__wrap
          nav.nav
            ul.nav__list
              li.nav__child(v-for="item in navigation")
                router-link(
                  :data-text="item.title" 
                  :to="item.href"
                  exact-active-class="active"
                ).tabs__link
</template>
<script>
export default {
  data() {
    return {
      navigation: [
        { title: 'Обо мне', href: '/' },
        { title: 'Отзывы', href: '/feedback' },
        { title: 'Работы', href: '/work' }
      ]
    };
  }
};
</script>
<style lang="pcss">
@import '../../styles/mixins.pcss';
@import '../../styles/admin/navigation.pcss';

.tabs__link {
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;

  @include phones {
    width: 100px;
  }

  &:before {
    content: attr(data-text);
  }

  &:hover,
  &.active {
    color: #383bcf;
    font-weight: 600;
    border-color: currentColor;
  }
}
</style>