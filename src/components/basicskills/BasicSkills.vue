<template>
  <!-- 基本功 -->
  <div>
    <div class="basicskills">
      <!-- 标题 -->
      <div class="basicskills-title">
        <span>{{basicskillslist.classify_name}} |</span>
        <span>{{basicskillslist.description}}</span>
        <span>更多></span>
      </div>
      <!-- 基本功 classicallist.courses -->
      <div class="basicskills-courses">
        <!-- 基本功小图 -->
        <div class="course-item" v-for="(item,index) in basicskillslist.courses" :key="index">
          <div class="item-img">
            <img :src="item.picture_url" alt />
          </div>
          <!-- 基本功描述 -->
          <div class="item-describe">
            <div class="item-describes">
              <h6>{{item.name}}</h6>
              <div class="item-describes-text">{{item.description}}</div>
            </div>
          </div>
          <!-- 基本功 标签会员 训练营 -->
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
      basicskillslist: []
    };
  },
  components: {},
  methods: {
    // 请求课程数据取第三项 （基本功）
    getBasicSkillsData() {
      this.$axios
        .req("/classfication-courses")
        .then(res => {
          this.basicskillslist = res[2];
          //   this.pictureurl = res[0].recommend_course.picture_url;
          // console.log(this.classicallist);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getBasicSkillsData();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.basicskills {
  width: 74vw;
  min-width: 1080px;
  margin: 0 auto;
  overflow: hidden;
  // 基本功标题
  .basicskills-title {
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
  // 基本功 图
  .basicskills-courses {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

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