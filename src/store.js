import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
  },
  getters: {
    ready: state => state.user !== undefined,
    isLoggedIn: state => !!state.user,
  },
  mutations: {

  },
  actions: {

  },
});
