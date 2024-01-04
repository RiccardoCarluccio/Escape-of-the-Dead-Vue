<script>
  import DumbDiceBar from '../DumbDiceBar/DumbDiceBar.vue';
  import ProgressBar from '../ProgressBar/ProgressBar.vue';

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
      DumbDiceBar,
      ProgressBar,
    },
    methods: {
      addDice(el) {
        if(this.diceCounter >= 4) return;
        if(this.dice[el] >= 4) return;
        this.dice[el]++;
        this.diceCounter++;
      },
      removeDice(el) {
        if(this.diceCounter <= 0) return;
        if(this.dice[el] <= 0) return;
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
  <div class="play-zone-container">
    <div class="play-zone-top">
      <div class="bars-container">
        <ProgressBar progress-class="segment-zombie" :progress-value="progress.zombie.value" :max-value="10"></ProgressBar>
        <DumbDiceBar counter-name="zombie" :dice-counter="diceCounter" :dice-number="dice.zombie" @add-dice-event="addDice" @remove-dice-event="removeDice"></DumbDiceBar>
      </div>

      <div class="bars-container">
        <ProgressBar progress-class="segment-wall" :progress-value="progress.wall.value" :max-value="10"></ProgressBar>
        <DumbDiceBar counter-name="wall" :dice-counter="diceCounter" :dice-number="dice.wall" @add-dice-event="addDice" @remove-dice-event="removeDice"></DumbDiceBar>
      </div>
    </div>

    <div class="play-zone-bottom">
      <div class="bars-container">
        <ProgressBar progress-class="segment-car" :progress-value="progress.car.value" :max-value="10"></ProgressBar>
        <DumbDiceBar counter-name="car" :dice-counter="diceCounter" :dice-number="dice.car" @add-dice-event="addDice" @remove-dice-event="removeDice"></DumbDiceBar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../../scss/partials/mixins" as *;
  @use "../../../scss/partials/variables" as *;

  .play-zone-container {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .play-zone-top {
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .play-zone-bottom {
    padding-bottom: 85px;
  }

  .bars-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>