<template>
  <div>
    <h1>我是首页</h1>
    <p>嘻嘻嘻</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      message:'你好啊',
    }
  },
  created() {
    console.log('home created');
  },
  destroyed() {
    console.log('home destroyed');
  },
  //以下两个函数，只有该组件保持了状态，使用keep-alive时，才有效。
  activated() {
    console.log('home activated');
    // this.$router.push(this.path);
  },
deactivated() {
  console.log('home deactivated');
}
  // beforeRouteLeave(to,from,next){
  //   console.log(this.$route.path);
  //   this.path = this.$route.path;
  //   next()
  // }
}
</script>

<style scoped>

</style>
