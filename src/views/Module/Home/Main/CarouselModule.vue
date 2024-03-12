<template>
    <div class="carousel">
        <el-carousel trigger="click" height="330px">
            <!-- <el-carousel-item v-for="item in 2" :key="item">
                <h3 class="small">{{ item }}</h3>
            </el-carousel-item> -->
            <el-carousel-item>
                <img src="@/assets/img/Home/lunbo0.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/img/Home/lunbo1.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/img/Home/lunbo2.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style>
.MainContent-Container .carousel {
    height: 330px;
    width: 100%;
    /* background-color: coral; */
}
.MainContent-Container .carousel .el-carousel__item {
    display: flex;
    align-items: center;
    justify-content: center;
}
.MainContent-Container .carousel img {
    height: 330px;
}
img {
    height: 330px;
}
@media screen and (max-width: 768px) {
    .MainContent-Container .carousel img {
        width: 100%;
        height: auto;
    }
    img {
        width: 100%;
        height: auto;
    }
}
</style>