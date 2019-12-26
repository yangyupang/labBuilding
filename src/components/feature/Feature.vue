<template>
  <div>
    <div class="feature">
      <div class="feature-img">
        <div style="width:23%" v-for="(item,index) in list" :key="index">
          <div class="feature-imgs">
            <img :src="item.img" alt />
          </div>
          <div class="learning-item-detail">
            <div class="detail-title">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: "https://static.shiyanlou.com/frontend/dist/img/5940276.gif",
          text: "丰富全面的计算机实验课程"
        },
        {
          img: "https://static.shiyanlou.com/frontend/dist/img/8b66710.gif",
          text: "在线编程环境，1秒启动"
        },
        {
          img: "https://static.shiyanlou.com/frontend/dist/img/9600bd2.gif",
          text: "每天一个项目课，丰富你的项目经验"
        },
        {
          img: "https://static.shiyanlou.com/frontend/dist/img/7f21af6.gif",
          text: "有效学习时间，真实记录你的代码生涯"
        }
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.feature {
  margin: 70px 0;
  .feature-img {
    width: 74vw;
    min-width: 1080px;
    margin: 0 auto;
    height: 226px;
    display: flex;
    justify-content: space-around;
    .feature-imgs {
      text-align: center;
    }
    .learning-item-detail {
      .detail-title {
        width: 80%;
        margin: 10px auto 0;
        font-size: 16px;
        color: #666;
        text-align: center;
      }
    }
  }
}
</style>