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

          <el-form-item v-if="flag===true" label="手机号：" prop="account" size="small">
            <el-input v-model="ruleForm.account" placeholder="请输入手机号" size="small"></el-input>
            <el-button :disabled="getCode" class="getCode" @click="verCode" size="mini">{{ codeBtnWord }}
            </el-button>
          </el-form-item>

          <el-form-item v-else label="邮箱：" prop="email" size="small">
            <el-input v-model="ruleForm.email" placeholder="请输入邮箱" size="small"></el-input>
            <el-button :disabled="getCode" class="getCode" @click="verCode" size="mini">{{ codeBtnWord }}
            </el-button>
          </el-form-item>

          <el-button size="mini" icon="el-icon-refresh" type="primary" @click="changeRegType">{{ tip }}
          </el-button>

          <el-form-item class="inl" label="验证码：" prop="ver" size="small">
            <el-input v-model="ruleForm.ver" placeholder="请输入验证码" size="small"></el-input>
          </el-form-item>

          <el-form-item id="reg-bt" size="small" class="inl">
            <el-button size="mini" type="primary" @click="submitForm('ruleForm')">注册并登录</el-button>
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
          <el-checkbox :border="true" size="mini" v-for="it in items" :label="it" :key="it.pid" style="margin: 6px">{{
              it.name
            }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>

import {getVerCode, register} from '@/js/https'

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
      checkedItems: [],
      items: this.$store.state.all_items,
      isIndeterminate: true,

      getCode: false,
      codeBtnWord: '获取验证码',
      waitTime: 61,
      flag: true,
      tip: "邮箱验证",
      ruleForm: {
        username: '',
        password: '',
        re_pass: '',
        account: '',
        email: '',
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
        account: [
          {required: true, message: '请输入有效手机号', trigger: 'change', pattern: /^1[3|4|5|6|7|8|9][0-9]{9}$/},
        ],
        email: [
          {
            required: true,
            message: '请输入有效邮箱',
            trigger: 'change',
            pattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
          }],
        ver: [
          {required: true, message: '请输入6位数字验证码', trigger: 'blur', pattern: /^\d{6}$/},
        ]
      }
    }
  },
  computed: {},
  methods: {
    fail(message) {
      this.$message.error({
        message: message,
      });
    },
    success() {
      this.$message({
        message: '注册成功，已为您自动登录！！！',
        type: 'success'
      });
    },
    verCode() {
      getVerCode(this)
    },
    submitForm() {
      register(this, 'ruleForm')
    },
    changeRegType() {
      this.flag = !this.flag
      if (this.tip === "邮箱验证") {
        this.tip = "手机验证"
      } else {
        this.tip = "邮箱验证"
      }
    }
  },
}
</script>

<style scoped>

#register {
  margin: 15px auto;
}
#reg-bt {
  position: relative;
  left: 2px;
}

#userInfo {
  width: 295px;
  text-align: left;
  vertical-align: top;
}

#userItem {
  margin-left: 5px;
  width: 33%;
  text-align: left;
  vertical-align: top;
}

.getCode {
  width: 100px;
  position: absolute;
  right: 2px;
  top: 3px;
}

</style>
