<script>
  import ProgressBar from '../components/ProgressBar/ProgressBar.vue';
  import TestComponent from '../components/TestComponent.vue';

  export default {
    components: {
      ProgressBar,
      TestComponent,
    }
  }
</script>

<template>
  <ProgressBar></ProgressBar>
  <TestComponent></TestComponent>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>