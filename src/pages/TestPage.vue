<script>
  import DiceBar from '../components/DiceBar/DiceBar.vue';

  export default {
    components: {
      DiceBar,
    }
  }
</script>

<template>
  <DiceBar></DiceBar>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>