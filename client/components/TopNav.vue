<template>
  <div>
    <nuxt-link
    class="topNavList"
    v-for="item in navList"
    :key="item.name"
    :to="item.link">
    {{item.name}}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      navList:[
        {name:'Home',link:'/'},
        {name:'Article',link:'/'},
        {name:'About',link:'/'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.topNavList{
  padding: 0 25px;
  color: #fff;
  font-size: 16px;
  line-height: 50px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover{
    color: rgb(54, 218, 230);
  }
}

</style>
