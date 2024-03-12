<template>
    <div>
        <HeadNav />
        <div class="ArticlePage">
            <el-row class="Article-Container pc">
                <el-col :span="6">
                    <SideBar />
                </el-col>
                <el-col :span="18">
                    <ArticleShow />
                </el-col>
                
                <Foot/>
            </el-row>
            <el-row class="Article-Container move">
                <el-col :span="24">
                    <ArticleShow />
                </el-col>
                <Foot/>
            </el-row>
        </div>
    </div>
</template>
<script>
import HeadNav from './Module/Nav/HeadNav.vue'
import SideBar from './Module/Nav/SideBar.vue'
import ArticleShow from './Module/Article/ArticleShow.vue'

import Foot from './Module/Foot/FooterInfo.vue'
export default {
    components: {
        HeadNav,
        SideBar,
        ArticleShow,
        Foot
    }
}
</script>
<style>
.ArticlePage {
    width: 100%;
    min-height: calc(100vh - 70px);
    /* background-color: red; */
    background-image: url(@/assets/img/banner.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-attachment: fixed;
}
.Article-Container {
    width: 70%;
    min-height: calc(100vh - 70px);
    background-color: rgba(255, 255, 255, 0.6);
    margin: 0 auto;
    padding: 16px;
}
.ArticlePage .move {
    display: none;
}
@media screen and (max-width: 1020px) {
    .Article-Container {
        width: 96%;
    }
    .ArticlePage .pc {
        display: none;
    }
    .ArticlePage .move {
        display: block;
    }
}
</style>