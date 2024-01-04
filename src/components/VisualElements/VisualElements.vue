<script>
  import EnemyZone from '../EnemyZone/EnemyZone.vue';
  import WallZone from '../WallZone/WallZone.vue';
  import CarZone from '../CarZone/CarZone.vue';

  export default {
    components: {
      EnemyZone,
      WallZone,
      CarZone,
    }
  }
</script>

<template>
  <div class="visual-elements-container">
    <EnemyZone></EnemyZone>
    <WallZone></WallZone>
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