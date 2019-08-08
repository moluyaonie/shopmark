import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app') //.$mount('#app')和 el:'#app" 一样,,只是多了一层内部判断
//3.0 以上的vue安装cli后都会默认安装 vue UI  ==>  vue ui 可以可视化,创建和导入项目
