<template>
  <div id="login">
    user login
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      data: ''
    }
  },
  mounted() {
    this.a()
  },
  methods: {
    a() {
      let pr = 'https://bird.ioliu.cn/v1'
      let target = 'http://api.bilibili.com/x/web-interface/view?bvid=BV1xL4y1L7JT'
      let goto = pr + '?url=' + target
      axios.get(goto).then(resp => {
        this.data = resp.data.data
      })
    },
    computed: {}
  }
}
</script>

<style scoped>

</style>
