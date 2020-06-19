<template>
  <div class="card">
    <nuxt-link to="/">
      <div class="article">
        <span class="title">令有琪图</span>
      </div>
      <div class="cardContent">
          <span class="articleTime">2020-05-30</span>
          <span class="tag">lyqt</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card{
  position: relative;
  width: 30%;
  margin: 15px 10px ;
  background-image: url(~assets/img/lyqt.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  transition: ease-in all 0.3s;
  box-shadow: 0 5px 15px rgba(50, 50, 93, .1), 0 5px 5px rgba(0, 0, 0, .07);
  &:hover{
    box-shadow: 0 5px 15px rgba(50, 50, 93, .1), 0 15px 15px rgba(0, 0, 0, .07);
  }
  .article{
    height: 180px;
  }
  span.title{
    width: 100%;
    position: absolute;
    color: #fff;
    padding: 0 5px;
    bottom: 40px;
    font-weight: 400;
    font-size: 24px;
  }
  .cardContent{
    width: 100%;
    height: 35px;
    position: absolute;
    background-color: #fff;
    bottom: 0;
    span.articleTime{
      font-size: 15px;
      color: #525f7f;
      position: absolute;
      left: 5px;
      bottom: 5px;
    }
    span.tag{
      font-size: 0.8rem;
      padding: 0px 8px;
      background-color: rgb(66, 179, 187);
      border-radius: 10px;
      color: #ffffff;
      position: absolute;
      right: 5px;
      bottom: 5px;
      line-height: 25px;
    }
  }
}
</style>
