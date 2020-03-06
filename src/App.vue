<template>
  <div id="app">
    <router-view></router-view>
   <Coretabbar></Coretabbar>
  </div>
</template>

<script>
  import Coretabbar from './components/content/Coretabbar.vue'
  export default {
    components: {
      Coretabbar
    }
  }
</script>


<style>
  @import "assets/css/basecss.css";

</style>