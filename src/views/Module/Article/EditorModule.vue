<template>
    <div class="Editor-Container">
        <HeadNav />
        <div class="Editor_box">
            <el-row>
                <el-col :span="18">
                    <el-input v-model="Article.title" placeholder="输入标题"></el-input>
                    <editor
                    v-model="Article.content"
                    class="Editor"
                    placeholder="Type here..."
                    api-key="ublhvveejzddur1ry6jxrqizz5urb3ri8w38goz9kskcr0mp"
                    :init="{
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'help', 'wordcount'
                        ],
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px }',
                        menubar: 'file edit view insert format about tools table help',
                        directionality: 'ltr',
                        selector: 'textarea',
                        language: 'zh_CN'
                        }"
                    />
                </el-col>
                <el-col :span="6">
                    <div class="Right_ToolsBar">
                        <el-row class="postBtn">
                            <el-col :span="24">
                                <el-button @click="PostBtn">发布</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            
        </div>
    </div>
</template>

<script>
import HeadNav from '../Nav/HeadNav.vue'
import Editor from '@tinymce/tinymce-vue'

export default {
    components: {
        HeadNav,
        'editor': Editor
    },
    data() {
        return {
            Article: {
                title: '',
                content: '',
                author: 'Ganxy'
            }
        }
    },
    methods: {
        PostBtn() {
            // console.log(this.Article)
            if(this.Article.title == '') {
                this.$message({
                    message: '标题为空',
                    type: 'warning'
                })
                return
            } else if(this.Article.content == '') {
                this.$message({
                    message: '内容为空',
                    type: 'warning'
                })
                return
            }
            const url = process.env.VUE_APP_BASE_URI + '/blog-article/saveArticle'
            // console.log(url)

            // 其一
            fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.Article)
            })
            .then(res => {
                if(res.status == 200) {
                    return  res.text()
                }
            })
            .then(res => {
                console.log(res)
                if(res == 'Save success') {
                    this.$message({
                        message: '发布成功',
                        type: 'success'
                    })
                } else if(res == 'Article have exited') {
                    this.$message({
                        message: '文章已经存在',
                        type: 'warning'
                    })
                } else {
                    this.$message({
                        message: '接口错误，请联系管理员',
                        type: 'warning'
                    })
                }
            })
        }
    }
}
</script>

<style>
.tox-statusbar__branding a {
    display: none;
}
.Editor_box {
    width: 75%;
    min-height: 500px;
    margin: 0 auto;
    margin-top: 12px;
}
.Editor_box .Editor {
    display: inline-block;
    width: 100%;;
    height: calc(100vh - 135px);
}
.Right_ToolsBar {
    display: inline-block;
    width: 100%;
    min-height: 600px;
    /* background-color: blueviolet; */
}
.Right_ToolsBar .postBtn .el-button {
    width: calc(100% - 40px);
    margin: 0 20px;
}
</style>