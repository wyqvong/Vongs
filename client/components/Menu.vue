<template>
  <ul class="wrapper">
    <span class="title" @click="handleToggleShow()"> - {{articleList[0].tag}}</span>
    <div class="toggle" v-show="toggleShow">
      <menu-item v-for="item in articleList" :key="item.article_id">
        <nuxt-link :to="'/article?id='+item.article_id" class="item-title">
          {{item.article_name}}
        </nuxt-link>
    </menu-item>
    </div>
  </ul>
</template>

<script>
import MenuItem from '~/components/MenuItem'
export default {
  props: ["articleList"],
  components:{
    MenuItem
  },
  data(){
    return {
      toggleShow: false
    }
  },
  methods:{
    handleToggleShow(){
      this.toggleShow = !this.toggleShow
    }
  }
}
</script>

<style>
  .wrapper{
    color: #fff;
    margin: 8px 0;
    list-style:none;
    padding-left: 10px;
  }
</style>
