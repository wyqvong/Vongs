<template>
  <div>
    <div class="top" :class="{'transparent':transparent}">
      <nuxt-link to="/"><div class="logo"></div></nuxt-link>
      <top-nav class="topNav"/>
    </div>
    <div class="backTop" :class="{'unShow':transparent}" @click="backTop">
      <img src="~assets/img/to.png" alt="backTop">
    </div>
  </div>

</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  components: {
    TopNav
  },
  data(){
    return{
      transparent : true
    }
  },
  computed:{

  },
  mounted(){
    window.addEventListener('scroll',this.getScroll)
  },
  methods:{
    //监听滚动
    getScroll(){
      let scroll = document.documentElement.scrollTop
      if(scroll>=50){
        this.transparent = false
      }else{
        this.transparent = true
      }
    },
    backTop(){
      let timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if(osTop === 0){
          clearInterval(timer);
        }
      },30)
    }

  }

}
</script>

<style lang="scss" scoped>
  .top{
    z-index: 999;
    width: 100vw;
    position: fixed;
    background-color: rgb(0, 0, 0);
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
  .backTop{
    background: linear-gradient(to bottom right, #FF5E3A 0%, #FF2A68 100%);
    border-radius: 50%;
    text-align: center;
    width: 48px;
    height: 48px;
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 998;
    line-height: 68px;
    cursor: pointer;
  }
</style>
