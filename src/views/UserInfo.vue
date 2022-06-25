<template>
  <div>
    <el-button @click="exit">退出登录</el-button>
    <el-button @click="modify">修改信息</el-button>
  </div>
</template>

<script>
import {httpGet, httpPost} from "@/js/https";

export default {
  name: "UserInfo",
  methods: {
    modify() {
      httpPost('/user/update', {
        username: 'artmu',
        items: this.$store.state.user.items
      }).then(resp => {
        if (resp.state === 200) {
          this.$store.dispatch("ch_user", resp.data)
        }
        console.log(resp)
      })
    },
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
