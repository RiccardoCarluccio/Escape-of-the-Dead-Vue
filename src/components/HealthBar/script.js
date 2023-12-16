export default {
  props: {
    minValue: Number,
    maxValue: Number,
    value: Number,
  },
  data() {
    return {
      fillPercentage:
        ((this.value - this.minValue) * 100) / (this.maxValue - this.minValue),
    };
  },
  methods: {},
};
