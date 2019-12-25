<template>
  <!-- 精选项目课  -->
  <div>
    <div class="classical">
      <!-- 标题 -->
      <div class="classical-title">
        <span>{{classicallist.classify_name}} |</span>
        <span>{{classicallist.description}}</span>
        <span>更多></span>
      </div>
      <!-- 精选项目课 classicallist.courses -->
      <div class="classical-courses">
        <!-- 最大的图片 -->
        <div class="courses-img">
          <img :src="pictureurl" alt />
        </div>
        <!-- 课程小图 -->
        <div class="course-item" v-for="(item,index) in classicallist.courses" :key="index">
          <div class="item-img">
            <img :src="item.picture_url" alt />
          </div>
          <!-- 课程描述 -->
          <div class="item-describe">
            <div class="item-describes">
              <h6>{{item.name}}</h6>
              <div class="item-describes-text">{{item.description}}</div>
            </div>
          </div>
          <!-- 课程标签会员 训练营 -->
          <div class="item-people">
            <img src="../../assets/img/people.svg" alt />
            <span>{{item.students_count}}</span>
            <div class="bootcamp" v-if="item.fee_type === 'bootcamp'">训练营</div>
            <div class="member" v-if="item.fee_type === 'member'">会员</div>
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
      classicallist: [],
      pictureurl: {}
    };
  },
  components: {},
  methods: {
    // 请求课程数据取第一项 （精选项目课）
    getClassicalData() {
      this.$axios
        .req("/classfication-courses")
        .then(res => {
          this.classicallist = res[0];
          this.pictureurl = res[0].recommend_course.picture_url;
          // console.log(this.classicallist);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getClassicalData();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.classical {
  width: 74vw;
  min-width: 1080px;
  margin: 0 auto;
  height: 606px;
  overflow: hidden;
  // 精选项目课标题
  .classical-title {
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
  // 精选项目课图
  .classical-courses {
    height: 540px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // 最大的图片
    .courses-img {
      width: 49.2%;
      height: 250px;
      &:hover {
        transition: all 0.5s;
        cursor: pointer;
        box-shadow: 1px 2px 20px 1px #6c757d;
      }
      img {
        width: 100%;
        height: 250px;
        // box-shadow: 0 1px 2px 0 #ddd;
      }
    }
    // 课程小图
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
      .item-describes {
        // 课程标题
        h6 {
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        // 课程详细描述
        .item-describes-text {
          height: 53px;
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
  // 精选项目课们
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
    // 精选项目课程移入显示详情
    &:hover .item-describe {
      transform: translateY(-84px);
      transition: all 0.5s;
    }
  }
}
</style>