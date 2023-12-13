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
  -non far esistere più pagine contemporaneamente
  
  Media importanza:
  -rendere leggibili i pulsanti <router-link>
  -splittare js, html e css dei componenti .vue in più file
-->