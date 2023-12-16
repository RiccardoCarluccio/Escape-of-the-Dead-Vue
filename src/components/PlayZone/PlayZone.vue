<script>
  import DiceBar from '../DiceBar/DiceBar.vue';

  export default {
    components: {
      DiceBar,
    }
  }
</script>

<template>
  <div class="play-zone-container">
    
  </div>
</template>

<style lang="scss" scoped>
  @use "../../../scss/partials/mixins" as *;
  @use "../../../scss/partials/variables" as *;

  .play-zone-container {
    width: 35dvw;
    height: 100dvh;
  }
</style>