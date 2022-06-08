<template>
  <div id="app">
    <MainBody></MainBody>
  </div>
</template>

<script>
import MainBody from "@/components/MainBody";

export default {
  name: 'App',
  components: {MainBody},
  mounted() {
    let w = document.body.clientWidth
    console.log(w)
    window.onresize = () => {
      return (() => {
        w = document.body.clientWidth
        console.log(w)
        let alpha = w / 1903
        console.log(alpha)
        document.body.style.zoom = alpha.toString()
      })();
    };
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
