<template>
  <div id="userInfo">
    <div>
      <img src="../assets/home.png">
    </div>
    <div id="title">
      个人中心主页
    </div>
    <el-divider></el-divider>
    <div id="nav" class="inl">
      <el-menu default-active="1-1">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>个人中心</span>
          </template>
          <el-menu-item-group>
            <div id="personData">
              <el-menu-item index="1-1">
                <i class="el-icon-user-solid"></i>
                我的资料
              </el-menu-item>
            </div>

            <el-menu-item index="1-2">
              <i class="el-icon-star-on"></i>
              我的收藏
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-chat-dot-round"></i>
              我的消息
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div id="content" class="inl">
      <div id="personData-title">
        <i class="el-icon-user"></i>
        我的资料
        <img src="">
      </div>

      </div>
    </div>
    <div id="foot">
      <!--      <el-button @click="exit">退出登录</el-button>-->
    </div>
  </div>
</template>

<script>
import {httpGet} from "@/js/https";

export default {
  name: "UserInfo",
  methods: {
    exit() {
      httpGet("/user/logout")
      this.$store.dispatch("clear_user", {})
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#personData-title {
  width: 92%;
  font-size: 16px;
  background-color: rgb(245, 245, 245);
  margin-left: 2%;
  padding: 1% 0 1% 2%;
  text-align: left;
}

#title {
  font-size: 30px;
  color: rgb(85, 85, 85);
  margin-bottom: -1%;
  text-align: center;
}

#nav {
  vertical-align: top;
  width: 15%;
}

#content {
  vertical-align: top;
  width: 70%;
}
</style>
