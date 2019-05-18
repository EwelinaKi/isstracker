<template>
  <div id="app">
    <buttonsBar/>
    <GmapMap
      :center="center"
      :zoom="2"
      map-type-id="terrain"
      style="min-width: 900px; height: 600px; margin: auto"
    >
      <GmapMarker :position="getLastMarker()"/>
      <GmapPolyline
        v-if="realtime"
        :path="markers"/>
      <GmapPolyline
        v-if="historyMarkers.length >= 1"
        :path="historyMarkers"/>
    </GmapMap>
  </div>
</template>

<script>
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
    ...mapState(['markers', 'historyMarkers', 'realtime']),
  },
  mounted() {
    this.$store.commit('update');
    this.$nextTick(() => {
      setInterval(() => {
        if (this.realtime) {
          this.$store.commit('update');
        }
      },
      2000);
    });
  },
  methods: {
    getLastMarker() {
      return this.markers[this.markers.length - 1];
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
