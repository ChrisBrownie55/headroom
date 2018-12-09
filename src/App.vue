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
          const toDepth = to.path.split('/').length;
          const fromDepth = to.path.split('/').length;
          transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }

        this.transitionName = transitionName || DEFAULT_TRANSITION;

        next();
      });
    },
    computed: {
      ...mapGetters('auth', ['ready']),
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
    // --secondary-dark: #8d8d8d; not planning on using this color.

    position: relative;

    min-height: 100vh;

    color: #2c3e50;

    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    overflow-x: hidden;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
  }
</style>
