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
  <div class="main-test-page-container">
    <div class="dice-bar-component-container">
      smart
      <DiceBar :dice-counter="diceCounter" @get-counter-event="updateCounter"></DiceBar>
      <DiceBar :dice-counter="diceCounter" @get-counter-event="updateCounter"></DiceBar>
      <DiceBar :dice-counter="diceCounter" @get-counter-event="updateCounter"></DiceBar>
      <div>
        TestPage diceCounter: {{ diceCounter }}
      </div>
    </div>

    <div class="progress-bar-component-container">
      <ProgressBar progress-class="segment-zombie" :progress-value="progress.zombie.value" :max-value="10"></ProgressBar>
      <ProgressBar progress-class="segment-wall" :progress-value="progress.wall.value" :max-value="10"></ProgressBar>
      <ProgressBar progress-class="segment-car" :progress-value="progress.car.value" :max-value="10"></ProgressBar>
    </div>

    <div class="dumb-dice-bar-component-container">
      <div class="dumb-dice-bar-container">
        dumb
        <DumbDiceBar :dice-counter="diceCounter" :dice-number="dice.zombie"></DumbDiceBar>
        <DumbDiceBar :dice-counter="diceCounter" :dice-number="dice.wall"></DumbDiceBar>
        <DumbDiceBar :dice-counter="diceCounter" :dice-number="dice.car"></DumbDiceBar>
      </div>
    </div>

    <div class="end-turn-button" v-if="diceCounter === 4" @click="endTurn">Next Phase</div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .end-turn-button {
    background-color: $button-next-phase;
    width: 160px;
    height: 60px;
    @include flex-center-center;
    font-size: 1.5rem;
  }

  .main-test-page-container {
    padding: 2rem;
    display: flex;
    gap: 2rem;
  }
</style>