<template>
  <p class="loading">Loading...</p>
</template>

<script>
  export default {
    name: 'loading',
  };
</script>

<style lang="scss" scoped>
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;

    padding: 0.15rem 0.45rem;
    margin: 0;

    color: white;
    background-color: hsl(153, 47%, 49%);

    border-radius: 4px;

    transform: translate(-50%, -50%);
  }
</style>
