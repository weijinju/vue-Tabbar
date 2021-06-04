<template>
  <div id="app">
    <h2>APP组件</h2>
    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
<!--    <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>-->
<!--    <router-link :to="{path:'/profile',query:{name:'wjj',age:18,height:188}}" tag="button">档案</router-link>-->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
<!--    正则表达式中，也不能随便＋空格-->
    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'lisi'
    }
  },
  methods:{
    homeClick(){
      this.$router.replace('/home')
      console.log('homeClick');
    },
    aboutClick(){
      this.$router.replace('/about')
      console.log('aboutClick');
    },
    userClick(){
      this.$router.replace('/user/'+this.userId)
    },
    profileClick(){
      this.$router.replace({
        path:'/profile',
        query:{
          name:'wjj',
          age:18,
          height:188
        }
      })
    }
  }
}
</script>
<style>
  .router-link-exact-active active{
    color: red;
  }
</style>
