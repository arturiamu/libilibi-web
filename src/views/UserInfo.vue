<template>
  <div>
    <a href="https://openapi.alipaydev.com/gateway.do">测试支付宝网关地址</a>
    <el-button @click="getVip1">购买月费会员</el-button>
    <el-button @click="getVip2">购买半年会员</el-button>
    <el-button @click="getVip3">购买年费会员</el-button>
    <el-button @click="exit">退出登录</el-button>
  </div>
</template>

<script>
import {logout,httpGet} from "@/js/https";

export default {
  name: "UserInfo",
  methods:{
    exit() {
      httpGet("/user/logout")
      this.$store.dispatch("clear_user", {})
      this.$router.push('/')
    },
    getVip1(){
      httpGet("/UserVip/getVip?vipLevel=1")
    },
    getVip2(){
      httpGet("/UserVip/getVip?vipLevel=2")
    },
    getVip3(){
      httpGet("/UserVip/getVip?vipLevel=3")
    },
  }
}
</script>

<style scoped>

</style>
