<template>
  <div id="app">
    <!-- <mainSkeleton v-if="!init"></mainSkeleton> -->
    <div>
      <mainHeader></mainHeader>
      <div class="container">
        <sideNav class="nav"></sideNav>
        <router-view class="view"></router-view>
      </div>
      <!-- <router-view class="page"></router-view> -->
      <!-- <mainFooter></mainFooter> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import mainHeader from './components/header.vue'
  import mainFooter from './components/footer.vue'
  import sideNav from './components/side-nav.vue'
//   import mainSkeleton from './main.skeleton.vue'

  export default {
    name: 'app',
    data () {
      return {
        // init: false,
      }
    },
    created () {
       this.$router.replace({ path: "/giud" });
    },
    watch: {
      $route () {
        this.isIndex = this.$route.name === 'giud'
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
      mainHeader,
      sideNav,
      mainFooter,
    //   mainSkeleton
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";

  .container {
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      float: left;
      width: 210px;
    }
    .view {
      float: left;
      width: calc(~'100% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
