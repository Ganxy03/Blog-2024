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
          <el-button style="margin-right: 20px"><i class="el-icon-arrow-down"></i>Start</el-button>
          <a target="_blank" href="https://github.com/Ganxy03">
              <el-button class="display-none">
                  <i class="el-icon-s-promotion"></i>GitHub
              </el-button>
          </a>
        </div>
      </div>
    </div>
    <div class="main-back-pic">
      <div class="content">
        <div class="side-author-info">
          <div class="avatar">
            <img src="../assets/img/logo.png" alt="">
          </div>
          <h2>如果梦醒一分钟</h2>
          <p>蒹葭苍苍，白露为霜。</p>
          <p>所谓伊人，在水一方。</p>
        </div>
        <div class="main-block main-bilibili-video">
          <iframe src="//player.bilibili.com/player.html?aid=835617382&bvid=BV1ng4y1r7Xa&cid=1386573431&page=1&high_quality=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
        </div>
        <div class="main-block main-github-calendar">
          <h2>Github日历</h2>
          <img src="https://ghchart.rshah.org/Ganxy03" />
        </div>
        <div class="main-block main-author-info"></div>
        <div class="main-block main-site-info"></div>
      </div>
    </div>
    <div class="fish-flash"></div>
    <div class="site-info">
      <div class="site-info-main">
        <span>&copy;2023-2024|Ganxy</span><br>
        <span>本站已经安全运行{{ siteDays }}</span><br>
        <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
            <span style="color: rgb(255,255,255);">浙ICP备2022019862</span>
        </a>
      </div>
      <div id="aplayer_bottom" style="text-align: left;"></div>
    </div>
    <div id="scroll-top" class="scroll-top">
      <a href="#">
        <i class="el-icon-arrow-up"></i>
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
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
export default {
  data() {
    return {
      SideBar: false,
      SerchDialog: false,
      siteDays: '',
      info_bottom: {
        fixed: true, // 不开启吸底模式
        listFolded: true, // 折叠歌曲列表
        autoplay: false, // 开启自动播放
        preload: "auto", // 自动预加载歌曲
        loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
        order: "random", //  播放模式，list列表播放, random随机播放
        lrcType: 2,
      },
      audio: [
        {
            name: 'Sketch Plane',
            artist: 'Cam Kelley',
            url: 'http://ganxy03.cn/music/Sketch%20Plane.mp3',
            cover: '',
        },
        {
            name: '罗生门',
            artist: '梨冻紧',
            url: 'http://ganxy03.cn/music/%E7%BD%97%E7%94%9F%E9%97%A8.mp3',
            cover: '',
        },
        {
            name: 'Booty Music',
            artist: 'Cam Kelley',
            url: 'http://ganxy03.cn/music/Booty%20Music.mp3',
            cover: '',
        },
        {
            name: '思念是种病',
            artist: 'Cam Kelley',
            url: 'http://ganxy03.cn/music/%E6%80%9D%E5%BF%B5%E6%98%AF%E7%A7%8D%E7%97%85.mp3',
            cover: '',
        },
        {
            name: '带我去找夜生活',
            artist: '告五人',
            url: 'http://ganxy03.cn/music/%E5%B8%A6%E6%88%91%E5%8E%BB%E6%89%BE%E5%A4%9C%E7%94%9F%E6%B4%BB.mp3',
            cover: '',
        },
      ],
    }
  },
  mounted() {
    this.calculateSiteDays();
    setInterval(() => {
      this.calculateSiteDays();
    }, 1000);
    this.initPlayer();
  },
  methods: {
    openSideBar() {
      this.SideBar = true
    },
    handleClose() {
      
    },
    openSerchDialog() {
      this.SerchDialog =true
    },
    calculateSiteDays() {
      const startDate = new Date('2023/12/31 15:01:00');
      const currentDate = new Date();
      const diff = currentDate.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      this.siteDays = `${days}天${hours}时${minutes}分${seconds}秒`;
    },
    initPlayer() {
        // eslint-disable-next-line no-unused-vars
        const ap = new APlayer({
            container: document.getElementById("aplayer_bottom"),
            audio: this.audio, // 音乐信息
            ...this.info_bottom, // 其他配置信息
        });
        // eslint-disable-next-line no-unused-vars
        // const ap2 = new APlayer({
        //     container: document.getElementById("aplayer_main"),
        //     audio: this.audio, // 音乐信息
        //     ...this.info_main, // 其他配置信息
        // });
    },
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
  z-index: 999;
}
.fixed-header {
  background-color: #42b983;
}
.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #18b092;
  color: #fff;
  padding: 15px;
  border-radius: 50%;
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

.main-back-pic {
  background-image: url(../assets/img/0215.jpg);
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-attachment: fixed;
}
.content {
  /* height: 2000px; */
  width: 70%;
  margin: 0 auto;
  /* background-color: red; */
  background-attachment: fixed;
}
.main-side-block {
  width: 24%;
  height: 185px;
  border-radius: 10px;
  background-color: #fff;
  float: left;
}
.side-author-info {
  width: 24%;
  border-radius: 10px;
  background-color: #fff;
  float: left;
  background-image: url(../assets/img/newstyle.gif);
  background-repeat: no-repeat;
}
.side-author-info .avatar {
  width: 32%;
  display: inline-block;
  padding: 10px;
  background-color: white;
  border: 1px solid gray;
}
.side-author-info img{
  width: 100%;
  border-radius: 50%;
}
.side-author-info h2 {
  font-size: 24px;
}
.side-author-info p {
  font-size: 16px;
}
.main-block {
  width: 75%;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  margin-left: 25%;
}
.main-bilibili-video {
  /* height: 600px; */
}
.main-github-calendar {
  /* height: 200px; */
}
.main-github-calendar h2 {
  color: #18b092;
}
.main-github-calendar img {
  width: 98%;
}
.main-author-info {
  height: 300px;
  display: none;
}
.main-site-info {
  height: 300px;
  margin-bottom: 0;
  display: none;
}

.fish-flash {
  width: 100%;
  height: 153px;
  background-color: #42b983;
}
.site-info {
  height: 110px;
  width: 100%;
  background-color: #42b983;
}
.site-info-main {
  height: 54px;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  /*background-color: rgb(43, 211, 226);*/
}
.site-info-main a {
    text-decoration: none;
    color: #fff;
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
  .main-back-pic {
    background-image: url(../assets/img/t\ \(17\).jpg);
  }
  .content {
    width: 90%;
  }
  .side-author-info {
    display: none;
  }
  .main-block {
    width: 100%;
    margin-left: 0;
  }
  .main-side-block {
    display: none;
  }
  .main-github-calendar {
    /* height: 90px; */
  }
  .main-github-calendar img {
    width: 90%;
  }
  .main-author-info {
    display: block;
  }
  .main-site-info {
    display: block;
  }
}
@media screen and (max-width: 356px) {
    .start-btn-group .display-none {
        display: none;
    }
}
</style>