<script>
  import DiceBar from '../components/DiceBar/DiceBar.vue';
  import ProgressBar from '../components/ProgressBar/ProgressBar.vue';

  export default {
    data() {
      return {
        diceCounter: 0,
        progress: {
          zombie: 0,
          wall: 0,
          car: 0,
        }
      }
    },
    components: {
      DiceBar,
      ProgressBar
    },
    methods: {
      updateCounter(n) {
        this.diceCounter += n;
      }
    }
  }
</script>

<template>
  <DiceBar :dice-counter="diceCounter" @get-counter-event="updateCounter"></DiceBar>
  <DiceBar :dice-counter="diceCounter" @get-counter-event="updateCounter"></DiceBar>
  <div>
    TestPage diceCounter: {{ diceCounter }}
  </div>
  
  <ProgressBar :progress-name="zombie" :increasing="true"></ProgressBar>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>