import { auth, provider } from '../../firebase';
import router from '../../router';

export const state = {
  user: undefined,
  reroute: null,
};

export const getters = {
  ready: state => state.user !== undefined,
  isLoggedIn: state => state.user instanceof Object,
};

export const mutations = {
  SET_REROUTE(state, route) {
    state.reroute = route;
  },
  SET_USER(state, user) {
    state.user = user;
  },
};

export const actions = {
  init({ commit, dispatch }) {
    auth.onAuthStateChanged(user => {
      commit('SET_USER', user);
      if (user) {
        dispatch('reroute', { name: 'home' });
      } else {
        router.push({ name: 'login' });
      }
    });
  },

  setRerouteTo({ commit }, route) {
    commit('SET_REROUTE', route);
  },
  reroute({ dispatch, state }, fallbackRoute) {
    router.push(state.reroute || fallbackRoute);
    dispatch('setRerouteTo', null);
  },

  async login({ commit, dispatch }) {
    try {
      const { user } = await auth.signInWithPopup(provider);
      commit('SET_USER', user);

      dispatch('reroute', { name: 'home' });
    } catch (error) {
      this.dispatch('notify', {
        message: 'An error occurred, please try again.',
        button: {
          text: 'Try again',
          onClick: () => dispatch('login'),
        },
      });
    }
  },
  async logout({ commit, dispatch }) {
    try {
      await auth.signOut();
      commit('SET_USER', null);
      router.push({ name: 'login' });
    } catch (error) {
      this.dispatch('notify', {
        message: 'An error occurred, please try again.',
        button: {
          text: 'Try again',
          onClick: () => dispatch('logout'),
        },
      });
    }
  },
};
