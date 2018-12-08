<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <GoogleSignInButton @click="login" />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import GoogleSignInButton from '@/components/GoogleSignInButton.vue';

  export default {
    name: 'login',
    methods: {
      ...mapActions('auth', ['login']),
    },
    components: {
      GoogleSignInButton
    },
  };
</script>
