<script>
  import DumbDiceBar from '../DumbDiceBar/DumbDiceBar.vue';
  import ProgressBar from '../ProgressBar/ProgressBar.vue';

  export default {
    components: {
      DumbDiceBar,
      ProgressBar,
    }
  }
</script>

<template>
  <div class="play-zone-container">
    <div class="play-zone-top">
      <div class="bars-container">
        <ProgressBar></ProgressBar>
        <DumbDiceBar></DumbDiceBar>
      </div>

      <div class="bars-container">
        <ProgressBar></ProgressBar>
        <DumbDiceBar></DumbDiceBar>
      </div>
    </div>

    <div class="play-zone-bottom">
      <div class="bars-container">
        <ProgressBar></ProgressBar>
        <DumbDiceBar></DumbDiceBar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../../scss/partials/mixins" as *;
  @use "../../../scss/partials/variables" as *;

  .play-zone-container {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .play-zone-top {
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .play-zone-bottom {
    padding-bottom: 85px;
  }

  .bars-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>