<template>
  <div id="user_info">
    <el-button @click="exit">退出登录</el-button>
  </div>
</template>

<script>
import {logout} from "@/js/common";

export default {
  name: "UserInfo",
  methods: {
    exit() {
      logout(this)
    }
  }
}
</script>

<style scoped>

</style>
