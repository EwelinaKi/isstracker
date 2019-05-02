<template>
  <div id="app">
    <buttonsBar></buttonsBar>
    <GmapMap
      :center="center"
      :zoom="2"
      map-type-id="terrain"
      style="min-width: 900px; height: 600px; margin: auto"
    >
      <GmapMarker :position="getLastMarker()"/>
      <GmapPolyline
        v-if="$store.state.realtime"
        :path="$store.state.markers"/>
      <GmapPolyline
        v-if="$store.state.historyMarkers.length >= 1"
        :path="$store.state.historyMarkers"/>
    </GmapMap>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';
import ButtonsBar from './components/ButtonsBar.vue';

export default {
  data() {
    return {
      center: {
        lat: 0,
        lng: 0,
      },
    };
  },
  components: {
    buttonsBar: ButtonsBar,
  },
  computed: {
    ...mapState(['markers', 'historyMarkers']),
  },
  mounted() {
    this.$store.commit('update');
    this.$nextTick(function () {
      window.setInterval(() => {
        this.$store.state.realtime && this.$store.commit('update');
      },
      2000);
    });
  },
  methods: {
    getLastMarker() {
      return this.$store.state.markers[this.$store.state.markers.length - 1];
    },
  },
};
</script>

<style>
  :root {
    color: #2c3e50;
    --color-main: #42b983;
    --color-main-light: #42b98350;
    --color-light: #fff;
    --color-dark: #35495E;
    --color-dark-light: #35495E30;
    --radius: 10px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100vw;
    height: 100vh;
  }
</style>
