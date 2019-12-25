<template>
  <!-- 精选项目课  -->
  <div>
    <div class="goodlesson el_indicators">
      <!-- 标题 -->
      <div class="goodlesson-title">
        <span>{{goodLessonlists.classify_name}} |</span>
        <span>{{goodLessonlists.description}}</span>
        <span>更多></span>
      </div>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item class="recentwheel" v-for="(item,index) in goodLessonlist" :key="index">
          <!-- 课程小图 -->
          <div class="goodlesson-courses">
            <div class="course-item" v-for="(item0,index0) in item" :key="index0">
              <div class="item-img">
                <img :src="item0.picture_url" alt />
              </div>
              <!-- 课程描述 -->
              <div class="item-describe">
                <div class="item-describes">
                  <h6>{{item0.name}}</h6>
                  <div class="item-describes-text">{{item0.description}}</div>
                </div>
              </div>
              <!-- 课程标签会员 训练营 -->
              <div class="item-people">
                <img src="../../assets/img/people.svg" alt />
                <span>{{item0.students_count}}</span>
                <div class="bootcamp" v-if="item0.fee_type === 'bootcamp'">训练营</div>
                <div class="member" v-if="item0.fee_type === 'member'">会员</div>
                <div class="member" v-if="item0.fee_type === 'limit_free'">限免</div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodLessonlist: [],
      goodLessonlists: []
    };
  },
  components: {},
  methods: {
    // 请求近期好课数据取第二项 （近期好课）
    getGoodLessonData() {
      this.$axios
        .req("/classfication-courses")
        .then(res => {
          this.goodLessonlists = res[1];
          for (let i = 0; i < this.goodLessonlists.courses.length; i += 4) {
            this.goodLessonlist.push(
              this.goodLessonlists.courses.slice(i, i + 4)
            );
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getGoodLessonData();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.recentwheel {
  height: 255px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.goodlesson {
  width: 74vw;
  min-width: 1080px;
  margin: 0 auto;
  overflow: hidden;
  // 近期好课标题
  .goodlesson-title {
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
  // 近期好课图
  .goodlesson-courses {
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    // 课程描述
    .item-describe {
      padding: 10px 10px 0;
      background-color: #fff;
      position: absolute;
      transform: translateY(0);
      transition: all 0.5s;
      width: 92.2%;
      .item-describes {
        // 课程标题
        h6 {
          color: #666;
          //   width: 236px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        // 课程详细描述
        .item-describes-text {
          height: 53px;
          //   width: 236px;
          margin-top: 4px;
          color: #666;
          font-size: 13px;
          line-height: 1.4;
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          // display: none;
        }
      }
    }
    //装人数图片 人数 会员或者训练营的地方（盒子底部）
    .item-people {
      display: flex;
      height: 53px;
      padding: 0 10px;
      font-size: 12px;
      color: #9b9da2;
      background-color: #fff;
      position: relative;
      top: 30px;
      img {
        width: 22px;
        display: block;
      }
      span {
        line-height: 58px;
        margin-left: 10px;
      }
      //训练营
      .bootcamp {
        color: #fff;
        background-color: #f66;
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 15px;
        height: 30%;
        line-height: 15px;
        position: relative;
        top: 29%;
        left: 52%;
      }
      //会员
      .member {
        color: #fff;
        background-color: #ffc500;
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 15px;
        height: 30%;
        line-height: 15px;
        position: relative;
        top: 29%;
        left: 55%;
      }
    }
  }
  // 近期好课们
  .course-item {
    width: 23.8%;
    height: 250px;
    background-color: #fff;
    position: relative;
    //盒子加阴影
    &:hover {
      cursor: pointer;
      box-shadow: 1px 2px 20px 1px #6c757d;
      transition: all 0.5s;
    }
    // 近期好课程移入显示详情
    &:hover .item-describe {
      transform: translateY(-84px);
      transition: all 0.5s;
    }
  }
}
</style>