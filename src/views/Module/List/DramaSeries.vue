<template>
<div class="Drama-Container">
    <HeadNavVue />
    <div class="video-player">
      <video controls autoplay>
        <source src="video_url.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="mobile-video-player">
    <video controls autoplay>
      <source src="video_url.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>
</template>
<script>
import HeadNavVue from "../Nav/HeadNav.vue";
export default {
    components: {
        HeadNavVue
    }
}
</script>
<style scoped>
    .video-player {
        height: calc(100vh - 70px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .video-player video {
        width: 80%;
        max-width: 800px;
    }
    .mobile-video-player {
        position: fixed;
        top: 70px;
        margin: 0 12px;
        width: calc(100% - 24px);
        height: 40vh;
        background-color: #000; /* 设置背景颜色为黑色 */
        overflow: hidden; /* 视频超出部分隐藏，可根据需要调整 */
        display: none;
    }
    .mobile-video-player video {
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 768px) {
        .Drama-Container {

        }
        .mobile-video-player {
            display: block;
        }
        .video-player {
            display: none;
        }
    }
</style>