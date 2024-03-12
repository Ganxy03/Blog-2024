<template>
  <div class="home">
    <!-- 首页 背景图 -->
    <div class="homeHeader-bac">
      <HeadNav class="homeHeader-bac_headNav"/>
      <HomeBac />
    </div>
    <!-- 首页 主要内容 -->
    <div>
      <HomeMain />
      

      <!-- <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
        <a-button type="primary" ghost>Primary</a-button>
        <a-button ghost>Default</a-button>
        <a-button type="dashed" ghost>Dashed</a-button>
        <a-button danger ghost>Danger</a-button>
        <a-button type="link" ghost>Link</a-button>
      </div> -->
    </div>
  </div>
</template>

<script>
import HeadNav from './Module/Nav/HeadNav.vue'
import HomeBac from './Module/Home/HomeBackground.vue'

import HomeMain from './Module/Home/HomeMain.vue'
export default {
  components: {
    HeadNav,
    HomeBac,

    HomeMain
  },
  created() {
    console.log(process.env.VUE_APP_BASE_URI)
  }
  
}
</script>
<style>
.homeHeader-bac {
  position: relative;
}

.homeHeader-bac_headNav {
  width: 100%;
  position: absolute;
  top: 0;
}
</style>