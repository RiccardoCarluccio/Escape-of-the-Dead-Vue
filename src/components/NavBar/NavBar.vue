<script>
  export default {
    
  }
</script>

<template>
  <div class="nav-bar-container">
    <div class="back-to-menu">
      <router-link to="/" class="restyled-router-link">
        <div class="left-arrow-container">
        </div>
      </router-link>
    </div>

    <div class="settings-navbar">
      <div class="rules-container">Rules</div>
      <div class="sound-container"></div>
      <div class="music-container"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../../scss/partials/mixins" as *;
  @use "../../../scss/partials/variables" as *;

  .nav-bar-container {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }

  .left-arrow-container {
    background-image: url('../../../img/left\ arrow\ anti\ aliasing.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 75px;
    height: 50px;
  }

  .settings-navbar {
    display: flex;
    @include flex-center-center;
    gap: 10px;
  }

  .rules-container {
    font-size: 28px;
  }

  .sound-container,
  .music-container {
    width: 40px;
    aspect-ratio: 1/1;
    background-color: white;
  }
</style>