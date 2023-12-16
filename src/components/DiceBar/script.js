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
      numberOfDice: 0,
    };
  },
  methods: {
    addDice() {
      if(this.diceCounter <= 3) {
        this.numberOfDice++;
        const el = 1;
        this.getEmit(el);
      }
    },
    removeDice() {
      if(this.diceCounter >= 1) {
        this.numberOfDice--;
        const el = -1;
        this.getEmit(el);
      }
    },
    getEmit(el) {
      this.$emit(GET_COUNTER_EVENT, el);
    }
  },
}