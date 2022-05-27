<template>
  <div id="login">
    <el-link>login</el-link>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
    <el-link @click="register">首次使用？新用户注册</el-link>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        item: [],
      },
      rules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入账密码', trigger: 'change'},
          {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'}
        ],
      }
    };
  },
  mounted() {
  },
  methods: {
    register(){
      this.$router.push("/register")
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  computed: {}
}
</script>

<style scoped>
#login {
  margin: 20px auto;
  width: 500px;
  text-align: center;
}
</style>
