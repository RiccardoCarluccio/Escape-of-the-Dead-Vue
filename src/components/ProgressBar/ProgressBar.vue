<script>
  export default {
    props: {
      progressClass: String,
      progressValue: Number,
      maxValue: Number,
    }
  }
</script>

<template>
  <div class="progress-bar">
    <div class="progress-segment"
    :class="progressClass"
    v-for="n in progressValue"
    :key="n"
    :style="{
      width: `calc(100% / ${maxValue})`
    }">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../../scss/partials/mixins" as *;
  @use "../../../scss/partials/variables" as *;

  .progress-bar {
    width: 320px;
    height: 20px;
    background-color: $background-empty;
    padding: 2px;
    display: flex;
    align-items: center;
  }

  .progress-segment {
    height: 100%;
  }

  .segment-zombie {
    background-color: $segment-zombie;
  }

  .segment-wall {
    background-color: $segment-wall;
  }

  .segment-car {
    background-color: $segment-car;
  }
</style>