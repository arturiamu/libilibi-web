<template>
  <div id="login">
    <el-button @click="search">默认按钮</el-button>
  </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery'

export default {
  name: "LBLogin",
  data() {
    return {
      bvid: 'BV17r4y1b7z8',
      video: ''
    }
  },
  methods: {
    search: function () {
      let url = 'http://api.bilibili.com/x/web-interface/search/all/v2?keyword=1';
      let url2 = 'https://api.bilibili.com/x/web-interface/dynamic/region?rid=1';
      let url3 = 'http://api.bilibili.com/x/web-interface/search/all/v2/'
    },
    mounted() {

    },
    computed: {}
  }
}
</script>

<style scoped>

</style>
