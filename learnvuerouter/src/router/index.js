import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../components/Home"
// import About from "../components/About";
// import User from "../components/User";

const Home=()=>import('../components/Home')
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
const About=()=>import('../components/About')
const User=()=>import('../components/User')
const Profile=()=>import('../components/Profile')
Vue.use(VueRouter);
const routes=[
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta: {
      title:'首页'
    },
    children:[
      {
        path: '',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    },
  },
  {
    path: '/user/:id',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
];
const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})
//前置首卫(guard)
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title,
  next()
})
//后置钩子(hook)
router.afterEach((to,from)=>{
  console.log('....');
})

export default router
