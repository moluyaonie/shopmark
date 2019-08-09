import Vue from 'vue'
import VueRouter from 'vue-router'


//导入路由模块
const home =()=>import('view/home/home')
const category =()=>import('view/category/category')
const shopcar =()=>import('view/shopcar/shopcar')
const porfile =()=>import('view/porfile/porfile')


Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: home},
  {path: '/category', component: category},
  {path: '/shopcar', component: shopcar},
  {path: '/porfile', component: porfile}

]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
