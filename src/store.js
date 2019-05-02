import Vue from 'vue';
import Vuex from 'vuex';
import api from './utils/apiFetch';
import utils from './utils/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    markers: [],
    duration: 50,
    historyMarkers: [],
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
    async getHistoryData() {
      if (utils.validateInput(this.state.duration)) {
        this.state.historyMarkers = await utils.getHistoryPath(this.state.duration);
      } else {
        console.log('Invalid input');
      }
    },
  },
});
