<script>
  import DiceBar from '../components/DiceBar/DiceBar.vue';
  import ProgressBar from '../components/ProgressBar/ProgressBar.vue';

  export default {
    data() {
      return {
        diceCounter: 0,
        progress: {
          zombie: {
            increasing: true,
            value: 3,
          },
          wall: {
            increasing: false,
            value: 5,
          },
          car: {
            increasing: true,
            value: 2,
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
      updateProgress(e) {

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
  
  <ProgressBar progress-class="segment-zombie" :progress-value="progress.zombie.value" :max-value="10"></ProgressBar>
  <ProgressBar progress-class="segment-wall" :progress-value="progress.wall.value" :max-value="10"></ProgressBar>
  <ProgressBar progress-class="segment-car" :progress-value="progress.car.value" :max-value="10"></ProgressBar>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>