<template>
  <div id="app">
    <BackTop>
      <router-view />
    </BackTop>
  </div>
</template>
<script>
import BackTop from "./components/BackTop";
export default {
  data() {
    return {};
  },
  components: { BackTop }
};
</script>
<style lang="scss">
@import "./styles/common";
</style>
