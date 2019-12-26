<template>
  <div style="height: 515px;" class="el_carousel">
    <!-- 轮播图 -->
    <div class="home-swapper">
      <!-- 轮播图 -->
      <el-carousel height="515px" arrow="always">
        <el-carousel-item
          :style="{background: item.background_color}"
          v-for="(item,index) in bannerlist"
          :key="index"
        >
          <img :src="item.picture_url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 课程列循环生成 -->
    <div class="course-box">
      <div class="course">
        <ul>
          <li
            v-for="(item,index) in categorieslist"
            :key="index"
            @mouseenter="addNum(index)"
            @mouseleave="delNum"
          >
            <div class="course-name">
              <span class="courses">{{item.name}}</span>
              <span class="courses-technology">{{item.tags[0].name}}</span>
              <span class="courses-technology">{{item.tags[1].name}}</span>
            </div>
            <!--   -->
            <div
              class="course-details"
              :style="{'top':showtop(index),'left':showleft(index)}"
              v-if="num === index"
            >
              <div class="bg">{{item.name}}</div>
              <div class="course-details-name">
                <div
                  class="course-details-name1"
                  v-for="(item0) in item.tags"
                  :key="item0.id"
                >{{item0.name}}</div>
              </div>

              <div class="bg">课程推荐</div>
              <span
                class="course-details-recommend"
                v-for="(item1) in item.recommend_courses"
                :key="item1.id"
              >{{item1.name}}</span>
            </div>
          </li>
          <div class="business-zone">经管专区</div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerlist: [],
      categorieslist: [],
      num: -1
    };
  },
  components: {},
  methods: {
    //轮播图数据
    getBannerData() {
      this.$axios
        .req("/banner-pictures")
        .then(res => {
          this.bannerlist = res;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //课程分类数据
    getCategoriesData() {
      this.$axios
        .req("/categories")
        .then(res => {
          this.categorieslist = res;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addNum(idx) {
      this.num = idx;
    },
    delNum() {
      this.num = -1;
    },
    //前5个框的位置
    showtop(indextop) {
      if (indextop === 0) {
        return 0;
      } else if (indextop === 1) {
        return "57px";
      } else if (indextop > 1 && indextop < 5) {
        return "87px";
      } 
      else if (indextop >= 5) {
        return "170px";
      }
    },
    // showbot(indexbot) {
    //   if (indexbot >= 5) {
    //     return "-100px";
    //   }
    // },
    showleft(indexleft) {
      // if (indexleft >= 0 && indexleft <= 4) {

      // }
      // else return 0;
      return "23%";
    }
  },
  mounted() {
    this.getBannerData();
    this.getCategoriesData();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
// 轮播图和课程
.home-swapper {
  height: 515px;
  min-width: 1080px;
  .el-carousel__item {
    img {
      display: block;
      margin: 0 auto;
    }
  }
  .course-nav {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #08bf91;
  }
}
// 左边课程名样式
.course-box {
  width: 74vw;
  min-width: 1080px;
  margin: 0 auto;
  height: 0 !important;
  position: relative;
  top: -515px;
  z-index: 10 !important;
  .course {
    width: 23%;
    height: 515px;
    background-color: rgba(0, 0, 0, 0.18);
    // position: relative;
    // left: 199px;
    // top: -515px;
    z-index: 10;
    ul {
      .business-zone {
        color: #fff;
        display: inline-block;
        font-size: 12px;
        padding: 9px 9px;
        border-radius: 15px;
        border: 1px solid #fff;
        margin: 10px 90px;
        &:hover {
          cursor: pointer;
          background-color: #fff;
          color: #000;
        }
      }
    }
    li {
      color: #fff;
      padding: 18px 9px 0;
      &:hover {
        cursor: pointer;
        color: rgb(151, 146, 146);
        background-color: #fff;
      }
    }
    .course-name {
      height: 39px;
      border-bottom: 1px solid #fff;
      span {
        &:hover {
          cursor: pointer;
          color: #08bf91;
        }
      }
      .courses {
        margin-right: 10px;
        margin-left: 5px;
      }
      .courses-technology {
        font-size: 13px;
        margin-right: 8px;
      }
    }
    // 展示课程详情
    .course-details {
      position: absolute;
      left: 263px;
      width: 400px;
      background-color: #fff;
      //名称 课程推荐背景色
      .bg {
        margin: 10px;
        display: inline-block;
        padding: 0 10px;
        height: 22px;
        line-height: 22px;
        font-size: 14px;
        background-color: rgb(243, 239, 239);
      }
      //课程名称样式
      .course-details-name {
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        .course-details-name1 {
          padding: 0 10px;
          margin: 10px 0;
          border-right: 1px solid #666;
          font-size: 12px;
        }
      }
      //课程推荐样式
      .course-details-recommend {
        display: block;
        font-size: 12px;
        margin: 20px 10px;
      }
    }
  }
}
</style>