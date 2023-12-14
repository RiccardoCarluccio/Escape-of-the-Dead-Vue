<script>
  import MainPage from './pages/MainPage.vue';
  import TestPage from './pages/TestPage.vue';

  export default {
    components: {
      MainPage,
      TestPage,
    },
  };
</script>

<template>
  <router-link to="/escape-of-the-dead" class="restyled-router-link">MainPage</router-link>
  <router-link to="/testpage" class="restyled-router-link">TestPage</router-link>

  <router-view></router-view>
</template>

<style lang="scss">
  @use "../scss/partials/mixins" as *;
  @use "../scss/partials/variables" as *;

  .restyled-router-link {
    text-decoration: none;
    color: white;
  }
</style>

<!--
  To do:

  Importante:
  -rendere "/escape-of-the-dead" la main page. Accedere alla "testpage" tramite "/escape-of-the-dead" o altro componente
  
  Media importanza:

  Bassa importanza:
-->