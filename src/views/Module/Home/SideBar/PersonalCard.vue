<template>
    <div class="PersoanlCard-container">
        <!-- 背景图 -->
        <div class="Personal_bac">
            <div class="avatar"></div>
        </div>
        <div class="Personal_content">
            <!-- 内容 -->
            <h4 class="name">Ganxy</h4>
            <p class="slogan">运气是计划之外的东西</p>
            <el-row class="statistic">
                <el-col class="statistic_item" :span="12">
                    <p>261</p>
                    <p>文章数</p>
                </el-col>
                <el-col class="statistic_item" :span="12">
                    <p>1296</p>
                    <p>评论量</p>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style>
.PersoanlCard-container .Personal_content {
    height: 160px;
    width: 100%;
    /* background-color: rgb(204, 234, 53); */
    /* box-shadow: 0 10px 5px 5px  #fff; */
}
.PersoanlCard-container .Personal_bac {
    height: 100px;
    width: 100%;
    background: url(@/assets/img/newstyle.gif) 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
}
.PersoanlCard-container .Personal_bac .avatar {
    position: absolute;
    bottom: 8px;
    width: 60px;
    height: 60px;
    background: url(@/assets/img/logo.png) 50% no-repeat;
    background-size: cover;
    border-radius: 50%;
}
.PersoanlCard-container .Personal_content .statistic {
    height: 80px;
    border-bottom: 1px solid #ebeef5;
}
.PersoanlCard-container .Personal_content .statistic .statistic_item {
    height: 45px;
    margin-top: 16px;
}
.PersoanlCard-container .Personal_content .statistic .statistic_item:nth-child(1) {
    border-right: 1px solid #ebeef5;
}
</style>