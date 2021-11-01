<template>
  <div class="main-skeleton">
    <GMskeleton height="80px"></GMskeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <GMskeleton height="300px"></GMskeleton>
        </div>
        <GMskeleton height="45px"></GMskeleton>
      </div>
      <div class="skeleton-bottom">
        <GMskeleton height="45px"></GMskeleton>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
	export default{
		data () {
			return {
				msg: 'hello vue'
			}
		}
	}
</script>
<style lang="less">
  .skeleton-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
  }
  .skeleton-bottom {
    width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .skeleton {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 56px;
  }
</style>
