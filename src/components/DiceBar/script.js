const GET_COUNTER_EVENT = 'getCounterEvent';

export default {
  props: {
    diceCounter: Number,
  },
  emits: [
    GET_COUNTER_EVENT,
  ],
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
      if(this.diceCounter >= 1) {
        this.localDiceCounter = this.diceCounter;
        this['visible' + this.localDiceCounter] = false;
        this.localDiceCounter--;
        this.getEmit();
      }
    },
    addDice() {
      if(this.diceCounter <= 3) {
        this.localDiceCounter = this.diceCounter;
        this.localDiceCounter++;
        this['visible' + this.localDiceCounter] = true;
        this.getEmit();
      }
    },
    getEmit() {
      this.$emit(GET_COUNTER_EVENT, this.localDiceCounter);
    }
  },
}

/*
  addDice() {
    if(this.diceCounter <= 3) {
      this.zombieDiceBar++;
      for(let i = 0; i <= this.zombieDiceBar; i++) {
        this['visible' + i] = true;
      }
    }
  }
*/

//
/*
removeDice() {
    if(this.diceCounter === this.localDiceCounter) {
      if(this.diceCounter >= 1) {
        this.localDiceCounter = this.diceCounter;
        this['visible' + this.localDiceCounter] = false;
        this.localDiceCounter--;
        this.getEmit();
      }
    } else {
      if(Math.min(this.diceCounter, this.localDiceCounter) >= 1) {
        this['visible' + Math.min(this.diceCounter, this.localDiceCounter)] = false;
        this.localDiceCounter--;
        this.getEmit();
      }
    }
  },
*/

/*
for (let i = 1; i <= 4; i++) {
    this['visible' + i] = i <= this.diceCounter;
  }

this['visible1'] = 1 <= 3; (true)
this['visible2'] = 2 <= 3; (true)
this['visible3'] = 3 <= 3; (true)
this['visible4'] = 4 <= 3; (false)
*/