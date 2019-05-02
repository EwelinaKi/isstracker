import Vue from 'vue';
import Vuex from 'vuex';
import api from './utils/apiFetch';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    markers: [],
  },
  getters: {
    getLastMarker: state => state.markers[state.markers.length - 1],
  },
  mutations: {
    async update(state) {
      const pos = await api.getActualPos();
      const obj = {
        lat: pos.latitude,
        lng: pos.longitude,
      };
      state.markers.push(obj);
    },
  },
  actions: {
  },
});
