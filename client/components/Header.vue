<template>
  <div class="top">
    <nuxt-link to="/"><div class="logo"></div></nuxt-link>
    <top-nav class="topNav"/>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped>
  .top{
    z-index: 999;
    width: 100vw;
    position: fixed;
    background-color: #000;
    opacity: 0.7;
    display: flex;
  }
  .logo {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 50px;
    background-image: url(../assets/img/logo.png);
  }
  .topNav{
    right: 20px;
    position: absolute;
  }
</style>
