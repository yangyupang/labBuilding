<template>
  <!-- 学习路径 -->
  <div>
    <div class="learningpath">
      <!-- 标题 -->
      <div class="learningpath-title">
        <span>学习路径 |</span>
        <span>精准而系统的学习路径，从0到大牛</span>
        <span>更多></span>
      </div>
      <!-- 图片 -->
      <div class="learningpath-img">
        <el-row :gutter="12">
          <el-col :span="6" v-for="item in learningpathlist" :key="item.id">
            <el-card shadow="hover">
              <div class="learning-img">
                <img :src="item.image" alt />
              </div>
              <div class="learning-hot" v-if="item.is_hot">
                <img src="../../assets/img/hot.png" alt />
              </div>
              <div class="learning-item-detail">
                <div class="detail-title">{{item.name}}</div>
                <div class="detail-courses">
                  <span>{{item.courses_count}} 门课程</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      learningpathlist: []
    };
  },
  components: {},
  methods: {
    // 获取学习路径数据
    getLearningPathData() {
      this.$axios
        .req("/paths")
        .then(res => {
          this.learningpathlist = res;
          //   console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getLearningPathData();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.learningpath {
  width: 74vw;
  min-width: 1080px;
  margin: 0 auto;
  height: 338px;
  overflow: hidden;
  // 学习路径标题
  .learningpath-title {
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
  //学习路径 课程
  .learningpath-img {
    .learning-hot {
      position: absolute;
      top: 10px;
      right: 0px;
    }
    //特效
    .el-col {
      // box-shadow: 1px 2px 1px 1px #a4a4a4;
      transform: translateY(0);
      transition: all 0.5s;
      &:hover {
        cursor: pointer;
        transform: translateY(-10px);
        transition: all 0.5s;
      }
    }
    .learning-img {
      img {
        display: block;
        width: 100%;
        height: 130px;
      }
    }
    .learning-item-detail {
      .detail-title {
        padding: 30px 0 15px;
        color: #666;
        font-size: 18px;
        text-align: center;
      }
      .detail-courses {
        padding: 0 0 30px;
        color: #a4a4a4;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
</style>