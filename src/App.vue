<template>
  <div id="app_container">
    <m-t-b></m-t-b>
    <router-view></router-view>



  </div>
</template>

<script>

import MainTabBar from 'components/content/maintabbar/mainTableBar'

export default {
  name: 'app',
  components: {
    MTB: MainTabBar

  }
}
</script>

<style>
  @import "assets/css/base.css";

  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
