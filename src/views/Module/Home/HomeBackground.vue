<template>
    <div class="homeBac-container">
        <div class="homeBac_SiteName">
            <h2 style="font-family: '楷体';">青墨书晚风</h2>
            
            <!-- <Button label="Submit" /> -->

            <!-- <Button icon="pi pi-arrow-left" @click="visibleRight = true" /> -->
            
            <!-- <Sidebar :visible.sync="navDrawer" header="Right Sidebar" position="right" style="width: 50%;">
                123
            </Sidebar>
            <Button icon="pi pi-arrow-left" @click="navDrawer = true" /> -->
        </div>
        <div class="homeBac_buttonGroup">
            <!-- <el-button><i class="el-icon-s-promotion"></i>Start</el-button>
            <el-button>Github</el-button> -->
            <el-button @click="scrollDown" style="margin-right: 20px"><i class="el-icon-arrow-down"></i>Start</el-button>
            <a target="_blank" href="https://github.com/Ganxy03">
                <el-button class="display-none">
                    <i class="el-icon-s-promotion"></i>GitHub
                </el-button>
            </a>
        </div>
        <a class="bar_down pa" @click="scrollDown"></a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            device: {
                Width: 0,
                Height: 0,
            },
            navDrawer: false
        }
    },
    mounted() {
        this.device.Width = window.innerWidth;
        this.device.Height = window.innerHeight;
    },
    methods: {
        scrollDown() {
            const vh = window.innerHeight;
            const scrollDistance = vh - 60;
            window.scrollTo({
                top: scrollDistance,
                behavior: 'smooth',
            });
        },
        
        openNavDrawer() {
            this.navDrawer = !this.navDrawer
        },
    }
}
</script>
<style>
.homeBac-container {
    height: 100vh;
    width: 100%;
    /* background-color: aqua; */
    background: url('@/assets/img/bg-pc.jpg') 50% no-repeat;
    background-size: cover;
}
.homeBac_SiteName {
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.homeBac_SiteName h2 {
    font-size: 48px;
    color: #fff;
}
.homeBac_buttonGroup {
    width: 100%;
    height: 50px;
    margin-top: 12vh;
}
.homeBac_buttonGroup .el-button {
    width: 125px;
    font-size: 14px;
    border-radius: 23px;
    margin-top: 5px;
    background-color: transparent;
    opacity: 1;
    color: #fff;
    border: 1px solid #fff;
}

.bar_down {
  bottom: 20px;
  width: 82px;
  height: 82px;
  margin-left: -40px;
  background: url(@/assets/img/Icon/i_down.png) 50% no-repeat;
  animation: ani_down 2s linear infinite;
  cursor: pointer;
  position: absolute;
}
.bar_down::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(@/assets/img/Icon/i_circle.png) 50% no-repeat;
  animation: ani_circle 2s linear infinite;
}
@keyframes ani_circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes ani_down {
  0%, 100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
}
@media screen and (max-width: 768px) {
    .homeBac-container {
        background: url('@/assets/img/bg.png') 50% no-repeat;
        background-size: cover;
    }
}
</style>