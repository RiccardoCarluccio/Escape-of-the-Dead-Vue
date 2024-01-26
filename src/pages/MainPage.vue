<script>
  import NavBar from '../components/NavBar/NavBar.vue';
  import VisualElements from '../components/VisualElements/VisualElements.vue';
  import PlayZone from '../components/PlayZone/PlayZone.vue';

  export default {
    components: {
      NavBar,
      VisualElements,
      PlayZone,
    }
  }
</script>

<template>
  <div class="main-container">
    <NavBar class="navbar-position"></NavBar>
    <VisualElements></VisualElements>
    <PlayZone class="interactive-layer"></PlayZone>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .main-container {
    width: 960px;
    height: 600px;
    position: relative;
  }

  .navbar-position,
  .interactive-layer {
    position: absolute;
    left: 0;
    top: 0;
  }

  .navbar-position {
    z-index: 2000;
  }

  .interactive-layer {
    z-index: 1000;
  }
</style>