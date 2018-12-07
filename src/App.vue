<template>
  <div id="app">
    <transition
      :name="transitionName"
      mode="out-in"
    >
      <loading v-if="!ready" />
      <router-view v-else />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loading from '@/components/Loading.vue';

const DEFAULT_TRANSITION = 'fade';

export default {
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.split('/').length;
        const fromDepth = to.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  },
  computed: {
    ...mapGetters(['ready']),
  },
  components: {
    Loading,
  },
};
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  #app {
    position: relative;

    min-height: 100vh;

    color: #2c3e50;

    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
