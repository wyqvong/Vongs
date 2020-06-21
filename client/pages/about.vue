<template>
  <div>
    <top/>
    <section>
      <div class="container">
        <div class="text">
          <h1>
            <span>Vong's profile</span>
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
      <div class="aboutme">
        <div class="row">
          <div class="post">
            <div class="static">
              <span class="count">
                <nuxt-link to="/article">6</nuxt-link>
              </span>
              <span class="countName">文章</span>
            </div>
            <div class="static">
              <span class="count">
                <nuxt-link to="/article">7</nuxt-link>
              </span>
              <span class="countName">标签</span>
            </div>
          </div>
          <div class="profile">
            <div class="avatar">
              <img src="~assets/img/vong.jpg">
            </div>
            <div class="author">
              <h3 class="name">vong</h3>
              <div class="career">前端</div>
            </div>
          </div>
          <div class="icon">
            <a v-for="i in links" :key="i.name" :href="i.href"><i class="iconfont" :class="i.name"></i></a>
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
export default {
  components:{
    top,
    iFooter
  },
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
  min-height: 600px;
  .aboutme{
    margin-top: -60px;
    margin-left: auto;
    margin-right: auto;
    padding: 25px;
    position: relative;
    width: 90%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
    .row{
      margin: 0 auto;
      display: flex;
      .post{
        width: 33%;
        // float: left;
        text-align: center;
        font-size: 0.9rem;
        color: #777;
        .static{
          display: inline-block;
          padding: 0.5rem;
          .count{
            font-size: 1.3rem;
            font-weight: bold;
            text-decoration: underline;
            a{
              color: #42b983;
            }
          }
        }
      }
      .profile{
        width: 33%;
        // float: left;
        text-align: center;
        margin: 0 auto;
        .avatar{
          text-align: center;
          img{
            max-width: 120px;
            width: 100%;
            border-radius: 50%;
            transform: translate3d(0, -70%, 0);
          }
        }
        .author{
          margin-top: -60px;
          .name{
            margin-bottom: 0.1rem;
            font-size: 1.6rem;
            font-weight: 500;
            color: #3C4858;
          }
          .career{
            margin: 8px 0;
            font-size: 0.9rem;
            font-weight: 400;
            color: #777;
          }
        }
      }
    }
    .icon{
      width: 33%;
      text-align: center;
      margin: 1.5rem 0 0 0;
      a{
        display: inline-block;
        width: 2.3rem;
        height: 2.3rem;
        line-height: 2.2rem;
        margin: 0 0.5rem;
        color: #fff;
        border: 1px solid #0f9d58;
        background: radial-gradient(#4cbf30, #0f9d58);
        font-size: 0.9rem;
        border-radius: 50%;
        box-shadow: 0 4px 6px rgba(50, 50, 93, .21), 0 2px 3px rgba(0, 0, 0, .1);
      }
    }
   }
}
</style>
