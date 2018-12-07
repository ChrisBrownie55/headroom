<template>
  <div id="app">
    <loading v-if="!ready" />
    <router-view v-else />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Loading from './components/Loading.vue';

  export default {
    computed: {
      ...mapGetters(['ready']),
    },
    components: {
      Loading,
    },
  };
</script>

<style lang="scss">
  #app {
    --vue-green: #42b983;

    color: #2c3e50;

    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
