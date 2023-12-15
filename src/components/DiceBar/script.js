export default {
  data() {
    return {
      visible: false,
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
$ parte da 0

if($ === 0 || $ <== 4) {
  $++;

  if($>0) {
  
  }
}

*/