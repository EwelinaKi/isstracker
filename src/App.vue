<template>
  <div id="app">
    <div id="nav"></div>
    <GmapMap
      :center="center"
      :zoom="2"
      map-type-id="terrain"
      style="min-width: 900px; height: 600px; margin: auto"
    >
      <GmapMarker
        :position="getLastMarker"
      />
    </GmapMap>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      center: {
        lat: 0,
        lng: 0,
      },
    };
  },
  computed: {
    ...mapGetters(['getLastMarker']),
  },
  mounted() {
    this.$store.commit('update');
  },
};

</script>

<style>
</style>
