import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

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
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(route => route.meta.requiresAuth)
    && !store.getters.loggedIn
  ) {
    // Redirect to original destination
    // after logging in

    if (to.name !== 'login') {
      store.dispatch('SET_REROUTE', { name: to.name, params: to.params });
    }

    next({ name: 'login' });
  } else if (
    to.matched.some(route => route.meta.requiresNoAuth)
    && store.getters.loggedIn
  ) {
    // Redirect to home if trying to log in
    // but already authenticated

    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
