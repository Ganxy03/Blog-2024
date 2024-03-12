<template>
    <div class="MainContent-Container">
        <!-- 轮播图 -->
        <CarouselModule />
        <!-- 文章列表 -->
        <div>
            <ArticleList />
        </div>
    </div>
</template>
<script>
import CarouselModule from './Main/CarouselModule.vue'
import ArticleList from './Main/ArticleList.vue'
export default {
    components: {
        CarouselModule,
        ArticleList
    }
}
</script>
<style>
.MainContent-Container {
    min-height: 100vh;
    /* background-color: darkcyan; */
}

</style>