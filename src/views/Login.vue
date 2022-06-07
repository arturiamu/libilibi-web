<template>
  <div id="border">
    <div id="top">
      <div id="top_total_length">
        <img id="top_total_length_picture" src="../assets/logo.jpg">
        <h4 style="display: inline"> 登录 ad astra</h4>
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
        <el-link :underline="false" type="primary">忘记密码?</el-link>
      </div>
    </div>
  </div>

</template>

<script>
import {login} from "@/js/common";

export default {
  name: 'Login',
  methods: {
    submitForm(formName) {
      login(this, formName)
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
#border {
  width: 420px;
  height: 378px;
  border-radius: 5px;
  background-color: white;
  font-weight: bold;
  margin: 0 auto;
}

#top {
  width: 250px;
  height: 40px;
  background-color: white;
  margin: 0 auto;
  padding-top: 30px;
}

#top_total_length {
  width: 380px;
  height: 40px;
  margin-left: -125px;
}

#top_total_length_picture {
  width: 47px;
  height: 40px;
  margin-left: 110px;

}

h4 {
  position: relative;
  top: -12px;
  left: 0px;
  font-size: 20px;
}

#nav_total_size {
  width: 380px;
  height: 205px;
  margin-left: 20px;
  margin-right: 10px;
}

#nav_input {
  width: 355px;
  text-align: left;
  vertical-align: top;
  padding: 5px;
}

#help_button {
  margin-top: 5px;
}
</style>

