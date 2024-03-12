<template>
    <div>
        <div class="current-time">{{ currentTime }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentTime: ''
        }
    },
    mounted() {
        this.getCurrentTime();
        setInterval(() => {
            this.getCurrentTime();
        }, 1000);
    },
    methods: {
        getCurrentTime() {
            const date = new Date();
            const options = { hour12: false, timeZone: 'Asia/Shanghai' };
            this.currentTime = date.toLocaleTimeString('en-US', options);
        }
    }
}
</script>
<style>
.dynamic-time {
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
    color: #fff;
    display: flex;
    cursor: pointer;
}
@media screen and (max-width: 768px) {
    .current-time {
        display: none;
    }
}
</style>