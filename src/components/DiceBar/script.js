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
    removeDice() {
      this.visible = false;
    },
    addDice() {
      this.visible = true;
    },
  },
}

/*
V-IF
$ parte da 0 e non 4
addDice() {
  if(this.$diceCounter === 0 || this.$diceCounter <== 4) {
    $diceCounter++;

    if($>0) {
      visible$diceCounter = true;
    }
  }
}

this['visible' + $diceCounter] = true;
-----------------
for (let i = 1; i <= 4; i++) {
    this['visible' + i] = i <= this.$diceCounter;
  }

this['visible1'] = 1 <= 3; (true)
this['visible2'] = 2 <= 3; (true)
this['visible3'] = 3 <= 3; (true)
this['visible4'] = 4 <= 3; (false)