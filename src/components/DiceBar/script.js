export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
    };
  },
  methods: {
    removeDice() {                                                        //removeDice() deve poter portare i dadi visibili a 0. Ad ora non lo fa sotto l'1
      if(this.$diceCounter >= 1 && this.$diceCounter <= 4) {              //va in conflitto grave con addDice()
        this.$diceCounter--;
    
        if(this.$diceCounter >= 1) {
          this['visible' + this.$diceCounter] = false;
        }
      }
    },
    addDice() {
      if(this.$diceCounter >= 0 && this.$diceCounter <= 3) {
        this.$diceCounter++;
    
        if(this.$diceCounter >= 1) {
          this['visible' + this.$diceCounter] = true;
        }
      }
    },
  },
}

/*
for (let i = 1; i <= 4; i++) {
    this['visible' + i] = i <= this.$diceCounter;
  }

this['visible1'] = 1 <= 3; (true)
this['visible2'] = 2 <= 3; (true)
this['visible3'] = 3 <= 3; (true)
this['visible4'] = 4 <= 3; (false)
*/