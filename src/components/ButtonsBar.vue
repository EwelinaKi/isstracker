<template>
  <div id="nav">
    <h1><span>ISS</span>TRACKER</h1>
    <div class="buttons">
      <div>
        <button @click="$store.dispatch('toggleRealTime')">
          {{$store.state.realtime ? "Stop" : "Start"}}
        </button>
      </div>
      <div class="history">
        <div class="input">
          <input type="number"
                 :min=$store.state.minDuration
                 :max=$store.state.maxDuration
                 v-model="$store.state.duration"/>min
        </div>
        <button @click="$store.dispatch('getHistoryData')">History</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttonsBar',
  props: [],
  methods: {
  },
};
</script>

<style scoped>
</style>
