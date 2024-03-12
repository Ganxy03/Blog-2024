<template>
    <div class="About-Container">
        <div class="bannerImg">
            <HeadNav />
            <h2>About</h2>
        </div>
        <div class="main_content">
            <el-row class="first">
                <el-col style="display: flex;justify-content: flex-start;" :span="10">
                    <el-statistic
                    :value=120
                    title="发布"
                ></el-statistic>
                </el-col>
            </el-row>
            <div class="second">
                <h2>Ganxy</h2>
                <p>趁着年轻 好好犯病</p>
            </div>
            <div class="UpdateLog">
                <h2>更新日志</h2>
                <ul>
                    <li>2024.03.10 初步完成大致框架</li>
                </ul>
            </div>
            <div class="third pc">
                <h2><i class="el-icon-box"></i>我的项目</h2>
                <el-row class="project">
                    <el-col :span="12">
                        <div class="project_item">
                            <div slot="header" style="border-bottom: 1px solid #ebeef5;">
                                <span style="display: flex;justify-content: center;font-weight: 700;padding-bottom: 3px;">社团管理系统</span>
                                <el-button style="float: right; padding: 3px 0;margin-right: 12px;margin-top: 12px;" type="text">详情</el-button>
                            </div>
                            <a class="bg1"></a>
                            <div style="display: flex;justify-content: space-between;margin: 0 20px;width: calc(100% - 40px);">
                                <a href="#" target="_blank">项目地址</a>
                                <a href="#" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="project_item">
                            <div slot="header" style="border-bottom: 1px solid #ebeef5;">
                                <span style="display: flex;justify-content: center;font-weight: 700;padding-bottom: 3px;">教室检查系统</span>
                                <el-button style="float: right; padding: 3px 0;margin-right: 12px;margin-top: 12px;" type="text">详情</el-button>
                            </div>
                            <a class="bg1"></a>
                            <div style="display: flex;justify-content: space-between;margin: 0 20px;width: calc(100% - 40px);">
                                <a href="#" target="_blank">项目地址</a>
                                <a href="#" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="third move">
                <h2><i class="el-icon-box"></i>我的项目</h2>
                <el-row class="project">
                    <el-col :span="24">
                        <div class="project_item">
                            <div slot="header" style="border-bottom: 1px solid #ebeef5;">
                                <span style="display: flex;justify-content: center;font-weight: 700;padding-bottom: 3px;">社团管理系统</span>
                                <el-button style="float: right; padding: 3px 0;margin-right: 12px;margin-top: 12px;" type="text">详情</el-button>
                            </div>
                            <a class="bg1"></a>
                            <div style="display: flex;justify-content: space-between;margin: 0 20px;width: calc(100% - 40px);">
                                <a href="#" target="_blank">项目地址</a>
                                <a href="#" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="project">
                    <el-col :span="24">
                        <div class="project_item">
                            <div slot="header" style="border-bottom: 1px solid #ebeef5;">
                                <span style="display: flex;justify-content: center;font-weight: 700;padding-bottom: 3px;">教室检查系统</span>
                                <el-button style="float: right; padding: 3px 0;margin-right: 12px;margin-top: 12px;" type="text">详情</el-button>
                            </div>
                            <a class="bg1"></a>
                            <div style="display: flex;justify-content: space-between;margin: 0 20px;width: calc(100% - 40px);">
                                <a href="#" target="_blank">项目地址</a>
                                <a href="#" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        
        <div class="avatar"></div>
    </div>
</template>
<script>
import HeadNav from '../Nav/HeadNav.vue'
export default {
    components: {
        HeadNav
    }
}
</script>

<style>
body {
    background-color: #fadb7d;
}
.About-Container {
    position: relative;
}
.About-Container .bannerImg {
    height: 360px;
    width: 100%;
    background: url(@/assets/img/About/banner.jpg) 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;

}
.About-Container .bannerImg h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    color: #fff;
    position: absolute;
    top: 40%;
}
.About-Container .main_content {
    position: absolute;
    top: 300px;
    width: 70%;
    min-height: 550px;
    background-color: #fff;
    left: 15%;
    border-radius: 10px;
}
.About-Container .main_content .first {
    height: 60px;
    line-height: 30px;
}
.About-Container .main_content .first .head {
    font-size: 16px;
    color: #42B983;
}
.About-Container .avatar {
    position: absolute;
    top: 220px;
    left: calc(50% - 80px);
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: url(@/assets/img/logo.png) 50% no-repeat;
    background-size: cover;
}
.About-Container .second {
    width: 100%;
    position: absolute;
    top: 100px;
}
.About-Container .second h2 {
    /* position: absolute;
    top: 100px;
    left: calc(50% - 73.38px/2); */
}
.About-Container .second p {
    /* position: absolute;
    top: 130px;
    color: #9a9a9a;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    left: calc(50% - 132.45px/2); */
}
.About-Container .UpdateLog {
    position: absolute;
    top: 160px;
    margin: 0 auto;
    width: 100%;
}
.About-Container .UpdateLog li {
    /* list-style: none; */
    margin: 0 40%;
}
.About-Container .third {
    width: 100%;
    height: 350px;
    position: absolute;
    top: 220px;
}
.About-Container .third .project {
    min-height: 80px;
    margin: 0 60px;
    margin-top: 20px;
}
.About-Container .third .project .project_item {
    width: calc(96% - 24px);
    min-height: 80px;
    /* background-color: rgba(10, 192, 61, 0.6); */
    background-color: #e3e3e3;
    border-radius: 10px;
    margin: 0 auto;
    padding: 12px;
}
.About-Container .third .project .project_item a {
    text-decoration: none;
    color: #409EFF;
}
.About-Container .third .project .project_item .bg1 {
    background: url(@/assets/img/bg-pc.jpg) 50% no-repeat;
    background-size: contain;
    height: 150px;
    display: block;
    margin-top: 6px;
}
.About-Container .third h2 {
    /* left: calc(50% - 120px/2); */
}
.About-Container .third .project {
    /* top: 210px; */
}

@media screen and (max-width: 768px) {
    .About-Container .main_content {
        width: 90%;
        left: 5%;
        height: 750px;
    }
    .About-Container .pc {
        display: none;
    }
    .About-Container .move {
        display: block;
        min-height: 550px;
    }
    .About-Container .third .project {
        width: 80%;
        margin: 0 auto;
        margin-top: 12px;
    }
    .About-Container .third .project .project_item  {
        width: 96%;
    }
    .About-Container .third .project .project_item .bg1 {
        background-size: cover;
    }
    .About-Container .UpdateLog li {
        margin: 0 10%;
    }
}
</style>