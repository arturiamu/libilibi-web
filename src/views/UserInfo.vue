<template>
  <div>
    <el-button @click="exit">a退出登录</el-button>
  </div>

</template>

<script>
import {httpGet} from "@/js/https";

export default {
  name: "UserInfo",
  methods:{
    exit() {
      httpGet("/user/logout")
      this.$store.dispatch("clear_user", {})
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
