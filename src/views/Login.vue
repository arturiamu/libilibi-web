<template>
  <div id="login">
    <div>
      <el-link>用户登录</el-link>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input size="mini" v-model="ruleForm.username" placeholder="请输入手机号或邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input size="mini" v-model="ruleForm.password" show-password placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary" @click="submitForm('ruleForm')" style="width: 100%">登录</el-button>
        <div>
          <el-link :underline="false" @click="register">首次使用？新用户注册</el-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from "@/js/common";

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {required: true, message: '请输入手机号或邮箱', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    fail(message) {
      this.$message.error({
        message: message,
      });
    },
    register() {
      this.$router.push("/register")
    },
    submitForm(formName) {
      login(this, formName)
    },
  },
}
</script>

<style scoped>
#login {
  margin: 20px auto;
  width: 350px;
  text-align: center;
}
</style>
