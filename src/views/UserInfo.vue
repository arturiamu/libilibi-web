<template>
  <div>
    <el-button @click="exit">退出登录</el-button>
  </div>
</template>

<script>
import {logout} from "@/js/https";

export default {
  name: "UserInfo",
  methods:{
    exit() {
      logout(this)
    }
  }
}
</script>

<style scoped>

</style>
