<script>
  export default {
    
  };
</script>

<template>
  <div class="routing" v-if="this.$route.path === '/'">
    <router-link to="/escape-of-the-dead" class="restyled-router-link">MainPage</router-link>
    <router-link to="/testpage" class="restyled-router-link">TestPage</router-link>
    <router-link to="/testpageV2" class="restyled-router-link">TestPage V2</router-link>
  </div>

  <router-view></router-view>
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
</style>

<!--
  To do:

  Importante:
  -

  Media importanza:
  -

  Bassa importanza:
  -informarsi su :key
-->