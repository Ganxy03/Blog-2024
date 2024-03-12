<template>
    <div class="ArticleLastCard-container">
        <h3 class="CardTitle tl">
            <i class="el-icon-document"></i>最新文章
        </h3>
        <ul class="ArticelList">
            <li v-for="item in ArticelList" :key="item.id" class="ArticelList_item">
                <img class="thumbnail" src="@/assets/img/logo.png" alt="">
                <!-- <div class="thumbnail" :style="{backgroundImage: url(item.imgUrl)}"></div> -->
                <div class="itemInfo tl">
                    <h4 class="cp">{{ item.title }}</h4>
                    
                    <p>
                        <span>{{ item.content }}</span>
                        <span>{{ item.time }}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ArticelList: [
                {
                    id: '1',
                    imgUrl: '@/assets/img/logo.png',
                    title: '建站公告',
                    time: '2022-03-03',
                    content: '今天建站啦'
                },
                {
                    id: '2',
                    imgUrl: '@/assets/img/logo.png',
                    title: '建站公告',
                    time: '2022-03-03',
                    content: '今天建站啦'
                },
                {
                    id: '3',
                    imgUrl: '@/assets/img/logo.png',
                    title: '建站公告',
                    time: '2022-03-03',
                    content: '今天建站啦'
                },
                {
                    id: '4',
                    imgUrl: '@/assets/img/logo.png',
                    title: '建站公告',
                    time: '2022-03-03',
                    content: '今天建站啦'
                }
            ]
        }
    }
}
</script>
<style>
.ArticleLastCard-container {
    height: 220px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
}
.ArticleLastCard-container .CardTitle {
    font-size: 16px;
    margin: 0 12px;
    padding: 3px 0;
}
.ArticleLastCard-container .ArticelList {
    height: 180px;
    width: 100%;
    /* background-color: rgb(41, 198, 77); */
}

.ArticleLastCard-container .ArticelList .ArticelList_item {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 5px;
}

.ArticleLastCard-container .ArticelList .ArticelList_item .thumbnail {
    height: 40px;
    width: 40px;
    
}
.ArticleLastCard-container .ArticelList .ArticelList_item .itemInfo {
    margin: 0 3px;
    width: 100%;
}

.ArticleLastCard-container .ArticelList .ArticelList_item .itemInfo h4 {
    font-size: 14px;
}
.ArticleLastCard-container .ArticelList .ArticelList_item .itemInfo p {
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    margin: 0 6px;
    line-height: 22px;
}
</style>