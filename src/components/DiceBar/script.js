export default {
  props: {
    diceCounter: Number,
  },
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      localDiceCounter: this.diceCounter,
    };
  },
  methods: {
    removeDice() {
      if(this.localDiceCounter >= 1) {
        this['visible' + this.localDiceCounter] = false;
        this.localDiceCounter--;
      }
    },
    addDice() {
      if(this.localDiceCounter <= 3) {
        this.localDiceCounter++;
        this['visible' + this.localDiceCounter] = true;
      }
    },
  },
}

/*
for (let i = 1; i <= 4; i++) {
    this['visible' + i] = i <= this.diceCounter;
  }

this['visible1'] = 1 <= 3; (true)
this['visible2'] = 2 <= 3; (true)
this['visible3'] = 3 <= 3; (true)
this['visible4'] = 4 <= 3; (false)
*/