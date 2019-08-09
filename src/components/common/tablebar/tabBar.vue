<template>


  <ul id="tab-bar">
    <slot></slot>
  </ul>


</template>

<script>

export default {
  name: "tabBar"
}
</script>

<style scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f5f5f5;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  }
</style>
