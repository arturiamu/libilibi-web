<template>
  <div>
    <a href="https://openapi.alipaydev.com/gateway.do">测试支付宝网关地址</a>
    <a href="http://localhost:8080/alipay/pay?subject=monthVip&traceNo=31313131231231231&totalAmount=28"><el-button @click="getVip1">购买月费会员</el-button></a>
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
      let orderNumber = Math.random().toString().substr(3,8)
      console.log(orderNumber)
      httpGet("http://localhost:8080/alipay/pay?subject=monthVip&traceNo="+orderNumber+"&totalAmount=28")
    },
    getVip2(){
      let orderNumber = Math.random().toString().substr(3,8)
      console.log(orderNumber)
      httpGet("http://localhost:8080/alipay/pay?subject=halfYearVip&traceNo="+orderNumber+"&totalAmount=150")
    },
    getVip3(){
      let orderNumber = Math.random().toString().substr(3,8)
      console.log(orderNumber)
      httpGet("http://localhost:8080/alipay/pay?subject=yearVip&traceNo="+orderNumber+"&totalAmount=250")
    },
  }
}
</script>

<style scoped>

</style>
