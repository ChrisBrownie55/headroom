import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        requiresNoAuth: true,
      },
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        requiresAuth: true,
        transitionName: 'slide',
      },
    },
    {
      path: '/call',
      name: 'call',
      component: () => import('./views/Call.vue'),
      meta: {
        requiresAuth: true,
        transitionName: 'slide',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.getters['auth/isLoggedIn'];

  if (
    to.matched.some(route => route.meta.requiresAuth)
    && !loggedIn
  ) {
    // Redirect to original destination
    // after logging in

    if (to.name !== 'login') {
      store.dispatch('auth/setRerouteTo', { name: to.name, params: to.params });
    }

    next({ name: 'login' });
  } else if (
    to.matched.some(route => route.meta.requiresNoAuth)
    && loggedIn
  ) {
    // Redirect to home if trying to log in
    // but already authenticated

    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
