<template>
<div class="music-player">
    <HeadNavVue />
    <h2>{{ currentSong.title }}</h2>
    <audio ref="audioPlayer" :src="currentSong.url"></audio>
    <div class="controls">
    <button @click="play">Play</button>
    <button @click="pause">Pause</button>
    </div>
    <div class="progress-container">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
</div>
</template>
<script>
import HeadNavVue from '../Nav/HeadNav.vue';
export default {
components: {
    HeadNavVue
},
data() {
    return {
    currentSong: {
        title: 'Song Title',
        url: 'audio_url.mp3'
    },
    isPlaying: false,
    progress: 0
    };
},
methods: {
    play() {
    this.$refs.audioPlayer.play();
    this.isPlaying = true;
    },
    pause() {
    this.$refs.audioPlayer.pause();
    this.isPlaying = false;
    }
},
mounted() {
    this.$refs.audioPlayer.addEventListener('timeupdate', () => {
    this.progress = (this.$refs.audioPlayer.currentTime / this.$refs.audioPlayer.duration) * 100;
    });
}
};
</script>
<style scoped>
.music-player {
text-align: center;
}
.controls button {
margin: 5px;
padding: 10px 20px;
background-color: #007bff;
color: white;
border: none;
cursor: pointer;
}
.progress-container {
width: 80%;
height: 20px;
background-color: #f0f0f0;
margin: 20px auto;
}
.progress-bar {
height: 100%;
background-color: #007bff;
}
</style>