<template>
  <div id="account">
    <div id="menu">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" @click="tag = 'login'">登录</el-menu-item>
        <el-menu-item index="2" @click="tag = 'register'">注册</el-menu-item>
        <el-menu-item index="3" @click="tag = 'other'">微信登录</el-menu-item>
      </el-menu>
    </div>
    <div v-if="tag === 'login'">
      <Login></Login>
    </div>
    <div v-if="tag === 'register'">
      <Register></Register>
    </div>
    <div v-if="tag === 'other'">
      <Other></Other>
    </div>
  </div>
</template>

<script>
import Login from "@/views/Login";
import Register from "@/views/Register";
import Other from "@/views/Other";

export default {
  name: "Account",
  components: {Register, Login, Other},
  data() {
    return {
      activeIndex: '1',
      tag: "login"
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
