<template>
    <div class="Sort-Container">
        <div class="bac">
            <HeadNavVue />
            <h2>分类</h2>
        </div>
        <div class="main_bac">
            <ul class="main_list">
                <li class="ListItem">
                    <div class="thumbnail"></div>
                </li>
                <li class="ListItem">
                    <div class="thumbnail"></div>
                </li>
                <li class="ListItem">
                    <div class="thumbnail"></div>
                </li>
                <li class="ListItem">
                    <div class="thumbnail"></div>
                </li>
                <li class="ListItem">
                    <div class="thumbnail"></div>
                </li>
                <li class="ListItem">
                    <div class="thumbnail"></div>
                </li>
                <div class="foot">
                    <p>&copy;Ganxy|2024</p>
                </div>
            </ul>
        </div>
    </div>
</template>
<script>
import HeadNavVue from '../Nav/HeadNav.vue'
export default {
    components: {
        HeadNavVue
    },
    data() {
        return {
            ArticleList: [
                {
                    title: ''
                }
            ]
        }
    }
}
</script>

<style>
.Sort-Container {
    min-height: 100vh;
    width: 100%;
    background-color: aqua;
}
.Sort-Container .bac {
    width: 100%;
    height: 360px;
    background: url(@/assets/img/banner.png) 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Sort-Container .bac h2 {
    color: #fff;
    position: absolute;
    bottom: 10%;
    font-size: 48px;
    font-family: '楷体';
}
.Sort-Container .main_bac {
    width: 100%;
    min-height: calc(100vh - 70px);
    /* background-color: red; */
    background-image: url(@/assets/img/bg-pc.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-attachment: fixed;
}
.Sort-Container .main_list {
    width: 70%;
    min-height: calc(100vh - 70px);
    margin: 0 auto;
    background-color: aquamarine;
    border-radius: 10px;
    padding: 12px;
    position: relative;
    padding-bottom: 40px;
}
.Sort-Container .main_list .ListItem {
    height: 300px;
    width: calc(100% - 6px);
    background-color: beige;
    display: flex;
    justify-items: space-between;
    margin: 0 auto;
    margin-top: 12px;
}
.Sort-Container .main_list .thumbnail {
    width: 55%;
    height: 300px;
    background: url('@/assets/img/bg-pc.jpg') 50% no-repeat;
    background-size: auto;
}
.Sort-Container .main_list .foot {
    margin-top: 30px;
    width: 100%;
    position: absolute;
    bottom: 10px;
}
@media screen and (max-width: 768px) {
    .Sort-Container .main_list {
        width: calc(96% - 24px);
    }
}
</style>