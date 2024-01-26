<script>
  export default {
    
  };
</script>

<template>
  <div class="routing" v-if="this.$route.path === '/'">
    <router-link to="/escape-of-the-dead" class="restyled-router-link">Start Game</router-link>
    <router-link to="/testpage" class="restyled-router-link">TestPage</router-link>
    <router-link to="/testpageV2" class="restyled-router-link">TestPage V2</router-link>
  </div>

  <div class="giga-container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @use "../scss/partials/mixins" as *;
  @use "../scss/partials/variables" as *;

  .routing {
    display: flex;
    gap: 2rem;
  }

  .restyled-router-link {
    text-decoration: none;
  }

  .giga-container {
    display: flex;
    justify-content: center;
  }
</style>

<!--
  To do:

  Importante:
  -menu dropdown per le rules
  -testo di indicazione fase del turno in basso a sinistra
  
  Media importanza:
  -Eliminare le 3 <...Zone> ed eventualmente ri-settarne le proporzioni

  Bassa importanza:
  -informarsi su :key
-->