<template>
  <div>
    <top/>
    <section>
      <div class="container">
        <div class="text">
          <h1>Blog<br>
            <span class="white">Welcome Vong's</span>
          </h1>
          <p>
            <span>
              "我们自己始终是太阳，被乌云和黑暗遮盖也在继续发光."<br>
              "Hi，世界那么大，很高兴能在这里被你看见."
            </span>
          </p>
          <nuxt-link to="/" class="btn">开始阅读</nuxt-link>
          <a href="https://github.com/wyqvong" class="btn">GitHub</a>
        </div>
      </div>
    </section>
    <main>
      <div class="titlePage">
        <h2>My Blogs</h2>
        <span>Let's work hard to share those accumulated love.</span>
      </div>
      <div class="articleCards">
        <card
        v-for="article in articles"
        :key="article.id"
        :article="article"/>

      </div>
    </main>
    <i-footer/>
  </div>
</template>

<script>
import top from '~/components/Header'
import card from '~/components/articleCard'
import iFooter from '~/components/footer'
export default {
  components: {
    top,
    card,
    iFooter
  },
  data(){
    return{
      articles:[],
    }
  },
  created(){
    this.getArticle()
  },
  mounted(){

  },
  methods:{
    getArticle(){
      this.$axios.get('/article/lists')
      .then(res => {
        this.articles = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
  }

}
</script>

<style lang="scss" scoped>
  // .index{
  //   min-width: 100vw;
  //   min-height: 100vh;
  // }
  section{
    min-height: 100vh;//根据屏幕大小而定
    display: block;
    padding: 90px 0 90px 0;
    background-image: url(~assets/img/lyqt.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .container{
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      .text{
        text-align: left;
        padding-right: 20px;
        h1{
          color: rgb(54, 218, 230);
          font-size: 70px;
          line-height: 110px;
          font-weight: bold;
        }
      }
      p{
        color: #fff;
        font-size: 17px;
        line-height: 28px;
        padding: 40px 0;
      }
    }
  }
  .btn{
    padding: 5px 35px;
  }
  main{
    background-color: #fff;
    min-height: 600px;
    padding-bottom: 30px;
    .titlePage{
      text-align: center;
      padding: 60px 0 60px 0;
      h2{
        font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
        font-size: 40px;
        color: #3e3e3e;
        line-height: 57px;
        font-weight: bold;
        padding: 0;
        padding-bottom: 20px;
      }
      span{
        color: #666666;
        font-size: 14px;
        font-family: 'Lato', sans-serif;
        line-height: 1.80857;
        font-weight: normal;
      }
    }
    .articleCards{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

</style>

