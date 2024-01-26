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
  <div class="main-wrapper">
    <div class="main-container">
      <NavBar class="navbar-position"></NavBar>
      <VisualElements></VisualElements>
      <PlayZone class="interactive-layer"></PlayZone>
    </div>

    <div class="credits-instructions-container">
      Chupa chups sesame snaps marzipan jelly beans muffin I love dessert. Sweet roll brownie cookie dragée powder candy bear claw lemon drops. Dragée muffin danish cake soufflé I love dessert fruitcake.

      Macaroon tart chocolate lollipop ice cream cupcake. Pudding croissant caramels cake marshmallow gummi bears bear claw. Pudding cotton candy I love halvah I love brownie fruitcake powder.

      Sweet roll cupcake topping cupcake jelly. I love dragée donut I love dragée lollipop tiramisu. Cookie candy halvah bear claw gummi bears chupa chups candy canes. Jelly chocolate croissant ice cream cake.

      Bonbon gingerbread pie ice cream I love. Donut jelly-o sesame snaps halvah ice cream dragée brownie. Tiramisu croissant chocolate bar soufflé lollipop I love.

      Macaroon dragée dragée gingerbread gummies lollipop I love icing. Donut fruitcake fruitcake toffee bear claw brownie cheesecake. Cookie I love powder tiramisu tootsie roll chupa chups sweet cake.
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .main-wrapper,
  .main-container {
    border: 1px solid black;
  }

  .main-wrapper {
    width: 960px;
    padding-top: 25px;
  }

  .main-container {
    width: 960px;
    height: 600px;
    position: relative;
  }

  .credits-instructions-container {
    width: 100%;
    word-wrap: break-word;
    padding: 20px;
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