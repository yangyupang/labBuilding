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
  </div>
</template>

<script >
import SlideShow from '../components/slideshow/SlideShow'
import PracticeCourse from '../components/practicecourse/PracticeCourse'
import Classical from '../components/classical/Classical'
import GoodLesson from '../components/goodlesson/GoodLesson'
import BasicSkills from '../components/basicskills/BasicSkills'
import BackendDevelopment from '../components/backenddevelopment/BackendDevelopment'
import BigData from '../components/bigdata/BigData'
export default {
  name: "long",
  components: {SlideShow,PracticeCourse,Classical,GoodLesson,BasicSkills,BackendDevelopment,BigData},
  props: {},
  data() {
    return {
      flag: true,
      input: "",
    };
  },
  methods: {
    cha() {
      this.flag = !this.flag;
    },
  },
  mounted() {
    
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang='scss' >
* {
  margin: 0;
  padding: 0;
}
.advertising {
  width: 100vw;
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


</style>
