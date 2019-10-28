export default [
  {
    path: '/',
    component: () => import('./../components/pages/about.vue'),
    meta: {
      title: 'Блок «Обо мне»'
    }
  },
  {
    path: '/work',
    component: () => import('./../components/pages/work.vue'),
    meta: {
      title: 'Блок «Работы»'
    }
  },
  {
    path: '/feedback',
    component: () => import('./../components/pages/feedback.vue'),
    meta: {
      title: 'Блок «Отзывы»'
    }
  },
  {
    path: '/login',
    component: () => import('./../components/pages/login.vue'),
    meta: {
      public: true
    }
  }
];
