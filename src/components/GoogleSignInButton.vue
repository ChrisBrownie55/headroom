<template>
  <button
    class="google-sign-in-button"
    v-attr="$attrs"
    v-on="$listeners"
  >
    <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google logo"
    />
    <span>Sign In With Google</span>
  </button>
</template>

<script>
  export default {
    name: 'google-sign-in-button',
  }
</script>

<style lang="scss" scoped>
  .google-sign-in-button {
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 220px;
    height: auto;
    min-height: 40px;
    padding: 8px 16px;

    background-color: hsl(265, 100%, 97.5%) !important;

    font-weight: 500;
    line-height: normal;
    text-align: left;

    border: none;
    border-radius: 4px;

    cursor: pointer;
    direction: ltr;
  }

  .google-sign-in-button > img {
    display: inline-block;
    vertical-align: middle;

    width: 22px;
    height: 22px;
    padding: 4px;

    background-color: hsla(0, 0%, 100%, 0.85);

    border: none;
    border-radius: 50%;
  }

  .google-sign-in-button > span {
    display: table-cell;
    vertical-align: middle;

    padding-left: 14px;

    color: hsl(265, 100%, 20%);

    font-size: 14px;
    font-weight: 500;
    text-transform: none;
  }
</style>
