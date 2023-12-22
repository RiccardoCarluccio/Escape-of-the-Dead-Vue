<script>
  export default {
    props: {
      progressValue: Number,
    }
  }
</script>

<template>
  <div class="progress-bar">
    <div class="progress-segment" v-for="a in b"></div>
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

  .progress-container {
    width: 100%;
    height: 100%;
  }

  .progress-segment {
    background-color: black;
  }
</style>