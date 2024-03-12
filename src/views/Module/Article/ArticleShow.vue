<template>
    <div class="ArticleShow-Container">
        <h2>{{ this.$route.params.title }}</h2>
        <div class="tl" v-html="this.Article"></div>
    </div>
</template>
<script>
import '@/assets/css/articleShow.css'

import marked from 'marked';
// import Foot from '../Foot/FooterInfo.vue'
export default {
    components: {
        // Foot
    },
    data() {
        return {
            Article: ''
        }
    },
    created() {
        console.log(this.$route.params.title)
        this.getArticle()
    },
    methods: {
        async getArticle() {
            // const title = this.Article.title
            const url = 'https://api.github.com/repos/Ganxy03/xh_web/contents/wiki/' + this.$route.params.title + '?ref=main'
            console.log("url:" + url )

            const response = await fetch(url)

            const result = await response.json()

            const decodedContent = decodeURIComponent(escape(atob(result.content)));

            // console.log(decodedContent)

            this.Article = marked(decodedContent)

            console.log(this.Article)
        }
    }
}
</script>

<style>
.ArticleShow-Container {
    width: calc(100% - 32px);
    min-height: 550px;
    background-color: #fff;
    border-radius: 10px;
    margin: 12px;
    padding: 16px;
}

@media screen and (max-width: 768px) {
    .ArticleShow-Container {
        margin: 0;
    }
}

</style>
<!-- <link rel="stylesheet" href="@/assets/css/articleShow.css"> -->