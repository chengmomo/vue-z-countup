<template>
  <div id="app">
    <h2>
      <vue-count-up :end="300" :decimals="2"></vue-count-up>
    </h2>
  </div>
</template>

<script>
  import VueCountUp from "./lib/vue-count-up";

  export default {
    name: 'app',
    components: {VueCountUp},
    data() {
      return {}
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
