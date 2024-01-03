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
            value: 0,
            increment: -1,
            threshold: 3,
          },
          wall: {
            value: 10,
            increment: 1,
            threshold: 3,
          },
          car: {
            value: 0,
            increment: 1,
            threshold: 5,
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
      updateCounter(n) {            //per la smart DiceBar
        this.diceCounter += n;
      },
      addDice(el) {
        if(this.diceCounter >= 4) return;
        this.dice[el]++;
        this.diceCounter++;
      },
      removeDice(el) {
        if(this.diceCounter === 0) return;
        this.dice[el]--;
        this.diceCounter--;
      },
      endTurn() {
        this.diceRoll();
        this.resetInput();
        //this.checkProgress();
        this.zombieAttack();
        this.spawnZombie();
        console.log(this.progress.zombie.value, this.progress.wall.value, this.progress.car.value);
      },
      diceRoll() {
        for(const el in this.dice) {
          for(let i = this.dice[el]; i >= 1; i--) {
            const result = Math.floor(Math.random() * 6 + 1);
            console.log(el, result);
            if(result >= this.progress[el].threshold) {
              if((this.progress[el].value + this.progress[el].increment <= 10) && (this.progress[el].value + this.progress[el].increment >= 0)) {
                this.progress[el].value += this.progress[el].increment;
              }
            }
          }
        }
      },
      // updateProgress(n) {
      //   if(n >= this.progress[el].threshold) {
      //     if((this.progress[el].value + this.progress[el].increment <= 10) && (this.progress[el].value + this.progress[el].increment >= 0)) {
      //       this.progress[el].value += this.progress[el].increment;
      //     }
      //   }
      // },
      resetInput() {
        this.dice = {zombie: 0, wall: 0, car: 0};
        this.diceCounter = 0;
      },
      checkProgress() {

      },
      spawnZombie() {
        if((this.progress.car.value >= 0) && (this.progress.car.value <= 3)) { 
          if(this.progress.zombie.value + 1 <= 10) {
            this.progress.zombie.value++;
          }
        }
        else if((this.progress.car.value >= 4) && (this.progress.car.value <= 6)) {
          if(this.progress.zombie.value + 2 <= 10) {
            this.progress.zombie.value += 2;
          } else {
            this.progress.zombie.value = 10;
          }
        }
        else if((this.progress.car.value >= 7) && (this.progress.car.value <= 8)) {
          if(this.progress.zombie.value + 3 <= 10) {
            this.progress.zombie.value += 3;
          } else {
            this.progress.zombie.value = 10;
          }
        }
        else {
          if(this.progress.zombie.value + 4 <= 10) {
            this.progress.zombie.value += 4;
          } else {
            this.progress.zombie.value = 10;
          }
        }
      },
      zombieAttack() {
        if((this.progress.wall.value - this.progress.zombie.value) >= 0) {
          this.progress.wall.value -= this.progress.zombie.value;
        } else {
          this.progress.wall.value = 0;
        }
      },
    },
    mounted() {
      this.spawnZombie();
    },
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
        <DumbDiceBar counter-name="zombie" :dice-counter="diceCounter" :dice-number="dice.zombie" @add-dice-event="addDice" @remove-dice-event="removeDice"></DumbDiceBar>
        <DumbDiceBar counter-name="wall" :dice-counter="diceCounter" :dice-number="dice.wall" @add-dice-event="addDice" @remove-dice-event="removeDice"></DumbDiceBar>
        <DumbDiceBar counter-name="car" :dice-counter="diceCounter" :dice-number="dice.car" @add-dice-event="addDice" @remove-dice-event="removeDice"></DumbDiceBar>
      </div>
    </div>

    <div class="end-turn-button" v-if="diceCounter === 4" @click="endTurn">Next Phase</div>
  </div>

  <div class="routing">
    <router-link to="/" class="restyled-router-link">HomePage</router-link>
    <router-link to="/escape-of-the-dead" class="restyled-router-link">MainPage</router-link>
    <router-link to="/testpageV2" class="restyled-router-link">TestPage V2</router-link>
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
    cursor: pointer;
  }

  .main-test-page-container {
    padding: 2rem;
    display: flex;
    gap: 2rem;
  }
</style>