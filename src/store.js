import Vue from 'vue';
import Vuex from 'vuex';
import utils from './utils/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    markers: [],
    historyMarkers: [],
    realtime: false,
    durationInMinutes: 50,
    maxDuration: 120,
    minDuration: 10,
  },
  mutations: {
    async update(state) {
      const obj = await utils.getActualPositions();
      if (obj.lat && obj.lng) {
        state.markers.push(obj);
      }
    },
  },
  actions: {
    async getHistoryData({ dispatch }) {
      dispatch('stopRealtime');
      if (utils.validateInput(
        this.state.durationInMinutes,
        this.state.minDuration,
        this.state.maxDuration,
      )) {
        const historyMarkers = await utils.getHistoryPath(this.state.durationInMinutes);
        if (historyMarkers) {
          this.state.historyMarkers = historyMarkers;
        }
      } else {
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
