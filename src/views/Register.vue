<template>
  <div id="register">
    <div id="userInfo" class="inl">
      <el-link :underline="false">基本信息:</el-link>
      <el-divider></el-divider>
      <div id="info">
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
            <el-input v-model="ruleForm.phone" placeholder="请输入手机号" size="small"></el-input>
            <el-button :disabled="getCode" id="getVerCode" @click="getVerCode" size="mini">{{ codeBtnWord }}
            </el-button>
          </el-form-item>

          <el-form-item class="inl" label="验证码：" prop="ver" size="small">
            <el-input v-model="ruleForm.ver" placeholder="请输入验证码" size="small"></el-input>
          </el-form-item>

          <el-form-item id="reg-bt" size="small" class="inl">
            <el-button size="small" type="primary" @click="submitForm('ruleForm')">注册并登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div id="userItem" class="inl">
      <div>
        <el-link :underline="false">选择兴趣模块:</el-link>
        <el-divider></el-divider>
      </div>
      <div id="chose">
        <el-checkbox-group v-model="checkedItems">
          <el-checkbox :border="true" size="small" v-for="it in items" :label="it" :key="it.pid" style="margin: 6px">{{
              it.name
            }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {getVerCode} from '@/js/common'

axios.defaults.withCredentials = true

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

    return {
      defaultChecked: [
        {name: '舞蹈', url: 'dance', pid: 129},
        {name: '动画', url: 'animation', pid: 1},
        {name: '番剧', url: 'fan_drama', pid: 13},
        {name: '鬼畜', url: 'ki_chi_ku', pid: 119}
      ],
      checkedItems: [],
      items: this.$store.state.explore,
      isIndeterminate: true,

      getCode: false,
      codeBtnWord: '获取验证码',
      waitTime: 61,
      ruleForm: {
        username: '',
        password: '',
        re_pass: '',
        phone: '',
        ver: '',
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
          {required: true, message: '请输入有效手机号', trigger: 'blur', pattern: /^1[3|4|5|6|7|8|9][0-9]{9}$/},
        ],
        ver: [
          {required: true, message: '请输入6位数字验证码', trigger: 'blur', pattern: /^\d{6}$/},
        ],
      }
    };
  },
  computed: {},
  methods: {
    success() {
      this.$message({
        message: '注册成功，已为您自动登录！！！',
        type: 'success'
      });
    },
    getVerCode() {
      const phone_re = /^1[3|4|5|6|7|8|9][0-9]{9}$/
      if (phone_re.test(this.ruleForm.phone)) {
        axios.post("http://localhost:9000/user/registerSMS", {
          account: this.ruleForm.phone
        }).then(resp => {
          console.log(resp)
        })
        this.waitTime--
        this.codeBtnWord = `${this.waitTime}s 后重新获取`
        this.getCode = true
        let that = this
        let timer = setInterval(function () {
          if (that.waitTime > 1) {
            that.waitTime--
            that.codeBtnWord = `${that.waitTime}s 后重新获取`
          } else {
            clearInterval(timer)
            that.codeBtnWord = '获取验证码'
            that.waitTime = 61
            that.getCode = false
          }
        }, 1000)
      }
    },
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.checkedItems.length === 0) {
            this.checkedItems = this.defaultChecked
          }
          console.log(1111)
          axios.post("http://localhost:9000/user/register", {
            user: {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              account: this.ruleForm.phone,
              items: this.checkedItems,
            },
            verCode: this.ruleForm.ver
          }).then(resp => {
            console.log(resp)
            if (resp.data.state === 200) {
              that.$store.dispatch("ch_user", resp.data.data)
              that.$router.push("/")
              that.success()
            }
          })
        }
      });
    },
  },
}
</script>

<style scoped>
#reg-bt {
  position: relative;
  left: 16%;
}

#info {
  margin-top: 5px;
}

#chose {
  margin-top: 5px;
}

#userInfo {
  width: 355px;
  text-align: left;
  vertical-align: top;
  padding: 5px;
}

#userItem {
  margin-left: 5px;
  width: 14%;
  text-align: left;
  vertical-align: top;
  padding: 5px;
}

#register {
  margin: 20px auto;
  width: 80%;
}

#getVerCode {
  width: 100px;
  position: absolute;
  right: 2px;
  top: 3px;
}

</style>
