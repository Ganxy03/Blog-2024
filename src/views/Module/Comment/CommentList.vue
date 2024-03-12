<template>
    <div class="CommentList-Container" v-loading.fullscreen.lock="fullscreenLoading">
        <!-- 发布评论 -->
        <div class="postComment">
            <el-row :gutter="12">
                <el-col :span="8">
                    <el-input v-model="postData.qq" placeholder="QQ号(*必须)"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="postData.nickname" placeholder="昵称(选填)"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-input placeholder="网站(选填)"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top: 12px;">
                <el-col :span="24">
                    <el-input v-model="postData.content" placeholder="天青色等烟雨 留言板在等你">
                        <el-button @click="PostBtn" slot="append">发布</el-button>
                    </el-input>
                </el-col>
            </el-row>
        </div>
        <div class="tittle tl">
            评论列表 | <small>{{ this.total }}条评论</small>
        </div>
            <el-alert
                style="margin-top: 12px;"
                title="灌水的评论 我会删除的喔"
                type="warning">
            </el-alert>
        <ul class="list">
            <li v-for="item in comment" :key="item.id" class="listItem tl">
                <div class="avatar"></div>
                <div style="width: 70%;">
                    <el-row>
                        <el-col :span="24">
                            <div class="name">
                                {{ item.name }}
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="time">
                                {{ item.time }}
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="content">
                                {{ item.content }}
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </li>
            <p v-show="loading">没有再多了</p>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            comment: [],
            tempComment: [],
            total: 0,
            postData: {
                qq: '',
                nickname: '',
                site: '',
                content: ''
            },
            fullscreenLoading: false,
            loading: false
        }
    },
    created() {
        this.GetAll()
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    computed: {

    },
    methods: {
        GetAll() {
            // fetch(process.env.VUE_APP_BASE_URI + '/blog-comment/getAll', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'Application/json',
            //         'Content-Type': 'Application/json'
            //     }
            // })
            // .then(res => res.json())
            // .then(res => {
            //     this.total = res.length
            //     this.tempComment = res
            //     // this.comment = Array.isArray(res) ? res.slice(0, 4) : [] // 转换为数组后展示前两条评论
            // })
            return new Promise((resolve, reject) => {
                fetch(process.env.VUE_APP_BASE_URI + '/blog-comment/getAll', {
                    method: 'POST',
                    headers: {
                        'Accept': 'Application/json',
                        'Content-Type': 'Application/json'
                    }
                })
                .then(res => res.json())
                .then(res => {
                    this.total = res.length;
                    this.tempComment = res;
                    // this.comment = res;
                    // this.showComments = this.comment.slice(0, 4);
                    this.comment = Array.isArray(res) ? res.slice(0, 4) : []
                    resolve(); // 请求成功后resolve
                })
                .catch(error => {
                    reject(error); // 请求失败时reject
                });
            });
        },
        // 滚动事件监听
        handleScroll() {
            const bottomOfWindow = document.documentElement.scrollHeight - window.innerHeight <= window.scrollY + 1;
            if (bottomOfWindow) {
                this.loadMore();
            }
        },
        // 加载更多评论
        loadMore() {
            if(this.comment.length >= this.total) {
                this.loading = true
                return
            }
            console.log("加载")
            let currentLength = this.comment.length;
            let remainingComments = this.tempComment.slice(currentLength, currentLength + 2);
            this.comment = [...this.comment, ...remainingComments];
        },
        PostBtn() {
            // console.log(this.postData)
            if(this.postData.qq == '') {
                this.$message({
                    message: 'QQ为空',
                    type: 'warning'
                })
                return
            } else if(this.postData.nickname == '') {
                this.$message({
                    message: '昵称为空',
                    type: 'warning'
                })
                return
            } else if(this.postData.content == '') {
                this.$message({
                    message: '内容为空',
                    type: 'warning'
                })
                return
            }
            // console.log(this.postData)
            this.$confirm('确定发布吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                callback: action => {
                    if(action == 'confirm') {

                        this.fullscreenLoading = true
                        const url = process.env.VUE_APP_BASE_URI + '/blog-comment/post'
                        fetch(`${url}?qq=${this.postData.qq}&name=${this.postData.nickname}&content=${this.postData.content}`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'Application/json',
                                'Content-Type': 'Application/json'
                            }
                        })
                        .then(res => res.text())
                        .then(res => {
                            // console.log(res)
                            if(res == 'Post success') {
                                
                                this.GetAll()

                                
                                // 计时器
                                setTimeout(function() {
                                    this.fullscreenLoading = false
                                    this.$message({
                                        message: '发送成功',
                                        type: 'success'
                                    })
                                }.bind(this), 3000)
                                
                                
                            } else {

                                
                                setTimeout(function() {
                                    this.fullscreenLoading = false
                                    this.$message({
                                        message: '发送失败',
                                        type: 'warning'
                                    })
                                }.bind(this), 3000)
                                
                                
                            }
                        })

                        
                    }
                }
            })
        }
    },
}
</script>
<style>
.CommentList-Container {
    min-height: 600px;
    width: 70%;
    /* width: calc(70% - 36px); */
    /* background-color: #e5e9ef; */
    background-color: rgba(255, 255, 255, 0.6);
    margin: 0 auto;
    border-radius: 10px;
    padding: 16px;
}
.CommentList-Container .tittle {
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid#797979;
    padding: 12px 0;
    margin: 0 12px;
}
.CommentList-Container .tittle small {
    font-weight: 400;
}
.CommentList-Container .list {
    min-height: 320px;
    width: 100%;
    overflow-y: auto;
    margin: 0 auto;
    /* background-color: blueviolet; */
}

.CommentList-Container .list .listItem {
    list-style: none;
    min-height: 80px;
    /* width: calc( 100% - 20px); */
    /* margin: 0 12px; */
    /* background-color: #fff; */
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
}

.CommentList-Container .list .listItem .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: url(@/assets/img/logo.png) 50% no-repeat;
    background-size: cover;
}
.CommentList-Container .list .listItem .name {
    font-size: 20px;
    font-weight: 700;
    margin: 0 12px;
}
.CommentList-Container .list .listItem .time {
    font-size: 16px;
    margin: 0 12px;
}
.CommentList-Container .list .listItem .content {
    font-size: 16px;
    margin: 0 12px;
}


@media screen and (max-width: 768px) {
    .CommentList-Container  {
        width: 96%;
    }
}
</style>