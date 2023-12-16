<script>
  import DiceBar from '../components/DiceBar/DiceBar.vue';
  import HealthBar from '../components/HealthBar/HealthBar.vue';

  export default {
    data() {
      return {
        diceCounter: 0,
      }
    },
    components: {
      DiceBar,
      HealthBar
    }
  }
</script>

<template>
  <DiceBar :dice-counter="diceCounter"></DiceBar>
  <DiceBar :dice-counter="diceCounter"></DiceBar>
  <div>
    Out of component diceCounter: {{ diceCounter }}
  </div>
  <HealthBar :min-value=0 :max-value=10 :value=3 />
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>