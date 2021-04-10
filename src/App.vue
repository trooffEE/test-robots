<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    Content,
  },
};
</script>

<style lang="scss">
@import "./scss/style.scss";

#app {
  position: relative;
  background: radial-gradient(
    82.33% 70.44% at 50% 0%,
    #26394d 0%,
    #212529 100%
  );
  min-height: 100%;
}
</style>
