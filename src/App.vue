<template>
  <div id="app">
    <BackTop></BackTop>

    <!-- <BackTop :height="100" :bottom="200">
      <div class="top">返回顶端</div>
    </BackTop> -->
    <router-view />
  </div>
</template>
<script>
// import BackTop from "./components/BackTop";
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    // handleScroll() {
    //   // 得到页面滚动的距离
    //   let scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   console.log(scrollTop);
    // }
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll());
  }
};
</script>
<style lang="scss">
@import "./styles/common";
// .top {
//   padding: 10px;
//   background: rgba(0, 153, 229, 0.7);
//   color: #fff;
//   text-align: center;
//   border-radius: 2px;
// }
</style>
