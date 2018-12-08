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
  async login({ commit, dispatch, rootDispatch }) {
    try {
      const { user } = await auth.signInWithPopup(provider);
      commit('SET_USER', user);
    } catch (error) {
      rootDispatch('notify', {
        message: 'An error occurred, please try again.',
        button: {
          text: 'Try again',
          onClick: () => dispatch('login'),
        },
      });
    }
  },
  async logout({ commit, dispatch, rootDispatch }) {
    try {
      await auth.signOut();
      commit('SET_USER', null);
    } catch (error) {
      rootDispatch('notify', {
        message: 'An error occurred, please try again.',
        button: {
          text: 'Try again',
          onClick: () => dispatch('logout'),
        },
      });
    }
  },
};
