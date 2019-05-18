<template>
  <div id="app">
    <buttonsBar/>
    <mapComp/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonsBar from './components/ButtonsBar.vue';
import Map from './components/Map.vue';

export default {
  components: {
    buttonsBar: ButtonsBar,
    mapComp: Map,
  },
  computed: {
    ...mapState(['realtime']),
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
