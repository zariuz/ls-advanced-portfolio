<template lang="pug">
  .wrap
    app-header
    app-navigation
    main.main
      app-about
      app-work
      app-feedback
    app-login
</template>

<script>
export default {
  components: {
    appInput: () => import('./components/input'),
    appHeader: () => import('./components/header'),
    appNavigation: () => import('./components/navigation'),
    appLogin: () => import('./components/pages/login'),
    appFeedback: () => import('./components/pages/feedback'),
    appWork: () => import('./components/pages/work'),
    appAbout: () => import('./components/pages/about')
  }
};
</script>


<style lang="pcss">
/* base style */
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import 'normalize.css';
@import '../styles/mixins.pcss';
@import '../styles/layout/base.pcss';
/* admin style */
@import '../styles/admin/different.pcss';
/* @import '../styles/admin/about.pcss'; */
/* @import '../styles/admin/work.pcss'; */
/* @import '../styles/admin/feedback.pcss'; */
@import '../styles/admin/skills.pcss';
/* @import '../styles/admin/login.pcss'; */
</style>
