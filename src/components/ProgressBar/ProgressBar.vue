<script>
  export default {
    props: {
      progressValue: Number,
      maxValue: Number,
    }
  }
</script>

<template>
  <div class="progress-bar">
    <div class="progress-segment"
    :style="{width:`calc(100% / ${maxValue})`}"
    v-for="n in progressValue">
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
    background-color: black;
    height: 100%;
  }
</style>