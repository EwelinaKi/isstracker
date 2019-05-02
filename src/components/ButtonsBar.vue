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

<style>
  body {
    margin: 0;
  }

  #nav {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }

  #nav, .buttons {
    flex-wrap: wrap;
  }

  .buttons {
    max-width: 640px;
    margin: auto;
  }

  .buttons, .history {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .buttons>div {
    width: 300px;
    flex-wrap: nowrap;
    margin: 10px auto;
  }

  .input {
    width: 120px;
  }

  input {
    width: 50px ;
    height: 33px;
    text-align: center;
    border: none;
  }

  button, input {
    background-color: var(--color-light);
    border-radius: var(--radius);
    font-size: medium;
  }

  button {
    color: var(--color-main) ;
    border: solid 2px var(--color-main);
    width: 120px;
    height: 40px;
    margin: 10px;
  }

  button:hover {
    color: var(--color-light) !important;
    background-color:  var(--color-main) ;
  }

  button:active {
    background-color: var(--color-dark);
    border-color: var(--color-dark);
  }

  button:focus, input:focus {
    outline:none;
  }

  h1, .buttons {
    align-self: center;
  }

  h1 {
    max-width: 300px;
    height: 60px;
    text-align: center;
    margin: auto;
    line-height: 60px;
  }

  h1 span {
    color: var(--color-main);
    font-weight: bolder;
  }

  .history {
    border: 1px solid var(--color-dark-light);
    border-radius: var(--radius);
  }
</style>
