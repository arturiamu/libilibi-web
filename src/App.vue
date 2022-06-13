<template>
  <div id="app">
    <MainBody></MainBody>
  </div>
</template>

<script>
import MainBody from "@/components/MainBody";
import {httpGet, httpPost, getDefaultItems, getItems, isLogin} from "@/js/https";

export default {
  name: 'App',
  components: {MainBody},
  mounted() {
    httpGet("/user/isLogin").then(data=>{
      if(data.state === 200){
        this.$store.dispatch("ch_user", data.data)
      }
    })
    httpGet("/item/all").then(data=>{
      if(data.state === 200){
        this.$store.dispatch("ch_all_items", data.data)
      }
    })
    httpGet("/item/default").then(data=>{
      if(data.state === 200){
        this.$store.dispatch("ch_default_items", data.data)
        // this.$store.dispatch("ch_user_items", data.data)
      }
    })

    // getDefaultItems(this)
    let w = document.body.clientWidth
    console.log(w)
    console.log(this)
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
