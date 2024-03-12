<template>
    <div class="Comment-Container">
        <div class="bannerImg">
            <HeadNav />
            <div class="title">
                留言板
            </div>
        </div>
        <div class="bacImg">
            <div class="motto">
                <CommentMotoo />
            </div>
            <div class="list">
                <CommentList />
            </div>
        </div>
    </div>
</template>
<script>
import HeadNav from './Module/Nav/HeadNav.vue'
import CommentMotoo from './Module/Comment/MottoModule.vue'
import CommentList from './Module/Comment/CommentList.vue'
export default {
    components: {
        HeadNav,
        CommentMotoo,
        CommentList
    }
}
</script>
<style>
.Comment-Container {
    width: 100%;
    height: 100vh;
}
.Comment-Container .bannerImg {
    height: 360px;
    width: 100%;
    background: url(../assets/img/banner.png) 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
}
.Comment-Container .bannerImg .title {
    position: absolute;
    bottom: 50px;
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    font-family: '楷体';
}
.Comment-Container .bacImg {
    width: 100%;
    min-height: calc(100vh - 70px);
    /* background-color: red; */
    background-image: url(@/assets/img/bg-pc.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-attachment: fixed;
}
.Comment-Container .bacImg .list {
    /* width: calc(100% - 32px - 16px); */
    padding: 16px;
}
@media screen and (max-width: 480px) {
    .Comment-Container .bannerImg {
        height: 300px;
    }
}
</style>