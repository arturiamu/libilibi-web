<template>
  <div id="register">
    <el-form :model="ruleForm" :rules="rules" label-position="top" ref="ruleForm" label-width="80px"
             class="demo-ruleForm">

      <el-form-item label="用户名：" prop="username" size="small">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名" size="small"></el-input>
      </el-form-item>

      <el-form-item label="密码：" prop="password" size="small">
        <el-input v-model="ruleForm.password" show-password placeholder="请输入密码" size="small"></el-input>
      </el-form-item>

      <el-form-item label="确认密码：" prop="re_pass" size="small">
        <el-input v-model="ruleForm.re_pass" show-password placeholder="确认密码" size="small"></el-input>
      </el-form-item>

      <el-form-item label="手机号：" prop="phone" size="small">
        <el-input v-model.number="ruleForm.phone" placeholder="请输入手机号" size="small"></el-input>
        <el-button id="getVerCode" @click.prevent="getVerCode" size="mini">获取验证码</el-button>
      </el-form-item>

      <el-form-item label="验证码：" prop="ver" size="small">
        <el-input v-model.number="ruleForm.ver" placeholder="请输入验证码" size="small"></el-input>
      </el-form-item>

      <el-form-item size="small">
        <el-button size="small" type="primary" @click="submitForm('ruleForm')">注册并登录</el-button>
      </el-form-item>

    </el-form>
    <el-button @click.prevent="getVerCode" size="mini">获取验证码111</el-button>
    <el-button @click.prevent="test" size="mini">测试1111</el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    let validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    let validatePhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/;
      if (phoneReg.test(value)) {
        callback();
      } else {
        callback(new Error("手机号格式有误"));
      }
    };
    return {

      ruleForm: {
        username: '',
        password: '',
        re_pass: '',
        phone: '',
        ver: '',
        item: [],
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'}
        ],
        re_pass: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'},
          {validator: validatePass, trigger: "blur"},
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
          {validator: validatePhone, trigger: "blur"}
        ],
        ver: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {min: 6, max: 6, message: '验证码格式有误', trigger: 'blur'}
        ],
      }
    };
  },
  mounted() {
  },
  methods: {
    test() {
      axios.post("http://localhost:9000/user/registerSMSTest").then(response => {
        console.log(response)
      })
    },
    getVerCode() {
      axios.post("http://localhost:9000/user/registerSMS", {
        phone: "15911245016"
      }).then(response => {
        console.log(response)
      })
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
#register {
  margin: 20px auto;
  width: 350px;
  text-align: left;
}

#getVerCode {
  width: 100px;
  position: absolute;
  right: 2px;
  top: 3px;
}

</style>
