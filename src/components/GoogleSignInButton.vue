<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    :class="['google-sign-in-button', $attrs.class]"
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
  @import "../scss/colors.scss";

  // Regular styles
  .google-sign-in-button {
    display: flex;
    align-items: center;

    height: auto;
    padding: 8px 16px;

    background-color: hsl(hue($primary), saturation($primary) + 10, 94);

    line-height: normal;
    text-align: left;

    border: none;
    border-radius: 4px;

    cursor: pointer;
    direction: ltr;

    transition: background-color 0.2s;
  }

  .google-sign-in-button > img {
    display: inline-block;
    vertical-align: middle;

    width: 14px;
    height: 14px;
    padding: 4px;

    background-color: hsl(hue($primary), saturation($primary) + 10, 85);

    border: none;
    border-radius: 50%;

    transition: background-color 0.2s;
  }

  .google-sign-in-button > span {
    display: table-cell;
    vertical-align: middle;

    padding-left: 14px;

    color: hsl(hue($primary), saturation($primary), 20);

    font-size: 14px;
    font-weight: 600;
    text-transform: none;
  }

  // Hover styles
  .google-sign-in-button:hover {
    background-color: hsl(hue($primary), saturation($primary) + 10, 85);
  }

  .google-sign-in-button:hover > img {
    background-color: hsl(hue($primary), saturation($primary) + 10, 78);
  }
</style>
