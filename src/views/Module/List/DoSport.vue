<template>
<div class="sports-stats">
    <HeadNavVue />
    <el-row class="calendar">
        <el-col :span="24">
            <CalendaModuleVue />
        </el-col>
    </el-row>
    <el-row class="card_head">
        <h2>加油!</h2>
        <p>嘿 嘿 嘿 小肚腩消失再也不见</p>
        <el-col :span="24">
            <el-card class="card_item cp" shadow="hover">
                <div class="stat-label">累计运动天数</div>
                <div class="stat-number">{{ totalDays }} 天</div>
            </el-card>
        </el-col>
    </el-row>
    <el-row class="card_one" :gutter="20">
        <el-col :span="8">
            <el-card class="card_item cp" shadow="hover">
                <div class="stat-label">臂屈伸</div>
                <div class="stat-number">{{ armFlexionExtensionCount }} 次</div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card class="card_item cp" shadow="hover">
                <div class="stat-label">引体</div>
                <div class="stat-number">{{ pullUpCount }} 次</div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card class="card_item cp" shadow="hover">
                <div class="stat-label">俯卧撑</div>
                <div class="stat-number">{{ pushUpCount }} 次</div>
            </el-card>
        </el-col>
    </el-row>
    <el-row class="card_two" :gutter="20">
        <el-col :span="8">
            <el-card class="card_item cp" shadow="hover">
                <div class="stat-label">跑步</div>
                <div class="stat-number">{{ runningMileage }} 公里</div>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>
<script>
import HeadNavVue from '../Nav/HeadNav.vue';
import CalendaModuleVue from './CalendaModule.vue';
export default {
    components: {
        HeadNavVue,
        CalendaModuleVue
    },
    data() {
        return {
            runningMileage: 15,
            pullUpCount: 20,
            pushUpCount: 30,
            armFlexionExtensionCount: 25,
            totalDays: 60,
        }
    },
    methods: {
    }
};
</script>
<style scoped>
.sports-stats {
    height: 100vh;
    background: url(@/assets/img/bg-pc.jpg) 50% no-repeat;
    background-size: cover;
    overflow-x: hidden;
}
.sports-stats .calendar {
    margin: 0 20%;
}
.sports-stats .card_head {
    width: calc(90% - 20px);
    left: 5%;
}
.sports-stats .card_one {
    width: 90%;
    left: 5%;
    top: 12px;
}
.sports-stats .card_two {
    width: 90%;
    left: 5%;
    top: 24px;
}
.sports-stats .card_item:hover {
    transform: scale(1.2);
}

.sports-stats .stat-label {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
}
.sports-stats .stat-number {
    font-size: 24px;
    font-weight: bold;
}
@media screen and (max-width: 768px) {
    .sports-stats .calendar {
        width: calc(96% - 32px);
        margin: 0 auto;
    }
}
</style>
