<template>
  <!-- 楼+ 实战课程  -->
  <div>
    <div class="practice-course">
      <!-- 标题 -->
      <div class="section-title">
        <span>楼+ 实战课程 |</span>
        <span>定期开班，导师助教全程辅导，最快最优成长</span>
        <span>更多></span>
      </div>
      <div class="active-left">
        <el-row :gutter="12">
          <el-col :span="6" v-for="(item,index) in loupluslist.slice(0,4)" :key="index">
            <el-card shadow="hover">
              <div class="course-img">
                <img :src="item.picture_url" alt />
              </div>
              <div class="course-item-detail">
                <div class="detail-title">{{item.title}}</div>
                <div class="detail-time">
                  <span>最近班次：</span>
                  <span>{{item.open_time}}</span>
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
      loupluslist: []
    };
  },
  components: {},
  methods: {
    getLouplusData() {
      this.$axios
        .req("/louplus")
        .then(res => {
          this.loupluslist = res;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getLouplusData();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.practice-course {
  width: 74vw;
  min-width: 1080px;
  margin: 0 auto;
  height: 281px;
  overflow: hidden;
  // 标题
  .section-title {
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
  .active-left {
    .el-card {
      height: 185px;
    }
    .el-card:hover {
  
      cursor: pointer;
      box-shadow: 1px 2px 20px 1px #6c757d;
    }
    .course-img {
      img {
        width: 100%;
        height: 90px;
        border-radius: 6px 6px 0 0;
      }
    }
    .course-item-detail {
      padding: 18px 10px 15px;
      .detail-title {
        margin-bottom: 15px;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #565656;
      }
      .detail-time {
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        color: #a4a4a4;
      }
    }
  }
}
</style>