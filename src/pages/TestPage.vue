<script>
  import DiceBar from '../components/DiceBar/DiceBar.vue';
  import ProgressBar from '../components/ProgressBar/ProgressBar.vue';
  import DumbDiceBar from '../components/DumbDiceBar/DumbDiceBar.vue';

  export default {
    data() {
      return {
        diceCounter: 0,
        dice: {
          zombie: 0,
          wall: 0,
          car: 0,
        },
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
      ProgressBar,
      DumbDiceBar,
    },
    methods: {
      updateCounter(n) {
        this.diceCounter += n;
      },
      endTurn() {

      },
      updateProgress(e) {

      }
    }
  }
</script>

<template>
  <DiceBar :dice-counter="diceCounter" @get-counter-event="updateCounter"></DiceBar>
  <DiceBar :dice-counter="diceCounter" @get-counter-event="updateCounter"></DiceBar>
  <DiceBar :dice-counter="diceCounter" @get-counter-event="updateCounter"></DiceBar>
  <div>
    TestPage diceCounter: {{ diceCounter }}
  </div>
  
  <ProgressBar progress-class="segment-zombie" :progress-value="progress.zombie.value" :max-value="10"></ProgressBar>
  <ProgressBar progress-class="segment-wall" :progress-value="progress.wall.value" :max-value="10"></ProgressBar>
  <ProgressBar progress-class="segment-car" :progress-value="progress.car.value" :max-value="10"></ProgressBar>

  <div class="dumb-dice-bar-container">
    <DumbDiceBar :dice-number="dice.zombie"></DumbDiceBar>
    <DumbDiceBar :dice-number="dice.wall"></DumbDiceBar>
    <DumbDiceBar :dice-number="dice.car"></DumbDiceBar>
  </div>

  <div class="end-turn-button" v-if="diceCounter === 4" @click="endTurn">Next Phase</div>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .end-turn-button {
    background-color: $button-next-phase;
    width: 80px;
    height: 30px;
    @include flex-center-center;
  }
</style>