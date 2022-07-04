<template>
  <div id="other">
    <div id="wx">
      <div id="img">
        <img src="../assets/wx_login.png">
      </div>
      <el-link :underline="false" :href=url>微信登录</el-link>
    </div>
  </div>
</template>

<script>
import {httpGet} from "@/js/https";

export default {
  name: "Other",
  data() {
    return {
      url: "http://10.1.188.121:8160/api/ucenter/wx/wxLogin"
    }
  },
  methods: {
    wx() {
      httpGet("http://10.1.188.121:8160/api/ucenter/wx/wxLogin")
    }
  }
}
</script>

<style scoped>
#other {
  margin-top: 5px;
}
</style>
