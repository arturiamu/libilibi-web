<template>
  <div>
    <div>
      <el-button @click="getVip1">购买月费会员</el-button>
      <el-button @click="getVip2">购买半年会员</el-button>
      <el-button @click="getVip3">购买年费会员</el-button>
      <el-button @click="exit">退出登录</el-button>
    </div>
    <div id="pay" v-html="apply">

    </div>
  </div>
</template>

<script>
import {httpGet} from "@/js/https";

export default {
  name: "Vip",
  data() {
    return {
      content: '',
      apply: ''
    }
  },
  methods: {
    exit() {
      httpGet("/user/logout")
      this.$store.dispatch("clear_user", {})
      this.$router.push('/')
    },
    getVip1() {
      let subject = "mouthvip";
      console.log("----------------")
      let money = 25;
      httpGet("/pay/topay?subject=" + subject + "&money=" + money + "").then(resp => {
        console.log(resp)
        let divbody = document.createElement('div')
        divbody.innerHTML = resp   //接口返回的data是一个页面，这里将其添加进新的div
        document.body.appendChild(divbody)
        document.forms[0].submit()   //提交表单
      })
    },

    getVip2() {
      let subject = "halfYearVip";
      let money = 140;
      httpGet("/pay/topay?subject=" + subject + "&money=" + money + "").then(resp => {
        console.log(resp)
        // window.open(resp, "adastra 视频分享", 'height=720, width=900, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
        // this.apply = resp
        // document.forms[0].submit()

        let divbody = document.createElement('div')
        divbody.innerHTML = resp   //接口返回的data是一个页面，这里将其添加进新的div
        document.body.appendChild(divbody)
        document.forms[0].submit()   //提交表单
      })
    },

    getVip3() {
      let subject = "yearVip";
      let money = 260;
      httpGet("/pay/topay?subject=" + subject + "&money=" + money + "").then(resp => {
        console.log(resp)
        // window.open(resp, "adastra 视频分享", 'height=720, width=900, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
        // this.apply = resp
        // document.forms[0].submit()


        let divbody = document.createElement('div')
        divbody.innerHTML = resp   //接口返回的data是一个页面，这里将其添加进新的div
        document.body.appendChild(divbody)
        document.forms[0].submit()   //提交表单
      })
    },
  }
}
</script>

<style scoped>

</style>
