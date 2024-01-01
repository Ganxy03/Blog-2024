<template>
  <div>
    <div class="back-pic">
      <div id="header">
        <div class="head-container">
          <div class="head-logo">
            <i @click="openSideBar" class="el-icon-s-unfold"></i>
            <img src="../assets/img/logo.jpg" alt="">
            <h2>Ganxy</h2>
            <i @click="openSerchDialog" class="el-icon-search"></i>
          </div>
        </div>
      </div>
      <div class="flag-text">
        <div class="fl-title">
          <h2>青墨书晚风</h2>
        </div>
        <div class="start-btn-group">
          <el-button><i class="el-icon-arrow-down"></i>Start</el-button>
          <el-button class="display-none"><i class="el-icon-s-promotion"></i>GitHub</el-button>
        </div>
      </div>
    </div>
    <div style="height: 80vh;background-color: blueviolet;">123</div>
    <div id="scroll-top" class="scroll-top">
      <a href="#">
        顶部
      </a>
    </div>
    <!-- 侧边栏 -->
    <el-drawer
      title="菜单"
      :visible.sync="SideBar"
      direction="ltr"
      style="width: 180%">
        
    </el-drawer>

    <!-- 搜索弹窗 -->
    <el-dialog class="searchDialog" title="搜索" :visible.sync="SerchDialog">
      
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      SideBar: false,
      SerchDialog: false
    }
  },
  methods: {
    openSideBar() {
      this.SideBar = true
    },
    handleClose() {
      
    },
    openSerchDialog() {
      this.SerchDialog =true
    }
  }
}

window.addEventListener('scroll', function() {
var header = document.getElementById('header');
var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
if (scrollPosition > 0) {
  header.classList.add('fixed-header');
} else {
  header.classList.remove('fixed-header');
}
});

window.addEventListener('scroll', function() {
var scrollTop = document.getElementById('scroll-top');
var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
var windowHeight = window.innerHeight || document.documentElement.clientHeight;
if (scrollPosition > windowHeight * 0.6) {
  scrollTop.style.display = 'block';
} else {
  scrollTop.style.display = 'none';
}
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  user-select: none;
  -moz-user-select: none; /* 兼容 Firefox */
  -webkit-user-select: none; /* 兼容 Chrome、Safari、Opera */
  -ms-user-select: none; /* 兼容 IE、Edge */
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: rgb(8, 147, 43);
}
.back-pic {
  height: 100vh;
  /* background-color: blueviolet; */
  background-image: url(../assets/img/bg-pc.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
#header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
}
.fixed-header {
  background-color: #42b983;
}
.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  display: none;
}
.head-container {
  width: 80%;
  height: 60px;
  margin: 0 auto;
  /* background-color: blueviolet; */
}
.head-logo {
  width: 160px;
  height: 60px;
  /* background-color: burlywood; */
  font-family: 'Comic Sans MS';
  color: #fff;
}
.head-logo img {
  margin-top: 10px;
  margin-left: 15px;
  width: 45px;
  float: left;
  border-radius: 50%;
}
.head-logo h2 {
  margin-left: 5px;
  line-height: 60px;
  float: left;
}
.none {
  display: none;
}
.el-icon-s-unfold::before {
  display: none;
}
.el-icon-search {
  position: fixed;
  right: 11%;
  top: 20px;
}
.searchDialog .el-dialog {
  height: 65vh;
  width: 45%;
}
.flag-text {
  width: 75%;
  height: 70vh;
  float: left;
  margin-top: 25vh;
  margin-left: 12.5%;
  /* background-color: burlywood; */
}
.fl-title h2 {
  font-size: 42px;
  text-align: center;
  color: #fff;
  font-family: "楷体";
  margin-top: 5vh;
  /* font-weight: 400; */
}
.start-btn-group {
  width: 100%;
  height: 50px;
  margin-top: 27.5vh;
  /* background-color: brown; */
}
.start-btn-group .el-button {
  width: 125px;
  font-size: 14px;
  border-radius: 23px;
  margin-top: 5px;
  background-color: transparent;
  opacity: 1;
  color: #fff;
  border: 1px solid #fff;
}
@media screen and (max-width: 768px) {
  .back-pic {
    background-image: url(../assets/img/bg.png);
  }
  .head-container {
    width: 100%;
  }
  .head-logo {
    margin: 0 auto;
  }
  .head-logo img {
    width: 35px;
    margin-top: 12.5px;
  }
  .el-icon-s-unfold::before {
    display: block;
    position: fixed;
    left: 11%;
    top: 22px;
  }
  .el-icon-search {
    top: 22px;
  }
  .searchDialog .el-dialog {
      width: 90%;
    }
  .fl-title h2 {
    font-size: 32px;
    margin-top: 0;
  }
  .start-btn-group {
    margin-top: 45vh;
  }
}
@media screen and (max-width: 356px) {
    .start-btn-group .display-none {
        display: none;
    }
}
</style>