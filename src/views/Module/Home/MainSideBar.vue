<template>
    <div>
        <el-row>
            <el-col class="sideBar_itemCard" :span="24">
                <div class="itemCard_PersonalCard">
                    <PersonalCard />
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="sideBar_itemCard" :span="24">
                <!-- 最新文章 -->
                <div class="itemCard_Common">
                    <ArticleLastest />
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="sideBar_itemCard" :span="24">
                <!-- 站点信息 -->
                <div class="itemCard_Common">
                    <WebSiteInfo />
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import PersonalCard from './SideBar/PersonalCard.vue'
import ArticleLastest from './SideBar/ArticleLastest.vue';
import WebSiteInfo from './SideBar/WebSiteInfo.vue';
export default {
    components: {
        PersonalCard,
        ArticleLastest,
        WebSiteInfo
    }
}
</script>
<style>
.sideBar_itemCard {
    min-height: 25vh;
}
.el-card .el-card_body {
    padding: 0;
}
.itemCard_PersonalCard {
    height: 240px;
    width: calc(100% - 32px);
    margin: 0 16px;
    background-color: #fff;
    border-radius: 10px;
}
.itemCard_Common {
    margin-top: 20px;
    min-height: 220px;
    /* background-color: #fff; */
    border-radius: 10px;
}



</style>