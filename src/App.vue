<template>
  <div id="app">
    <div class="watterBox">
      <router-view/>
    </div>
    <Button/>
  </div>
</template>
<script>
import Button from './components/bottom.route.vue/index.vue'
export default {
    components:{
      Button,
    }
}
</script>

<style lang="scss">
*{margin:0;padding:0;list-style:none;}
html,body,#app{width:100%;height: 100%;}
html {
    // font-size: calc(100 / 750 * 100vw);
}
    h3{height:3rem;display:flex;justify-content:center;align-items:center;}

#app {
  display:flex;flex-direction:column;
  >.watterBox{
    flex:1;overflow:auto;
  }
}


</style>
