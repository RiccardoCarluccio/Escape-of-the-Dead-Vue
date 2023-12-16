export default {
  props: {
    barName: String,
    dicesCount: Number,
  },
  emits: ["diceAddEvent", "diceRemoveEvent"],
  methods: {
    onDiceAdd() {
      this.$emit("diceAddEvent", this.barName);
    },
    onDiceRemove() {
      this.$emit("diceRemoveEvent", this.barName);
    },
  },
};
