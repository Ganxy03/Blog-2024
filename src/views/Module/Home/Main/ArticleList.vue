<template>
    <ul class="ArticleList-Container">
        <li class="ListItem" v-for="item in displayedArticleList" :key="item.name">
            <div class="thumbnail"></div>
            <div class="ArticleInfo tl">
                <div class="time">
                    <i class="el-icon-alarm-clock"></i>
                    2023-12-26
                </div>
                <div class="title cp" @click="LinkToArticle(item)" v-if="item.name">{{ item.name }}</div>
                <div class="content">
                    <p style="text-indent: 2em;">关于发布因为在外网 所以会有两分钟左右的延迟仓库更新了就好</p>
                </div>
                <div class="more">
                    <i class="el-icon-more"></i>
                </div>
            </div>
        </li>
        <el-pagination
        style="float: left;"
        layout="prev, pager, next"
        :total=ArticleTotal
        :page-size="4"
        background
        @current-change="handlePageChange">
    </el-pagination>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            ArticleList: [],
            ArticleTotal: 0,
            currentPage: 1
        }
    },
    created() {
        this.getAllArticle().catch(error => {
            console.error(error)
        })
    },
    computed: {
        displayedArticleList() {
            const pageSize = 4; // 每页显示的文章数量
            const start = (this.currentPage - 1) * pageSize;
            const end = start + pageSize;
            return this.ArticleList.slice(start, end);
        },
    },
    methods: {
        async getAllArticle() {
            // https://api.github.com/repos/ganxy03/xh_web/contents/wiki
            const url = "https://api.github.com/repos/ganxy03/xh_web/contents/wiki"
            await fetch(url)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                this.ArticleList = res
                // res.forEach((item) => {
                //     this.ArticleList.push({ name: item.name });
                // });
                // Home.md
                // console.log(this.ArticleList)
                    // 计算总页数
                const pageSize = 4
                const totalPages = Math.ceil(res.length / pageSize);
                this.ArticleTotal = res.length
                console.log(totalPages)
            })
        },
        handlePageChange(newPage) {
            this.currentPage = newPage;
        },
       async LinkToArticle(item) {
            // console.log(item)
            const response = await fetch(item.url)

            const result = await response.json()
            // console.log(result)
            const decodedContent = decodeURIComponent(escape(atob(result.content)));
            console.log(decodedContent)

            this.$router.push('/article/' + item.name)
        }
    }
}
</script>
<style>
.ArticleList-Container {
    width: 100%;
    min-height: 550px;
    /* background-color: rebeccapurple; */
}
.ArticleList-Container .ListItem {
    height: 300px;
    width: calc(100% - 6px);
    background-color: beige;
    display: flex;
    justify-items: space-between;
    margin-top: 20px;
}
.ArticleList-Container .ListItem .thumbnail {
    width: 55%;
    height: 300px;
    background: url('@/assets/img/bg-pc.jpg') 50% no-repeat;
    background-size: auto;
}
.ArticleList-Container .ListItem .ArticleInfo {
    width: 45%;
    height: 300px;
    background-color: #fff;
    position: relative;
    padding: 0 12px;
}

.ArticleList-Container .ListItem .ArticleInfo .time {
    position: absolute;
    top: 6px;
    font-size: 11px;
}
.ArticleList-Container .ListItem .ArticleInfo .title {
    position: absolute;
    top: 24px;
    font-size: 24px;
    font-weight: 700;
}
.ArticleList-Container .ListItem .ArticleInfo .content {
    position: absolute;
    top: 64px;
}
.ArticleList-Container .ListItem .ArticleInfo .more {
    position: absolute;
    bottom: 12px;
    left: 12px;
}
</style>