<template>
  <div id="account">
    <div id="menu">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" @click="to('login')">登录</el-menu-item>
        <el-menu-item index="2" @click="to('register')">注册</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    to(target) {
      if (target === 'login') {
        this.$router.push('/account/login')
      }
      if (target === 'register') {
        this.$router.push('/account/register')
      }
    }
  },
  mounted() {
    this.to('login')
  }
}
</script>

<style scoped>
#menu{
  width: 420px;
  margin: 0 auto;
}
</style>
