<script>
  import DiceBar from '../components/DiceBar/DiceBar.vue';
  import ProgressBar from '../components/ProgressBar/ProgressBar.vue';

  export default {
    data() {
      return {
        diceCounter: 0,
        progress: {
          zombies: {
            increasing: true,
            value: 0,
            dice: 0,
          },
          wall: {
            increasing: false,
            value: 10,
            dice: 0,
          },
          car: {
            increasing: true,
            value: 0,
            dice: 0,
          },
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
      },
      addProgress(e) {

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
  
  <ProgressBar :progress-value="progress.zombies.value"></ProgressBar>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>