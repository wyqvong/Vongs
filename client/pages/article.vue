<template>
  <div>
    <top/>
      <section>
      <div class="container">
        <div class="text">
          <h1>
            <span>Article</span>
          </h1>
          <p>
            <span>
              "我们自己始终是太阳，被乌云和黑暗遮盖也在继续发光."
            </span>
          </p>
        </div>
      </div>
    </section>
    <main>
      <div class="article">
        <div class="left">
          <div class="articleList"></div>
        </div>
        <div class="right">
          <div class="articleDetails">
            <div v-html="articleContent"></div>
          </div>
        </div>
      </div>
    </main>
    <i-footer/>
  </div>
</template>

<script>
import top from '~/components/Header'
import iFooter from '~/components/footer'
import markdown from '~/plugins/marked'
export default {
  components:{
    top,
    iFooter
  },
  computed:{
    // articleContent () {
    //   return markdown("article")
    // },
  },
  data(){
    return{
      articleContent:''
    }
  },
  created(){
    this.getArticleContent()
  },
  methods:{
    getArticleContent(id){
      this.$axios.get('/article/detail/'+1)
      .then(res=>{
        this.articleContent = markdown(res.data.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  min-height: 65vh;//根据屏幕大小而定
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
      text-align: center;
      // padding-right: 20px;
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
main{
  min-height: 500px;
  margin-bottom: 40px;
  .article{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    &:after{
      content: "";
      display: table;
      clear: both;
    }
    .left{
      width: 30%;
      float: left;
      padding: 0.75rem;
      margin-top: -60px;
      .articleList{
        min-height: 300px;
        background: #fff;
        border-radius: 10px;
      }
    }
    .right{
      width: 70%;
      float: left;
      padding: 0.75rem;
      margin-top: -60px;
      .articleDetails{
        min-height: 300px;
        background: #fff;
        border-radius: 10px;
      }
    }

  }

}
</style>
