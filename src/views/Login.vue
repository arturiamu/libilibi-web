<template>
  <div id="border">
    <div id="top">
      <div id="top_total_length">
        <img id="top_total_length_picture" src="../assets/logo.jpg">
        <h1 style="display: inline"> 登录 ad astra</h1>
      </div>
    </div>

    <div id="nav">
      <div id="nav_total_size">
        <div id="nav_type">
          <el-form :model="ruleForm" :rules="rules" label-position="top" ref="ruleForm" label-width="80px"
                   class="demo-ruleForm">
            <div id="nav_input">
              <el-form-item label="账号：" prop="account" size="small">
                <el-input v-model="ruleForm.account" placeholder="请输入手机号或邮箱" size="small"
                          @keydown.native.enter="submitForm('ruleForm')"></el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="password" size="small">
                <el-input v-model="ruleForm.password" show-password placeholder="请输入密码" size="small"
                          @keydown.native.enter="submitForm('ruleForm')"></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <div id="button_size">
      <el-button size="small" type="primary" @click="submitForm('ruleForm')" style="width: 30%">登录</el-button>
      <div id="help_button">
        <router-link to="/forgetPassword">忘记密码?</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import {httpGet, httpPost} from "@/js/https";

export default {
  name: 'Login',
  methods: {
    submitForm(formName) {
      let that = this
      httpPost("/user/login", {
        account: this.ruleForm.account,
        password: this.ruleForm.password
      }).then(data => {
        if (data.state === 200) {
          this.$store.dispatch("ch_user", data.data)
          this.$router.push("/")
          httpGet("/category/selectByCategory").then(resp=>{
            console.log(resp)
            if(resp.state === 200){
              that.$store.dispatch("ch_favorites", resp.data)
            }
          })
        } else {
          this.fail(data.message)
        }
      })
    },
    fail(message) {
      this.$message.error({
        message: message,
      });
    },
  },
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'}
        ],
      },
    }
  }
}
</script>

<style scoped>
#top_total_length_picture {
  position: relative;
  top: 15px
}

#nav {
  text-align: left;
  margin: 15px auto;
  width: 55%;
}
</style>

