"use strict";(self["webpackChunkblog2024"]=self["webpackChunkblog2024"]||[]).push([[547],{1547:function(s,e,t){t.r(e),t.d(e,{default:function(){return c}});var r=function(){var s=this,e=s._self._c;return e("div",{staticClass:"music-player"},[e("HeadNavVue"),e("h2",[s._v(s._s(s.currentSong.title))]),e("audio",{ref:"audioPlayer",attrs:{src:s.currentSong.url}}),e("div",{staticClass:"controls"},[e("button",{on:{click:s.play}},[s._v("Play")]),e("button",{on:{click:s.pause}},[s._v("Pause")])]),e("div",{staticClass:"progress-container"},[e("div",{staticClass:"progress-bar",style:{width:s.progress+"%"}})])],1)},a=[],i=t(1755),u={components:{HeadNavVue:i.A},data(){return{currentSong:{title:"Song Title",url:"audio_url.mp3"},isPlaying:!1,progress:0}},methods:{play(){this.$refs.audioPlayer.play(),this.isPlaying=!0},pause(){this.$refs.audioPlayer.pause(),this.isPlaying=!1}},mounted(){this.$refs.audioPlayer.addEventListener("timeupdate",(()=>{this.progress=this.$refs.audioPlayer.currentTime/this.$refs.audioPlayer.duration*100}))}},l=u,n=t(1656),o=(0,n.A)(l,r,a,!1,null,"f5f88428",null),c=o.exports}}]);
//# sourceMappingURL=547.d7f75c9a.js.map