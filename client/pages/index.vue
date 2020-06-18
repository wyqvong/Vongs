<template>
  <div class="index">
    <top></top>
    <section>
      <div class="container">
        <div class="text">
          <h1>Blog<br>
            <span class="white">Welcome Vong's</span>
          </h1>
          <p>
            <span>
              "我们自己始终是太阳，被乌云和黑暗遮盖也在继续发光."<br>
              "Hi，世界那么大，很高兴在这里能被你看见."
            </span>
          </p>
          <nuxt-link to="/" class="btn">开始阅读</nuxt-link>
          <a href="https://github.com/wyqvong" class="btn">GitHub</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import top from '~/components/Header'
export default {
  components: {
    top
  }
}
</script>

<style lang="scss" scoped>
  .index{
    min-width: 100vw;
    min-height: 100vh;
  }
  section{
    display: block;
    padding: 90px 0 90px 0;
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

</style>

