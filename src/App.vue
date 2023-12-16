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
  <div class="restyled-router-link">questi due pulsanti li tolgo da quì tranquillo france. non ci saranno problemi di viewport</div>

  <router-view></router-view>
</template>

<style lang="scss">
  @use "../scss/partials/mixins" as *;
  @use "../scss/partials/variables" as *;

  .restyled-router-link {
    display: inline-block;
    text-decoration: none;
    color: white;
  }
</style>

<!--
  To do:

  Importante:
  -$diceCounter deve essere la stessa per tutti i componenti. Al momento ogni componente ha la sua $diceCounter 
  -rendere "/escape-of-the-dead" la main page. Accedere alla "testpage" tramite "/escape-of-the-dead" o altro componente

  Media importanza:

  Bassa importanza:
-->