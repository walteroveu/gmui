<style type="text/less" lang="less">
  @import "../assets/less/index";
  .page-header {
    background-color: #1989fa;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
    }
  }
</style>
<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="header-container">
      <router-link :to="{name: 'giud'}"><img src="../assets/img/gome-logo.png" width="100"></router-link>
      <router-link :to="{name: 'giud'}"><span class="zujian" style="color:#fff">组件</span></router-link>
    </div>
  </header>
</template>

<script>
/* eslint-disable */
  export default {
    data () {
      return {}
    }
  }
</script>
