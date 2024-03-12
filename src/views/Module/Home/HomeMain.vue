<template>
    <div class="homeMain-container">
        <div class="homeMain_main">
            <div class="pc">
                <el-row :gutter="20">
                    <el-col class="left_content" :span="6">
                        <SideBar />
                    </el-col>
                    <el-col class="right_content" :span="18">
                        <MainContent />
                    </el-col>
                </el-row>
            </div>
            <div class="move">
                <el-row :gutter="20">
                    <el-col class="right_content" :span="24">
                        <MainContent />
                    </el-col>
                </el-row>
            </div>
            <Foot />
        </div>
    </div>
</template>
<script>
import SideBar from './MainSideBar.vue'
import MainContent from './MainContent.vue'
import Foot from '../Foot/FooterInfo.vue'
export default {
    components: {
        SideBar,
        MainContent,
        Foot
    }
}
</script>
<style>
.homeMain-container {
    min-height: calc(100vh - 70px);
    width: 100%;
    /* background-color: brown; */

    background-image: url(@/assets/img/banner.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-attachment: fixed;
}
.homeMain_main {
    margin: 0 auto;
    width: 70%;
    padding: 12px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.6);
;
}
.homeMain_main .left_content {
    height: 100vh;
    /* background-color: aquamarine; */
}

.homeMain_main .right_content {
    min-height: 550px;
    /* background-color: rgb(210, 213, 36); */
}

.move {
    display: none;
}

@media screen and (max-width: 1060px) {
    .homeMain_main .pc {
        display: none;
    }
    .homeMain_main .move {
        display: block;
    }
}
@media screen and (max-width: 768px) {
    .homeMain-container {
        background-image: url(@/assets/img/homebac.jpg);
    }
}
@media screen and (max-width: 480px) {
    .homeMain_main {
        width: 96%;
    }
}
</style>