<template>
  <div id="app">
    <div id="nav"></div>
    <GmapMap
      :center="center"
      :zoom="2"
      map-type-id="terrain"
      style="min-width: 900px; height: 600px; margin: auto"
    >
    </GmapMap>
  </div>
</template>


<script>

export default {
  data() {
    return {
      center: {
        lat: 0,
        lng: 0,
      },
    };
  },
};

</script>

<style>
</style>
