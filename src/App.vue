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
  <router-link to="/mainpage">MainPage</router-link>
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
  -rendere la "mainpage" la pagina principale "/". Accedere alla "testpage" tramite "mainpage" o altro componente?
  
  Media importanza:
  -rendere leggibili i pulsanti <router-link>
  -splittare js, html e css dei componenti .vue in più file

  Bassa importanza:
  -cercare un nome migliore per la route "mainpage". "escape-of-the-dead"? Cercare naming conventions
-->