<script>
import DiceBar from "../components/DiceBar/DiceBar.vue";
import DiceBarv2 from "../components/DiceBarv2/DiceBarv2.vue";
import HealthBar from "../components/HealthBar/HealthBar.vue";
import SETTINGS from "../settings";

export default {
  components: {
    DiceBar,
    HealthBar,
    DiceBarv2,
  },
  data() {
    return {
      dices: {
        zombies: 2,
        wall: 0,
        car: 0,
      },
    };
  },
  methods: {
    getDicesCount() {
      return this.dices.zombies + this.dices.wall + this.dices.car;
    },
    isDicesMaxCount() {
      return this.getDicesCount() >= SETTINGS.MAX_DICES_COUNT;
    },
    onDiceAdd(barName) {
      if (this.dices[barName] === undefined) return;
      if (this.isDicesMaxCount()) return;
      this.dices[barName]++;
    },
    onDiceRemove(barName) {
      if (this.dices[barName] === undefined) return;
      if (this.dices[barName] === 0) return;
      this.dices[barName]--;
    },
  },
};
</script>

<template>
  <DiceBar></DiceBar>
  <DiceBar></DiceBar>
  <div>Out of component $diceCounter: {{ $diceCounter }}</div>
  <HealthBar :min-value="0" :max-value="10" :value="3" />
  <DiceBarv2
    bar-name="zombies"
    :dices-count="dices.zombies"
    @dice-add-event="onDiceAdd"
    @dice-remove-event="onDiceRemove"
  />
  <DiceBarv2
    bar-name="wall"
    :dices-count="dices.wall"
    @dice-add-event="onDiceAdd"
    @dice-remove-event="onDiceRemove"
  />
  <DiceBarv2
    bar-name="car"
    :dices-count="dices.car"
    @dice-add-event="onDiceAdd"
    @dice-remove-event="onDiceRemove"
  />
</template>

<style lang="scss" scoped>
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>
