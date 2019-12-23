<template>
  <div>
    <div class="advertising" v-if="flag">
      <button @click="cha"></button>
    </div>
    <div class="top">

    </div>
  </div>
  
</template>

<script>
  export default {
    name: "long",
    components: {},
    props: {},
    data() {
      return {
        flag:true,
      }
    },
    methods: {
      cha(){
        this.flag = !this.flag
      },
    },
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style >
  *{
    margin: 0;
    padding: 0;
  }
  .advertising {
    width: 100%;
    height: 60px;
    background:url("../../src/assets/img/advertising.png");
    background-position: center;
    background-size: 100% 100%;
  }
  .advertising button {
    width: 15px;
    height: 15px;
    border: 0;
    background-color: transparent;
    outline: none;
    background-image: url("../../src/assets/img/cha.svg");
    background-size: 100% 100%;
    position: relative;
    top:20px;
    left: 97%;
  }
  .advertising button:hover {
    cursor: pointer;
  }
  .top {
    width: 1140px;
    height: 85px;
    margin: 0 auto;
    background: antiquewhite;
  }
</style>
