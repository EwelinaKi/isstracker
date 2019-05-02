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
      <!--<GmapPolyline v-if="$store.state.markers.length >= 1" :path="$store.state.markers"/>-->
      <GmapPolyline v-if="$store.state.historyMarkers.length >= 1" :path="$store.state.historyMarkers"/>
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
    ...mapState(['markers', 'historyMarkers']),
  },
  mounted() {
    this.$store.commit('update');
  },
  methods: {
    getLastMarker() {
      return this.$store.state.markers[this.$store.state.markers.length - 1];
    },
  },
};
</script>

<style>
</style>
