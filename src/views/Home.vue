<template>
  <div style="background-color: rgb(233, 232, 232)">
    <div class="advertising" v-if="flag">
      <button @click="cha"></button>
    </div>
    <!-- 头部（实验楼） -->
    <div class="top">
      <div class="top-left">
        <div class="logo">
          <img src="../assets/img/logo.svg" alt />
        </div>
        <div class="slogan">
          <span>做实验，学编程</span>
        </div>
      </div>
      <div class="home-right-menu">
        <a>企业版</a>
        <a>学校版</a>
        <div class="sign-btns">
          <li>
            <span>登录</span>
          </li>
          <li>
            <span>注册</span>
          </li>
        </div>
      </div>
    </div>
    <!-- 头部吸顶（实验楼） -->
    <div class="top-container" v-if="show">
      <div class="container">
        <div class="container-left">
          <img src="https://static.shiyanlou.com/frontend/dist/img/9f43b00.svg" alt />
        </div>
        <div class="midle">
          <div class="midle-menus">
            <a href="#">
              课程
              <i class="el-icon-caret-bottom"></i>
              <ul>
                <li>
                  <span>全部课程</span>
                </li>
                <li>
                  <span>学习路径</span>
                </li>
              </ul>
            </a>
          </div>
          <div class="midle-menus">
            <a href="#">训练营</a>
          </div>
          <div class="midle-menus">
            <a href="#">楼+</a>
          </div>
          <div class="midle-menus">
            <a href="#">会员</a>
            <div class="hot">
              <span>Hot</span>
            </div>
          </div>
          <div class="midle-menus">
            <a href="#">
              社区
              <i class="el-icon-caret-bottom"></i>
              <ul>
                <li>
                  <span>讨论</span>
                </li>
                <li>
                  <span>教程库</span>
                </li>
                <li>
                  <span>直播</span>
                </li>
                <li>
                  <span>比赛</span>
                </li>
              </ul>
            </a>
          </div>
          <div class="home-right-menu">
            <a>企业版</a>
            <a>学校版</a>
            <div class="home-nav-right">
              <el-input v-model="input" placeholder="搜索 课程/问答" suffix-icon="el-icon-search"></el-input>
            </div>
            <div class="sign-btns">
              <li>
                <span>登录</span>
              </li>
              <li>
                <span>注册</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 全部课程 路径 训练营-->
    <div class="home-nav">
      <div class="home-nav-left">
        <div class="left-menu-list">
          <img src="../assets/img/menu.svg" class="icon" />
          <span>全部课程</span>
        </div>
      </div>
      <div class="midle">
        <div class="midle-menus">
          <a href="#">路径</a>
        </div>
        <div class="midle-menus">
          <a href="#">训练营</a>
        </div>
        <div class="midle-menus">
          <a href="#">楼+</a>
        </div>
        <div class="midle-menus">
          <a href="#">会员</a>
          <div class="hot">
            <span>Hot</span>
          </div>
        </div>
        <div class="midle-menus">
          <a href="#">
            社区
            <i class="el-icon-caret-bottom"></i>
            <ul>
              <li>
                <span>讨论</span>
              </li>
              <li>
                <span>教程库</span>
              </li>
              <li>
                <span>直播</span>
              </li>
              <li>
                <span>比赛</span>
              </li>
            </ul>
          </a>
        </div>
      </div>
      <div class="home-nav-right">
        <el-input v-model="input" placeholder="搜索 课程/问答" suffix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <!-- 轮播图 -->
    <SlideShow></SlideShow>
    <!-- 楼+ 实战课程 -->
    <PracticeCourse></PracticeCourse>
    <!-- 精选项目课  -->
    <Classical></Classical>
    <!-- 近期好课  -->
    <GoodLesson></GoodLesson>
    <!-- 基本功 -->
    <BasicSkills></BasicSkills>
    <!-- 后端开发 -->
    <BackendDevelopment></BackendDevelopment>
    <!-- 云计算与大数据 -->
    <BigData></BigData>
    <!-- 训练营强化  -->
    <TrainingCamp></TrainingCamp>
    <!-- 学习路径 -->
    <LearningPath></LearningPath>
    <!-- 特色 -->
    <Feature></Feature>
    <!-- 底部 -->
    <div class="footer">
      <div class="footer-body">
        <div class="row">
          <!-- 底部第一条 -->
          <div class="col-md-4">
            <div>
              <img src="https://static.shiyanlou.com/frontend/dist/img/4a4ab3d.svg" alt />
            </div>
            <div class="slogan">动手做实验，轻松学IT</div>
            <div class="icon">
              <div class="weixin">
                <img class="erweima" src="../../src/assets/img/erweima.png" alt />
                <img class="wei" src="../../src/assets/img/weixin.svg" alt />
              </div>
              <div class="weibo">
                <img src="../../src/assets/img/weibo.svg" alt />
              </div>
            </div>
          </div>
          <!-- 底部第二条 公司-->
          <div class="col-md-2">
            <div class="title">公司</div>
            <div class="link">关于我们</div>
            <div class="link">联系我们</div>
            <div class="link">加入我们</div>
          </div>
          <!-- 底部第三 合作-->
          <div class="col-md-2">
            <div class="title">合作</div>
            <div class="link">成为作者</div>
            <div class="link">教师合作</div>
            <div class="link">友情链接</div>
            <div class="link">开发者</div>
          </div>
          <!-- 底部第四 服务-->
          <div class="col-md-2">
            <div class="title">服务</div>
            <div class="link">企业版</div>
            <div class="link">实战训练营</div>
            <div class="link">会员服务</div>
            <div class="link">实验报告</div>
            <div class="link">常见问题</div>
            <div class="link">隐私条款</div>
          </div>
          <!-- 底部第五 学习路径-->
          <div class="col-md-2">
            <div class="title">学习路径</div>
            <div class="link">Python学习路径</div>
            <div class="link">Linux学习路径</div>
            <div class="link">大数据学习路径</div>
            <div class="link">Java学习路径</div>
            <div class="link">PHP学习路径</div>
            <div class="link">全部</div>
          </div>
        </div>
      </div>
      <div class="footer-footer">
        <span>Copyright @2013-2019 实验楼在线教育 | 蜀ICP备13019762号</span>
      </div>
    </div>
  </div>
</template>

<script >
import SlideShow from "../components/slideshow/SlideShow";
import PracticeCourse from "../components/practicecourse/PracticeCourse";
import Classical from "../components/classical/Classical";
import GoodLesson from "../components/goodlesson/GoodLesson";
import BasicSkills from "../components/basicskills/BasicSkills";
import BackendDevelopment from "../components/backenddevelopment/BackendDevelopment";
import BigData from "../components/bigdata/BigData";
import TrainingCamp from "../components/trainingcamp/TrainingCamp";
import LearningPath from "../components/learningpath/LearningPath";
import Feature from "../components/feature/Feature";
export default {
  name: "long",
  components: {
    SlideShow,
    PracticeCourse,
    Classical,
    GoodLesson,
    BasicSkills,
    BackendDevelopment,
    BigData,
    TrainingCamp,
    LearningPath,
    Feature
  },
  props: {},
  data() {
    return {
      flag: true,
      input: "",
      show: false
    };
  },
  methods: {
    cha() {
      this.flag = !this.flag;
    },
    handleScroll() {
      // 得到页面滚动的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > this.toheight) {
        this.show = true;
      } else {
        this.show = false;
      }
      // 判断页面滚动的距离是否大于吸顶元素的位置
      // console.log(scrollTop);
    }
  },
  mounted() {
    // handleScroll为页面滚动的监听回调
    this.$nextTick(function() {
      //滚动监听事件
      window.addEventListener("scroll", this.handleScroll);
    });
  },
  created() {},
  filters: {},
  computed: {
    //控制高度显示{
    toheight() {
      return this.flag ? 210 : 150;
    }
  },
  watch: {},
  directives: {},
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang='scss' >
* {
  margin: 0;
  padding: 0;
}
.advertising {
  height: 60px;
  min-width: 1080px;
  background: url("../../src/assets/img/advertising.png");
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
  top: 20px;
  left: 97%;
}
.advertising button:hover {
  cursor: pointer;
}

.top {
  width: 74vw;
  height: 85px;
  min-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .top-left {
    width: 31%;
    display: flex;
    align-items: center;
    .logo {
      width: 48%;
      img {
        width: 100%;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .slogan {
      width: 52%;
      font-size: 18px;
      color: #274a59;
    }
  }

  .home-right-menu {
    display: flex;
    height: 45px;
    a {
      height: 15px;
      padding: 0 6px;
      margin: 15px 0 0;
      text-align: center;
      color: #999;
      text-decoration: none;
      line-height: 15px;
      &:hover {
        cursor: pointer;
        color: #08bf91;
      }
      &:nth-child(1) {
        border-right: 1px solid #999;
      }
    }
    .sign-btns {
      display: flex;
      list-style: none;
      li {
        height: 45px;
        line-height: 45px;
        span {
          padding: 0 10px;
        }
        &:nth-child(1) {
          color: #08bf91;
          &:hover {
            cursor: pointer;
            color: #047c5e;
          }
        }
        &:nth-child(2) {
          background-color: #08bf91;
          color: #fff;
        }
      }
    }
  }
}
// 吸顶
.top-container {
  height: 72px;
  background-color: #fff;
  position: fixed;
  top: 0px;
  width: 100vw;
  min-width: 1080px;
  z-index: 999;
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    .container-left {
      height: 72px;
      img {
        width: 122px;
        height: 50px;
        margin-top: 11px;
      }
    }
    .midle {
      display: flex;
      align-items: center;
      .midle-menus {
        height: 65px;
        line-height: 65px;
        z-index: 3 !important;
        width: 93px;
        a {
          padding: 0 10px;
          color: #000;
          &:hover {
            color: #08bf91;
            display: block;
          }
          &:hover ul {
            color: black;
            display: block;
          }
        }
        ul {
          width: 160%;
          background-color: #fff;
          border-radius: 5px;
          display: none;
          li {
            line-height: 40px;
            &:hover {
              color: #08bf91;
              background-color: rgba(236, 232, 232, 0.5);
            }
            span {
              padding: 0 10px;
            }
          }
        }
        .hot {
          color: #fff;
          width: 29%;
          height: 36%;
          background-color: red;
          font-size: 12px;
          line-height: 2 !important;
          border-radius: 10px;
          position: relative;
          top: -60px;
          left: 35px;
          span {
            margin: 0 2px;
          }
        }
      }
      .home-right-menu {
        display: flex;
        height: 45px;
        a {
          height: 15px;
          padding: 0 6px;
          margin: 15px 0 0;
          text-align: center;
          color: #999;
          text-decoration: none;
          line-height: 15px;
          &:hover {
            cursor: pointer;
            color: #08bf91;
          }
          &:nth-child(1) {
            border-right: 1px solid #999;
          }
        }
        .sign-btns {
          display: flex;
          list-style: none;
          li {
            height: 45px;
            line-height: 45px;
            span {
              padding: 0 10px;
            }
            &:nth-child(1) {
              color: #08bf91;
              &:hover {
                cursor: pointer;
                color: #047c5e;
              }
            }
            &:nth-child(2) {
              background-color: #08bf91;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
.home-nav {
  width: 74vw;
  height: 65px;
  min-width: 1080px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .home-nav-left {
    width: 23%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #08bf91;
    .left-menu-list {
      margin-left: 25px;
      span {
        color: #fff;
        margin-left: 8px;
      }
    }
  }
  // <!-- 全部课程 路径 训练营-->
  .midle {
    width: 50%;
    display: flex;
    align-items: center;
    .midle-menus {
      height: 65px;
      line-height: 65px;
      z-index: 3 !important;
      a {
        padding: 0 10px;
        color: #000;
        &:hover {
          color: #08bf91;
          display: block;
        }
        &:hover ul {
          color: black;
          display: block;
        }
      }
      ul {
        width: 160%;
        background-color: #fff;
        border-radius: 5px;
        display: none;
        li {
          line-height: 40px;
          &:hover {
            color: #08bf91;
            background-color: rgba(236, 232, 232, 0.5);
          }
          span {
            padding: 0 10px;
          }
        }
      }
      .hot {
        color: #fff;
        width: 50%;
        height: 36%;
        background-color: red;
        font-size: 12px;
        line-height: 2 !important;
        border-radius: 10px;
        position: relative;
        top: -60px;
        left: 35px;
        span {
          margin: 0 2px;
        }
      }
    }
  }
  .home-nav-right {
    margin-right: 25px;
  }
}
.footer {
  height: 261px;
  min-width: 1080px;
  background-color: #333333;
  .footer-body {
    width: 74vw;
    min-width: 1080px;
    margin: 0 auto;
    height: 213.2px;
    padding: 20px 15px;
    .row {
      display: flex;
      flex-wrap: wrap;
      // 底部第一条
      .col-md-4 {
        width: 33.33333%;
        .slogan {
          padding: 10px 0;
          color: #0c9;
          font-size: 28px;
        }
        .icon {
          display: flex;
          margin-top: 10px;
          position: relative;
          .erweima {
            width: 70px;
            position: absolute;
            top: -72px;
            left: -56px;
            display: none;
          }
          .weixin {
            background-color: #636469;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: 40px;
            &:hover .erweima {
              display: block;
            }
            .wei {
              width: 32px;
            }
          }
          .weibo {
            background-color: #636469;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            img {
              width: 32px;
            }
          }
        }
      }
      // 底部后4条
      .col-md-2 {
        line-height: 1.5;
        width: 16.66667%;
        .title {
          margin-bottom: 10px;
          color: #999;
          font-size: 18px;
          font-weight: 600;
        }
        .link {
          margin-bottom: 2px;
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
  .footer-footer {
    height: 47.6px;
    background-color: #000;
    text-align: center;
    line-height: 47.6px;
    span {
      color: #666;
      font-size: 12px;
    }
  }
}
</style>
