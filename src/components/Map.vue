<template>
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
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'mapComp',
  data() {
    return {
      center: {
        lat: 0,
        lng: 0,
      },
    };
  },
  computed: {
    ...mapState(['markers', 'historyMarkers', 'realtime']),
  },
  methods: {
    getLastMarker() {
      return this.markers[this.markers.length - 1];
    },
  },
};
</script>
