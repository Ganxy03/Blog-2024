<template>
    <div class="SideBar-container">
        <el-row>
            <el-col :span="24">
                <Personal class="PersonalCard" />
            </el-col>
        </el-row>
        <el-row>
            <el-col class="MenuCard" :span="24">
                <div class="cardTitle tl">
                    <i class="el-icon-c-scale-to-original"></i>目录
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <ArticleList class="ArticleList"/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Personal from '../Home/SideBar/PersonalCard.vue'
import ArticleList from '../Home/SideBar/ArticleLastest.vue'
export default {
    components: {
        Personal,
        ArticleList
    }
}
</script>
<style>
.SideBar-container {
    width: 100%;
    height: 600px;
    /* background-color: rgb(28, 232, 232); */
}
.SideBar-container .PersonalCard {
    width: calc(100% - 24px);
    height: 240px;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 12px;
}
.SideBar-container .MenuCard {
    width: 100%;
    height: 180px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 20px;
}
.SideBar-container .MenuCard .cardTitle {
    font-size: 16px;
    margin: 0 12px;
    padding: 0 3px;
    font-weight: 700;
}
.SideBar-container .ArticleList {
    margin-top: 20px;
}

ul {
    margin: 0;
    padding: 0;
}
</style>