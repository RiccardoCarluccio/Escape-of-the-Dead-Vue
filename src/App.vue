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
  <router-link to="/escape-of-the-dead">MainPage</router-link>
  <router-link to="/testpage">TestPage</router-link>

  <router-view></router-view>
</template>

<style lang="scss">
  @use "../scss/partials/mixins" as *;
  @use "../scss/partials/variables" as *;
</style>

<!--
  To do:

  Importante:
  -rendere "/mainpage" > "/". Accedere alla "testpage" tramite "/" o altro componente?
  
  Media importanza:
  -rendere leggibili i pulsanti <router-link>

  Bassa importanza:
-->