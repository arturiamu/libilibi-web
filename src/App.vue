<template>
  <div id="app">
    <MainBody></MainBody>
  </div>
</template>

<script>
import MainBody from "@/components/LBMainBody";

export default {
  name: 'App',
  components: {MainBody},
  data() {
    return {}
  },
  methods: {},
  mounted() {
    let w = document.body.clientWidth
    this.$store.dispatch('chw', document.body.clientWidth)
    if (w > 1000 && w < 1400) {
      document.body.style.zoom = '0.70'
      // document.body.style.transform = 'scale(0.7)'
    } else if (w > 1400 && w < 1900) {
      document.body.style.zoom = '0.80'
      // document.body.style.transform = 'scale(0.8)'
    }
    window.onresize = () => {
      return (() => {
        let w = document.body.clientWidth
        this.$store.dispatch('chw', w)
        if (w >= 1900) {
          document.body.style.zoom = '1.0'
        } else if (w > 1400 && w < 1900) {
          document.body.style.zoom = '0.80'
          // document.body.style.transform = 'scale(0.8)'
        } else if (w > 1000 && w < 1400) {
          document.body.style.zoom = '0.70'
          // document.body.style.transform = 'scale(ratioX0.7)'
        }else if(w <= 1000){
          document.body.style.zoom = '0.5'
        }
      });
    };
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
