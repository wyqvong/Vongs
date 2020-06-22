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
        <div class="my">
          <div class="skills">
            <div class="skillsTitle">我的技能</div>
            <div class="row">
              <div class="mySkill" v-for="skill in skills.mySkills" :key="skill.skill">
                <div class="skillBar">
                  <div class="skillTitle">
                    <span>
                      {{skill.skill}}
                    </span>
                  </div>
                  <div class="skillPercent">
                    {{skill.percent+'%'}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="skills">
            <div class="otherSkills skillsTitle">其他技能</div>
            <div class="skillsText">
              <span>
                熟悉 HTML、CSS、JavaScript
              </span>
              <span>
                掌握Vue.js、小程序、ES6以及主流UI框架(bootstrap、elementui 等)
              </span>
            </div>
          </div>
          <div class="experience">
            <div class="experienceTitle"></div>

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
      ],

      skills:{
        mySkills:[
          {
            skill:'vue.js',
            percent: 80
          },
          {
            skill:'JavaScript',
            percent: 90
          },
          {
            skill:'Node.js',
            percent: 50
          }
        ],
        otherSkills:[]
      }
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
  margin-bottom: 40px;
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
    .my{
      padding: 3.8rem 1.5rem 0.8rem 1.5rem;
      .skills{
        text-align: center;
        .skillsTitle{
          font-size: 1.8rem;
          margin-bottom: 2.25rem;
          color: #34495e;
        }
        .row{
          flex-wrap: wrap;
          .mySkill{
          width: 50%;
            .skillBar{
              position: relative;
              max-width: 360px;
              margin: 15px auto;
              background: #eee;
              height: 30px;
              border-radius: 35px;
              .skillTitle{
                width: 80%;
                background: linear-gradient(to right, #4CAF50 0%, #81C784 100%);
                position: absolute;
                top: 0;
                left: 0;
                color: #fff;
                height: 30px;
                border-radius: 35px;
                font-size: 0.9rem;
                span{
                  line-height: 30px;
                  background: rgba(0, 0, 0, 0.15);
                  border-radius: 35px;
                }
              }
              .skillPercent{
                position: absolute;
                right: 10px;
                top: 0;
                font-size: 12px;
                line-height: 30px;
                color: rgba(0, 0, 0, 0.5);
              }
            }
          }
        }
        .otherSkills{
          font-size: 1.5rem;
          margin-top: 3rem;
        }
        .skillsText{
          box-shadow: 0 5px 15px rgba(50, 50, 93, 0.1), 0 5px 5px rgba(0, 0, 0, 0.07);
          text-align: left;
          border-radius: 10px;
          padding: 10px 20px;
          background: rgb(243, 239, 196);
          span{
            min-height: 30px;
            padding: 14px 20px;
            color: #34495e;
            background: #fff;
            border-radius: 10px;
            margin: 20px 0;
          }
        }
      }
    }
  }
}
</style>
