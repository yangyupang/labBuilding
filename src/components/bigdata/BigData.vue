<template>
  <!-- 云计算与大数据  -->
  <div>
    <div class="bigdata">
      <!-- 标题 -->
      <div class="bigdata-title">
        <span>{{bigdata.classify_name}}</span>
        <span>更多></span>
      </div>
      <!-- 精选项目课 classicallist.courses -->
      <div class="bigdata-courses">
        <div class="courses-img">
          <!-- 最大的图片 -->
          <div class="courses-imgs">
            <img :src="pictureurl" alt />
          </div>
        </div>
        <div class="course-img">
          <!-- 课程小图 -->
          <div class="course-item" v-for="(item,index) in bigdata.courses" :key="index">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      bigdata: [],
      pictureurl: {}
    };
  },
  components: {},
  methods: {
    // 请求课程数据取第五项 （云计算与大数据）
    getBigData() {
      this.$axios
        .req("/classfication-courses")
        .then(res => {
          this.bigdata = res[4];
          this.pictureurl = res[4].recommend_course.picture_url;
          // console.log(this.classicallist);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getBigData();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.bigdata {
  width: 74vw;
  min-width: 1080px;
  margin: 0 auto;
  overflow: hidden;
  // 精选项目课标题
  .bigdata-title {
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
        float: right;
        color: #666;
        font-size: 14px;
        padding-top: 8px;
      }
    }
  }
  // 精选项目课图
  .bigdata-courses {
    height: 540px;
    display: flex;
    justify-content: space-between;
    // 最大的图片
    .courses-img {
      width: 23.7%;
      .courses-imgs {
        width: 100%;
        &:hover {
          transition: all 0.5s;
          cursor: pointer;
          box-shadow: 1px 2px 20px 1px #6c757d;
        }
        img {
          width: 100%;
        }
      }
    }
    .course-img {
      width: 74.8%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  // 精选项目课们
  .course-item {
    width: 31.8%;
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
        display: block;
        width: 100%;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        width: 280px;
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
    top: 38px;
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
      padding: 3px 10px;
      font-size: 12px;
      border-radius: 15px;
      height: 40%;
      line-height: 17px;
      position: relative;
      top: 34%;
      left: 52%;
    }
    //会员
    .member {
      color: #fff;
      background-color: #ffc500;
      padding: 3px 10px;
      font-size: 12px;
      border-radius: 15px;
      height: 40%;
      line-height: 17px;
      position: relative;
      top: 34%;
      left: 52%;
    }
  }
}
</style>