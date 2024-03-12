<template>
    <div class="Ai-Container">
        <HeadNavVue />
        <div style="justify-content: space-between;display: flex;">
            <div class="sideBar">
                <SideBar />
            </div>
            <div class="chatArea">
                <el-input placeholder="发送消息给AI" class="SendMessageArea">
                    <el-button slot="append">发送</el-button>
                </el-input>
            </div>
        </div>
    </div>
</template>
<script>
import HeadNavVue from '../Nav/HeadNav.vue'
import SideBar from './AiSideBar.vue'
export default {
    components: {
        HeadNavVue,
        SideBar
    }
}
</script>
<style>
.Ai-Container {
    width: 100%;
    height: 100vh;
    background-color: #9a9a9a;
}
.Ai-Container .sideBar {
    width: 200px;
    height: calc(100vh - 70px);
    background-color: aqua;
}
.Ai-Container .chatArea {
    width: calc(100% - 200px);
    height: calc(100vh - 70px);
    background-color: rgb(240, 212, 58);
    padding: 0 24px;
}
.Ai-Container .SendMessageArea {
    width: calc(100% - 248px);
    position: absolute;
    bottom: 48px;
    right: 24px;
}
@media screen and (max-width: 768px) {
    .Ai-Container .SendMessageArea  {
        width: calc(100% - 48px);
    }
}
</style>