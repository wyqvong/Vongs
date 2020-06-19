<template>
  <div class="footer">
    <div class="copy-right">
      Copyright © <span>2020</span><a href="https://github.com/wyqvong" target="_blank">wyqvong</a>|&nbsp;Designed & Powerd by wyqvong
    </div>
    <div class="social-static">
      <a v-for="i in links" :key="i.name" :href="i.href"><i class="iconfont" :class="i.name"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      links:[
        {
          name:'icon-github',href:'https://github.com/wyqvong'
        },
        {
          name:'icon-shejiao-youxiang',href:'mailto:874744558@qq.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
  color: #dbdbdb;
  // min-height: 50px;
  padding: 15px 0;
  display: flex;
  .copy-right{
  width: 60%;
  margin-left: auto;
  // margin-right: auto;
  font-size: 14px;
  text-align: center;
  span{
    display: inline;
  }
  a{
    color: #ffffff;
    padding: 0 5px;
  }
  }
  .social-static{
    width: 20%;
    // margin-left: auto;
    margin-right: auto;

    a{
      // font-size: 1rem;
      display: inline;
      padding: 0 12px;
      i{
        color: #ffffff;
      }
    }
  }
}

</style>
