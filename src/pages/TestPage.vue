<script>
  import DiceBar from '../components/DiceBar/DiceBar.vue';
  import HealthBar from '../components/HealthBar/HealthBar.vue';

  export default {
    components: {
      DiceBar,
      HealthBar
    }
  }
</script>

<template>
  <DiceBar></DiceBar>
  <DiceBar></DiceBar>
  <div>
    Out of component $diceCounter: {{  $diceCounter }}
  </div>
  <HealthBar :min-value=0 :max-value=10 :value=3 />
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>