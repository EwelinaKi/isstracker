import Vue from 'vue';
import Vuex from 'vuex';
import api from './utils/apiFetch';
import utils from './utils/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    markers: [],
    historyMarkers: [],
    realtime: false,
    duration: 50,
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
    async getHistoryData({ dispatch }) {
      dispatch('stopRealtime');
      if (utils.validateInput(this.state.duration)) {
        this.state.historyMarkers = await utils.getHistoryPath(this.state.duration);
      } else {
        // eslint-disable-next-line
        console.log('Invalid input');
      }
    },
    toggleRealTime() {
      this.state.historyMarkers = [];
      this.state.realtime = !this.state.realtime;
    },
    stopRealtime() {
      this.state.realtime = false;
    },
  },
});
