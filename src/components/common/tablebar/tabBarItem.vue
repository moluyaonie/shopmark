<template>

  <li class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <div></div>

  </li>


</template>

<script>
const props = {
  path: String,
  activeColor:{
    type:String,
    default:'green'
  }
}
export default {
  name: "",
  data() {
    return {
      // isActive: false
    }
  },
  props,
  methods: {
    itemClick() {

      this.$router.replace(this.path)
      // console.log(this.$route.path);


    },

  },
  computed: {
    isActive: function () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){

        return this.isActive&&this.activeColor!='' ? {color:this.activeColor}:{color:'green'}



    }
  },

}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    display: inline-block;


    margin: 0 auto;
  }

  .active {
    color: red
  }
</style>
