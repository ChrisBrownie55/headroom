import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
    reroute: null,
  },
  getters: {
    ready: state => state.user !== undefined,
    isLoggedIn: state => !!state.user,
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    SET_REROUTE(state, route) {
      state.reroute = route;
    },
  },
  /* eslint-enable no-param-reassign */
  actions: {
    setRerouteTo({ commit }, route) {
      commit('SET_REROUTE', route);
    },
    login({ commit, dispatch }) {

    },
  },
});
