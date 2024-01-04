<script>
  export default {
    props: {
      counterName: String,
      diceCounter: Number,
      diceNumber: Number,
    },
    emits: [
      "addDiceEvent",
      "removeDiceEvent",
    ],
    methods: {
      addDice() {
        this.$emit("addDiceEvent", this.counterName)
      },
      removeDice() {
        this.$emit("removeDiceEvent", this.counterName)
      },
    },
  }
</script>

<template>
  <div class="dice-bar">
    <div class="dice-manipulator dice-subtractor" @click="removeDice">
      <div class="sign-div minus-div"></div>
    </div>

    <div class="dice-zone">
      <div class="dice" v-for="die in diceNumber" :key="die">{{ die }}</div>
    </div>

    <div class="dice-manipulator dice-incrementer" @click="addDice">
      <div class="sign-div minus-div"></div>
      <div class="sign-div plus-div"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../../scss/partials/mixins" as *;
  @use "../../../scss/partials/variables" as *;

  .dice-bar {
    width: 320px;
    height: 60px;
    padding: 0 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;
  }

  .dice-manipulator {
    height: 50px;
    aspect-ratio: 1/1;
    position: relative;
    cursor: pointer;

    .sign-div {
      position: absolute;
      background-color: white;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
    }

    .minus-div {
      height: 8px;
      width: 40px;
    }

    .plus-div {
      height: 40px;
      width: 8px;
    }
  }

  .dice-subtractor {
    background-color: $button-subtractor;
  }

  .dice-incrementer {
    background-color: $button-incrementer;
  }

  .dice-zone {
    flex-grow: 1;
    height: 60px;
    background-color: $background-empty;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .dice {
    background-color: white;
    width: calc((100% - 15px) / 4);
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
</style>