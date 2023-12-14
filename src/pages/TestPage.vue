<script>
  import DiceBar from '../components/DiceBar/DiceBar.vue';
  import TestComponent from '../components/TestComponent.vue';

  export default {
    components: {
      DiceBar,
      TestComponent,
    }
  }
</script>

<template>
  <DiceBar></DiceBar>
  <TestComponent></TestComponent>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>