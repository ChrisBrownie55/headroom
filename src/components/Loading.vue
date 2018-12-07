<template>
  <p class="loading">Loading...</p>
</template>
<script>
  export default {
    name: "loading"
  };
</script>
<style lang="scss">
  .loading {
    position: absolute;
    top: 50%;

    color: #42b983;

    transform: translateY(-50%);
  }
</style>
