<template>
  <div id="app">
    <!-- <template>
      <div class="wrap">
        <el-backtop target="#app" :visibility-height="200" />
       
      </div>
    </template> -->
    <el-backtop class="el-backtop"
                style="right: 20px; bottom: 20px;font-weight: 700;font-size: 24px;background-color: #42b983;"
    ><i class="icon_up"></i>
    </el-backtop>
    <router-view/>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.wrap {
  height: 100%;
  /* overflow-x: hidden; */
}

* {
  padding: 0;
  margin: 0;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: rgb(8, 85, 28);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


/* .el-backtop {
  
} */
.icon_up {
  background: url(@/assets/img/Icon/返回顶部.png) 50% no-repeat;
  /* transform: rotate(180deg); */
  position: absolute;
  padding: 40px;
}

/* 通用简写 */
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}

.cp {
  cursor: pointer;
}

.pr {
  position: relative;
}
.pa {
  position: absolute;
}
</style>
