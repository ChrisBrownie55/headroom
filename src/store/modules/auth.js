import { auth, provider } from '../../firebase';

export const state = {
  user: undefined,
  reroute: null,
};

export const getters = {
  ready: state => state.user !== undefined,
  isLoggedIn: state => !!state.user,
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
  setRerouteTo({ commit }, route) {
    commit('SET_REROUTE', route);
  },
  notify({ commit }, notification) {

  },
  async login({ commit, dispatch }) {
    try {
      const { user } = await auth.signInWithPopup(provider);
      commit('SET_USER', user);
    } catch (error) {
      dispatch('notify', {
        message: 'An error occurred, please try again.',
        button: {
          text: 'Try again',
          onClick: () => dispatch('logout'),
        },
      });
    }
  },
  async logout({ commit, dispatch }) {
    try {
      await auth.signOut();
      commit('SET_USER', null);
    } catch (error) {
      dispatch('notify', {
        message: 'An error occurred, please try again.',
        button: {
          text: 'Try again',
          onClick: () => dispatch('logout'),
        },
      });
    }
  },
};
