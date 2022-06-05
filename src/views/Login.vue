<template>
  <div id="login">
    <div>
      <el-link>用户登录</el-link>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <div>
          <el-link :underline="false" @click="register">首次使用？新用户注册</el-link>
        </div>
        <div>
          <el-button @click="getTest">get</el-button>
          <el-button @click="addTest">add</el-button>
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
          {required: true, message: '请输入账号', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    getTest() {
      this.$axios.get("/app/test/get")
    },
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
