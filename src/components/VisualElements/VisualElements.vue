<script>
  import EnemyZone from '../EnemyZone/EnemyZone.vue';
  import WallsZone from '../WallsZone/WallsZone.vue';
  import CarZone from '../CarZone/CarZone.vue';

  export default {
    components: {
      EnemyZone,
      WallsZone,
      CarZone,
    }
  }
</script>

<template>
  <div class="visual-elements-container">
    <EnemyZone></EnemyZone>
    <WallsZone></WallsZone>
    <CarZone></CarZone>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../../scss/partials/mixins" as *;
  @use "../../../scss/partials/variables" as *;

  .visual-elements-container {
    width: 65dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
  }
</style>