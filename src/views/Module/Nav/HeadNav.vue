<template>
    <div class="headNav-container" >
        
        <div id="header" class="headNav_innerBox" :class="{ 'initial-bg': isInitialBg }">
            <div @click="LinkToHome" class="logo cp"></div>
            <!-- <ul class="nav pc">
                <li @click="LinkToHome" class="navItem cp">
                    首页
                </li>
                <li class="navItem cp">
                    归档
                </li>
                <li class="navItem cp">
                    清单
                </li>
                <li @click="LinkToComment" class="navItem cp">
                    留言板
                </li>
                <li @click="LinkToAbout" class="navItem cp">
                    关于
                </li>
                <el-button class="search-ico" type="text">
                    <i style="font-size: 20px" class="el-icon-search"></i>
                </el-button>
            </ul> -->
            <el-menu :default-active="activeIndex" class=" nav pc" mode="horizontal">
                <el-menu-item @click="LinkToHome" index="1">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">归档</template>
                    <el-menu-item @click="LinkToSort" index="2-1">随想</el-menu-item>
                    <el-menu-item @click="LinkToSort" index="2-2">技术</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">清单</template>
                    <el-menu-item @click="LinkToSport" index="3-1">记录</el-menu-item>
                    <el-menu-item @click="LinkToAI" index="3-2">AI对话</el-menu-item>
                    <el-menu-item @click="LinkToChat" index="3-3">聊天室</el-menu-item>
                    <el-menu-item @click="LinkToMusic" index="3-4">音乐</el-menu-item>
                    <el-menu-item @click="LinkToDrama" index="3-5">番剧</el-menu-item>
                </el-submenu>
                <el-menu-item @click="LinkToComment" index="4">留言板</el-menu-item>
                <el-submenu index="5">
                    <template slot="title">关于</template>
                    <el-menu-item @click="LinkToAbout" index="5-1">我？</el-menu-item>
                    <el-menu-item @click="LinkToStatistic" index="5-2">统计</el-menu-item>
                    <el-menu-item @click="LinkToLogin" index="5-3">后台</el-menu-item>
                </el-submenu>
            </el-menu>
            <el-button @click="openNavDrawer" class="search-ico move" type="text">
                <i style="font-size: 32px;color: #fff;" class="el-icon-s-fold"></i>
            </el-button>
        </div>

        <Sidebar class="Head-sideNavBar" :visible.sync="navDrawer" header="Right Sidebar" position="left" style="width: 50%;">
            <div class="logo_container">
                <div class="logo"></div>
            </div>
            <div class="name">Ganxy</div>
            <div class="motto">
                不应有恨 何事长向别时圆
            </div>
            <div class="social_container">
                <div class="social">
                    <i class="icon_github pa"></i>
                    <i class="icon_mail pa"></i>
                    <i class="icon_qq pa"></i>
                </div>
            </div>
            <div class="search">
                <el-input placeholder="搜索..">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <ul class="nav tl">
                <li @click="LinkToHome"><i class="el-icon-s-home"></i>首页</li>
                <li @click="toggleList_sort"><i class="el-icon-s-management"></i>归档</li>
                <ul class="sub-list" v-show="showList_sort">
                    <li @click="LinkToSort">随想<i class="el-icon-edit"></i></li>
                    <li @click="LinkToSort">技术<i class="el-icon-finished"></i></li>
                </ul>
                <li @click="toggleList"><i class="el-icon-s-order"></i>清单</li>
                <ul class="sub-list" v-show="showList">
                    <li @click="LinkToSport">记录<i class="el-icon-chicken"></i></li>
                    <li @click="LinkToAI">AI对话<i class="el-icon-guide"></i></li>
                    <li @click="LinkToChat">聊天室<i class="el-icon-news"></i></li>
                    <li @click="LinkToMusic">音乐<i class="el-icon-headset"></i></li>
                    <li @click="LinkToDrama">番剧<i class="el-icon-video-play"></i></li>
                </ul>
                <li @click="LinkToComment"><i class="el-icon-edit"></i>留言板</li>
                <li @click="toggleList_about"><i class="el-icon-warning"></i>关于</li>
                <ul class="sub-list" v-show="showList_about">
                    <li @click="LinkToAbout">我？<i class="el-icon-user"></i></li>
                    <li @click="LinkToStatistic">统计<i class="el-icon-data-analysis"></i></li>
                    <li @click="LinkToLogin">后台<i class="el-icon-setting"></i></li>
                </ul>
            </ul>
            <div class="foot">
                <p>&copy;Ganxy|2024</p>
                <p style="font-size: 11px;">浙ICP备2022019862号-1</p>
            </div>
        </Sidebar>
        
        <!-- <el-drawer
        title="导航"
        :visible.sync="navDrawer"
        :direction="direction"
        size="50%"
        :append-to-body="true"
        class="Head-sideNavBar">

        <div class="logo_container">
            <div class="logo"></div>
        </div>
        <div class="name">Ganxy</div>
        <div class="motto">
            不应有恨 何事长向别时圆
        </div>
        <div class="social_container">
            <div class="social">
                <i class="icon_github pa"></i>
                <i class="icon_mail pa"></i>
                <i class="icon_qq pa"></i>
            </div>
        </div>
        <div class="search">
            <el-input placeholder="搜索..">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <ul class="nav tl">
            <li @click="LinkToHome"><i class="el-icon-s-home"></i>首页</li>
            <li @click="toggleList_sort"><i class="el-icon-s-management"></i>归档</li>
            <ul class="sub-list" v-show="showList_sort">
                <li @click="LinkToSort">随想<i class="el-icon-edit"></i></li>
                <li @click="LinkToSort">技术<i class="el-icon-finished"></i></li>
            </ul>
            <li @click="toggleList"><i class="el-icon-s-order"></i>清单</li>
            <ul class="sub-list" v-show="showList">
                <li @click="LinkToSport">记录<i class="el-icon-chicken"></i></li>
                <li @click="LinkToAI">AI对话<i class="el-icon-guide"></i></li>
                <li @click="LinkToChat">聊天室<i class="el-icon-news"></i></li>
                <li @click="LinkToMusic">音乐<i class="el-icon-headset"></i></li>
                <li @click="LinkToDrama">番剧<i class="el-icon-video-play"></i></li>
            </ul>
            <li @click="LinkToComment"><i class="el-icon-edit"></i>留言板</li>
            <li @click="toggleList_about"><i class="el-icon-warning"></i>关于</li>
            <ul class="sub-list" v-show="showList_about">
                <li @click="LinkToAbout">我？<i class="el-icon-user"></i></li>
                <li @click="LinkToStatistic">统计<i class="el-icon-data-analysis"></i></li>
                <li @click="LinkToLogin">后台<i class="el-icon-setting"></i></li>
            </ul>
        </ul>
        <div class="foot">
            <p>&copy;Ganxy|2024</p>
            <p style="font-size: 11px;">浙ICP备2022019862号-1</p>
        </div>

        </el-drawer> -->
    </div>
</template>
<script>
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 0) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
})
// import { useRouter } from 'vue-router';
export default {
    data() {
        return {
            navDrawer: false,
            isInitialBg: true,
            showList: false,
            showList_about: false,
            showList_sort: false,
            activeIndex: '',
            direction: 'rtl'
        }
    },
    created() {
        this.judgeRouter()
    },
    methods: {
        judgeRouter() {
            console.log(this.$router.currentRoute.path)
            if(this.$router.currentRoute.path === '/') {
                this.activeIndex = '1';
            } else if(this.$router.currentRoute.path === '/sort') {
                this.activeIndex = '2-1';
            } else if(this.$router.currentRoute.path === '/sport') {
                this.activeIndex = '3-1';
            } else if(this.$router.currentRoute.path === '/ai') {
                this.activeIndex = '3-2';
            } else if(this.$router.currentRoute.path === '/chat') {
                this.activeIndex = '3-3';
            } else if(this.$router.currentRoute.path === '/music') {
                this.activeIndex = '3-4';
            } else if(this.$router.currentRoute.path === '/drama') {
                this.activeIndex = '3-5';
            } else if(this.$router.currentRoute.path === '/comment') {
                this.activeIndex = '4';
            } else if(this.$router.currentRoute.path === '/about') {
                this.activeIndex = '5-1';
            } else if(this.$router.currentRoute.path === '/statistic') {
                this.activeIndex = '5-2';
            }
        },
        handleClose(done) {
            done()
        },
        openNavDrawer() {
            this.navDrawer = true
        },
        LinkToHome() {
            this.activeIndex = '1'
            this.$router.push('/').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToSort() {
            this.activeIndex = '2'
            this.$router.push('/sort').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToSport() {
            this.activeIndex = '3-1'
            this.$router.push('/sport').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToAI() {
            this.activeIndex = '3-2'
            this.$router.push('/ai').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToChat() {
            this.activeIndex = '3-3'
            this.$router.push('/chat').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToMusic() {
            this.activeIndex = '3-4'
            this.$router.push('/music').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToDrama() {
            this.activeIndex = '3-5'
            this.$router.push('/drama').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToComment() {
            this.activeIndex = "4"
            this.$router.push('/comment').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToAbout() {
            this.activeIndex = "5-1"
            this.$router.push('/about').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToStatistic() {
            this.activeIndex = "5-2"
            this.$router.push('/statistic').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        LinkToLogin() {
            this.activeIndex = "5-3"
            this.$router.push('/login').catch(err => {
                this.$message({
                    message: '当前页面就是哦',
                    type: 'warning'
                })
                console.log(err)
            })
        },
        toggleList() {
            this.showList = !this.showList;
        },
        toggleList_about() {
            this.showList_about = !this.showList_about
        },
        toggleList_sort() {
            this.showList_sort = !this.showList_sort
        },
    }
}
</script>
<style>
.headNav-container {
    height: 70px;
    color: #fff;
    width: 100%;
    padding: 0;
    margin: 0;
    /* padding: 0 12px; */
    /* background-color: rgba(235, 194, 98, 0.6); */
}
.headNav_innerBox {
    padding: 0 120px;
    height: 70px;
    display: flex;
    align-items: center;
    width: calc(100% + 24px);
    justify-content: space-between;
    /* height: 100px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99; */
}
.headNav-container .headNav_innerBox .move {
    display: none;
}
.headNav_innerBox .logo {
    width: 50px;
    height: 50px;
    background: url('@/assets/img/logo.png') 50% no-repeat;
    background-size: cover;
    border-radius: 25px;
}
.headNav_innerBox .nav {
    width: 60%;
    display: flex;
    justify-content: space-between;
}
.headNav_innerBox .nav .navItem {
    line-height: 70px;
    list-style: none;
    font-size: 20px;
    font-weight: 700;
    padding: 0 12px;
}
.headNav_innerBox .nav .navItem:hover {
    color: #e6922c;
    background-color: aliceblue;
}
.navInDrawer {
    height: calc(100vh - 80px);
    width: 100%;
    /* background-color: #e6922c; */
}
.navInDrawer_Item {
    height: 60px;
    width: 100%;
    font-size: 24px;
    line-height: 60px;
}
.navInDrawer_Item:hover {
    color: #fff;
    background-color: #e6922c;
}


.initial-bg {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(194, 194, 194, 0.1));
}
#header {
    position: fixed;
    top: 0;
    /* width: calc(100% - 240px); */
    width: 100%;
    height: 60px;
    z-index: 999;
}
.fixed-header {
    /* background-color: #18b092; */
    background-color: rgba(210,182,179,0.6);
    /* background-color: rgba(252,204,181,0.6); */
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(194, 194, 194, 0.1)); */
}

.Head-sideNavBar {
    /* position: relative; */
    height: 100vh;
}
.p-sidebar-content {
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
}
.Head-sideNavBar .logo_container {
    width: 100%;
    height: 100px;
    /* background-color: #e6922c; */
    background: url(@/assets/img/newstyle.gif) 50% no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Head-sideNavBar .logo_container .logo {
    background: url(@/assets/img/logo.png) 50% no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.Head-sideNavBar .logo_container .logo {
    background: url(@/assets/img/logo.png) 50% no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.Head-sideNavBar .name {
    font-weight: 700;
    font-size: 24px;
    height: 50px;
    line-height: 50px;
    color: #333;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.Head-sideNavBar .motto {
    font-size: 11px;
    font-family: '仿宋';
    margin: 0 12px;
    padding-bottom: 6px;
    color: #333;
    border-bottom: 1px solid rgb(229, 233, 239);

}
.Head-sideNavBar .social_container {
    height: 30px;
    /* background-color: #e6922c; */
}
.Head-sideNavBar .social_container .social {
    width: 60%;
    margin: 0 auto;
    margin-top: 8px;
    position: relative;
}
.Head-sideNavBar .search {
    width: calc(100% - 36px);
    height: 40px;
    margin: 0 18px;
    background-color: #fafafa;
}
.Head-sideNavBar .search .el-input {
    margin-top: 5px;
}
.Head-sideNavBar .search .el-input input {
    height: 30px;
}
.Head-sideNavBar .nav {
    margin: 0 16px;
}
.Head-sideNavBar .nav li {
    list-style: none;
    color: #333;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    height: 30px;
    width: 100%;
    margin: 6px 0;
}
.Head-sideNavBar .foot {
    width: calc(100% - 32px);
    color: #B9B9B9;
    position: absolute;
    bottom: 12px;
    text-align: center;
}



.headNav-container .el-menu {
    background-color: rgba(255, 255, 255, 0);
}
.headNav-container .el-menu.el-menu--horizontal {
    border-bottom: none
}
.headNav-container .el-submenu__title {
    font-size: 20px;
    font-weight: 700;
}
.headNav-container .el-menu-item {
    font-size: 20px;
    font-weight: 700;
}
.headNav-container .el-menu--horizontal>.el-menu-item.is-active {
    color: #fff;
    border-bottom: 2px solid #ffc640;
}
.headNav-container .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom: none;
}
.headNav-container .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    color: #fff;
}
.headNav-container .el-menu--horizontal>.el-submenu.is-active .el-submenu__title:hover {
    color: #e6922c;
}
.headNav-container .el-menu--horizontal>.el-submenu.is-active {
    border-bottom: 2px solid #ffc640;
}

/* .headNav-container .el-menu--horizontal .el-menu {
    background-color: #B9B9B9;
}
.headNav-container .el-menu--horizontal .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu--horizontal .el-menu .el-submenu__title {
    background-color: #B9B9B9;
} */
/* 二级菜单 */
.sub-list {
    overflow: hidden;
    min-height: calc(34px * 2 + 12px);
    transition: max-height 0.3s ease; /* 添加过渡效果 */
}
.sub-list li {
    width: calc(100% - 22px);
    padding: 5px;
    background: #f0f0f0;
    border-radius: 10px;
}
.sub-list li:hover {
    background: #e0e0e0;
}
.sub-list .v-show {
    max-height: 800px; /* 设置展开后的最大高度 */
}

@media screen and (max-width: 870px) {
    .headNav-container .headNav_innerBox .pc{
        display: none;
    }
    .headNav-container .headNav_innerBox .move{
        display: block;
    }
    .headNav_innerBox {
        padding: 12px;
        justify-content: space-between;
    }
    #header {
        /* width: calc(100% - 24px); */
        width: 100%;
    }
}
@media screen and (max-height: 768px) {
    .Head-sideNavBar .foot {
        position: static;
    }
}
/* @media screen and (max-width: 480px) {
    .headNav_innerBox {
        padding: 12px;
        justify-content: space-between;
    }
    #header {
        width: calc(100% - 24px);
    }
} */


/* 图标 */
.icon_github {
    width: 16px;
    height: 16px;
    background: url(@/assets/img/Icon/i_github.png) 50% no-repeat;
    left: 25%;
}
.icon_qq {
    width: 16px;
    height: 16px;
    background: url(@/assets/img/Icon/i_qq.png) 50% no-repeat;
    left: 50%;
}
.icon_mail {
    width: 16px;
    height: 16px;
    background: url(@/assets/img/Icon/i_mail.png) 50% no-repeat;
    left: 75%;
}
</style>