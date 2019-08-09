<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home"  activeColor="">
        <img slot="item-icon" src="~assets/img/tabBar/home.svg" alt="" style="">
        <img slot="item-icon-active" src="~assets/img/tabBar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category"  activeColor="">
        <img slot="item-icon" src="~assets/img/tabBar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcar"  activeColor="">
        <img slot="item-icon" src="~assets/img/tabBar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBar/shopcart_active.svg" alt="">
        <div slot="item-text">商场</div>
      </tab-bar-item>
      <tab-bar-item path="/porfile"  activeColor="">
        <img slot="item-icon" src="~assets/img/tabBar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>

<script>
import tabBar from 'components/common/tablebar/tabBar'
import tabBarItem from 'components/common/tablebar/tabBarItem'

export default {
  name: "",
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>
