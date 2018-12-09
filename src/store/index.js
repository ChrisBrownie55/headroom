import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

let notificationID = 0;

const store = new Vuex.Store({
  modules,
  mutations: {
    ADD_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    },
    REMOVE_NOTIFICATION(state, id) {
      state.notifications = state.notifications.filter(notification => notification.id !== id);
    },
  },
  actions: {
    notify({ commit }, notification) {
      const id = notificationID++;
      commit('ADD_NOTIFICATION', {
        ...notification,
        remove: () => commit('REMOVE_NOTIFICATION', id),
        id,
      });
    },
  },
});

// Automatically run the `init` action for every module,
// if one exists.
Object.keys(modules).forEach(moduleName => {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`);
  }
});

export default store;
