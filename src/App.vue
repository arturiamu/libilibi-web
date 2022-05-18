<template>
  <div id="app">
    <LBMainBody></LBMainBody>
  </div>
</template>

<script>
import LBMainBody from "@/components/LBMainBody";

export default {
  name: 'App',
  components: {LBMainBody},
  methods: {},
  beforeCreate() {
    let w = document.body.clientWidth
    this.$store.dispatch('ch_sc', w)
    if (w > 1000 && w < 1400) {
      document.body.style.zoom = '0.70'
    } else if (w > 1400 && w < 1900) {
      document.body.style.zoom = '0.80'
    }
    window.onresize = () => {
      return (() => {
        let w = document.body.clientWidth
        this.$store.dispatch('ch_sc', w)
        if (w >= 1900) {
          document.body.style.zoom = '1.0'
        } else if (w > 1400 && w < 1900) {
          document.body.style.zoom = '0.80'
        } else if (w > 1000 && w < 1400) {
          document.body.style.zoom = '0.70'
        } else if (w <= 1000) {
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
