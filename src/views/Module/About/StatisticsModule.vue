<template>
    <div class="stats-container">
        <HeadNavVue />
        <!-- <span class="current-time">{{ currentTime }}</span> -->
        <CurrentTime />
        <div class="stat-box">
            <div class="stat-icon">
                <i class="fas fa-newspaper"></i>
            </div>
            <div class="stat-number">{{ articleCount }}</div>
            <div class="stat-label">Articles</div>
        </div>
        <div class="stat-box">
            <div class="stat-icon">
                <i class="fas fa-comment"></i>
            </div>
            <div class="stat-number">{{ commentCount }}</div>
            <div class="stat-label">Comments</div>
        </div>    
        <div class="stat-box">
            <div class="stat-icon">
                <i class="fas fa-eye"></i>
            </div>
            <div class="stat-number">{{ visitCount }}</div>
            <div class="stat-label">Visits</div>
        </div>
    </div>
</template>
<script>
import HeadNavVue from '../Nav/HeadNav.vue';
import CurrentTime from './CurrentTime.vue';
export default {
    components: {
        HeadNavVue,
        CurrentTime
    },
    data() {
        return {
            articleCount: 100,
            commentCount: 500,
            visitCount: 10000,
            currentTime: ''
        };
    },
    mounted() {
        // this.getCurrentTime();
        // setInterval(() => {
        //     this.getCurrentTime();
        // }, 1000);
    },
    methods: {
        // getCurrentTime() {
        //     const date = new Date();
        //     const options = { hour12: false, timeZone: 'Asia/Shanghai' };
        //     this.currentTime = date.toLocaleTimeString('en-US', options);
        // }
    }
};
</script>
<style scoped>
.stats-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background: url(@/assets/img/bg-pc.jpg);
    overflow-x: hidden;
}
.stat-box {
    text-align: center;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 8px;
    width: 30%;
    max-width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 0 12px;
    transition: transform 0.3s, font-size 0.3s;
    cursor: pointer;
}
.stat-box:hover {
    transform: scale(1.2);
}
.stat-icon {
    font-size: 24px;
}
.stat-box:hover .stat-icon {
    animation: shake 0.5s;
}

/* .dynamic-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 8px;
    max-width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 12px;
    transition: transform 0.3s, font-size 0.3s;
    cursor: pointer;
}
.current-time {
    font-size: 48px;
    font-weight: bold;
    color: #333;
    display: flex;
} */
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}
.stat-number {
    font-size: 36px;
    font-weight: bold;
    margin-top: 10px;
}
.stat-label {
    font-size: 16px;
    color: #666;
}
</style>