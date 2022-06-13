<template>
  <div id="ForgetPassword">
    <div id="head">
      <div id="head-nav">
        <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
          <el-step title="身份验证"></el-step>
          <el-step title="密码重置"></el-step>
          <el-step title="重置完成"></el-step>
        </el-steps>
      </div>
    </div>

    <div id="body">
      <el-form :model="ruleForm" :rules="rules">
        <div v-if="active === 0" id="step1" index="1">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" prefix-icon="el-icon-user-solid"
                      placeholder="请输入邮箱或手机号码"></el-input>
          </el-form-item>
          <div id="step1-bt">
            <el-button :disabled="getCode" id="getVerCode" @click="sendCode" size="small">{{ codeBtnWord }}</el-button>
          </div>

          <el-form-item v-model="ruleForm.ver" prop="ver">
            <el-input v-model="ruleForm.ver" prefix-icon="el-icon-message" placeholder="请输入验证码"></el-input>
          </el-form-item>
        </div>
        <div v-if="active === 1" id="step2" index="2">
          <el-form-item v-model="ruleForm.password" prop="password">
            <el-input prefix-icon="el-icon-lock" v-model="ruleForm.password" show-password
                      placeholder="请输入新密码"></el-input>
          </el-form-item>
          <div id="step2-input">
            <el-form-item v-model="ruleForm.re_pass" prop="re_pass">
              <el-input prefix-icon="el-icon-lock" v-model="ruleForm.re_pass" show-password
                        placeholder="请再次输入密码"></el-input>
            </el-form-item>
          </div>
        </div>
        <div v-if="active === 2" id="step3" index="3">
          <h2>新登录密码重置成功! 请重新登录</h2>
          <div>
            <el-button style="margin-top: 50px;" @click="reLogin">重新登录</el-button>
          </div>
        </div>
      </el-form>

    </div>

    <div v-if="active !== 2" id="foot">
      <el-button style="margin-top: 25px;" @click="next">下一步</el-button>
    </div>

  </div>
</template>

<script>
import {getVerCode, login} from "@/js/https";

export default {
  name: 'ForgetPassword',
  data() {
    let validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      codeBtnWord: '获取验证码',
      getCode: false,
      active: 0,
      activeIndex: '1',
      tag: "login",

      ruleForm: {
        username: '',
        password: '',
        re_pass: '',
        phone: '',
        ver: '',
      },
      rules: {
        username: [
          {required: true, message: '请输入正确的邮箱或手机号码', trigger: 'blur'},
        ],
        ver: [
          {required: true, message: '请输入正确的验证码', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'}
        ],
        re_pass: [
          {required: true, message: '请再次输入密码', trigger: 'blur'},
          {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'},
          {validator: validatePass, trigger: "blur"},
        ],
      },
    }
  },
  mounted() {
    this.$bus.$emit('close')
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    sendCode() {
      getVerCode(this)
    },
    reLogin() {
      this.$bus.$emit("show")
    }

  }

}
</script>

<style scoped>
#ForgetPassword {
  width: 750px;
  height: 500px;
  margin: 0 auto;
}

#head {
  width: 700px;
  height: 100px;
  margin: 0 auto;
}

#head-nav {
  padding-top: 10px;
}

#body {
  width: 700px;
  height: 200px;
  margin: 0 auto;

}

#foot {
  width: 700px;
  height: 100px;
  margin: 0 auto;
}

#step1 {
  width: 50%;
  padding-top: 25px;
  margin: 0 auto;
  autosize: true;
}

#step1-bt {
  position: relative;
  top: 36px;
  left: 120px;
  z-index: 10;
}

#step2 {
  width: 50%;
  padding-top: 25px;
  margin: 0 auto;
  autosize: true;
}

#step2-input {
  position: relative;
  top: 30px;
  left: 0px;
  z-index: 10;
}
#step3{
  padding-top: 70px;
}

</style>
