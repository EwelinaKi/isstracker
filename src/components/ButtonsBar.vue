<template>
  <div id="nav">
    <h1><span>ISS</span>TRACKER</h1>
    <div class="buttons">
      <div>
        <button>Click</button>
      </div>
      <div class="history">
        <div class="input">
          <input type="number" min="10" max="120"  v-model="$store.state.duration"/>min
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
