<template>
  <!-- 训练营强化 -->
  <div>
    <div class="training">
      <!-- 标题 -->
      <div class="training-title">
        <span>训练营强化 |</span>
        <span>专注实战的完整项目，在实战中融会贯通</span>
        <span>更多></span>
      </div>
      <!-- 内容 -->
      <div v-for="item in traininglist" :key="item.id" class="training-content">
        <div class="content-img">
          <img :src="item.picture_url" alt />
        </div>
        <div class="content-text">
          <h5>{{item.name}}</h5>
          <div class="content-description">{{item.description}}</div>
          <div class="content-bottom">
            <div class="tags">
              <span v-for="(item0,index) in item.tags" :key="index">{{item0}}</span>
            </div>
            <div class="view-details">查看详情</div>
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
      traininglist: []
    };
  },
  components: {},
  methods: {
    // 获取训练营数据
    getTrainingData() {
      this.$axios
        .req("/bootcamps")
        .then(res => {
          this.traininglist = res;
          //   console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getTrainingData();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.training {
  width: 74vw;
  min-width: 1080px;
  margin: 0 auto;
  height: 636px;
  overflow: hidden;
  // 训练营强化标题
  .training-title {
    margin: 30px 0;
    span {
      &:hover {
        cursor: pointer;
      }
      &:nth-child(1) {
        font-size: 24px;
        color: #565656;
      }
      &:nth-child(2) {
        color: #666;
        font-size: 14px;
        vertical-align: 2px;
      }
      &:nth-child(3) {
        float: right;
        color: #666;
        font-size: 14px;
        padding-top: 8px;
      }
    }
  }
  //训练营强化内容
  .training-content {
    width: 100%;
    height: 250px;
    display: flex;
    margin-bottom: 20px;
    .content-img {
      width: 41.66667%;
      margin-right: 15px;
      img {
        width: 100%;
        height: 250px;
      }
    }
    .content-text {
      padding: 20px;
      width: 58.33333%;
      h5 {
        color: #424242;
        font-weight: 400;
        font-size: 16px;
      }
      .content-description {
        height: 103px;
        margin: 18px 0 0;
        font-size: 14px;
        line-height: 25px;
        color: #666;
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
      .content-bottom {
        margin-top: 30px;
        .tags {
          display: inline-block;
          vertical-align: -16px;
          span {
            margin: 0 4px 4px 0;
            font-size: 14px;
            color: #666;
          }
        }
        .view-details {
          float: right;
          padding: 7px 16px;
          color: #fff;
          background: #ff9717;
          font-size: 21px;
        }
      }
    }
  }
}
</style>