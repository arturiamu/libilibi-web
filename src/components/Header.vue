<template>
  <div id="lb-header">
    <div id="logo" class="inl">
      <img style="vertical-align: middle " src="../assets/logo.jpg">
      <el-link href="/" :underline="false" style="font: 40px Segoe;color:#ee5b7a">𝖆𝖉 𝖆𝖘𝖙𝖗𝖆</el-link>
      <div id="nav" class="inl">
        <el-link :underline="false" type="primary" @click="goto('/')">主页</el-link>
        <el-link :underline="false" type="primary" @click="goto('/explore')">探索</el-link>
        <el-link :underline="false" type="primary" @click="goto('/live')">直播</el-link>
      </div>
    </div>
    <div id="search" class="inl">
      <div id="search-input" class="inl s-c">
        <el-input
            @keydown.native.enter="search"
            style="width:300px;"
            placeholder="请输入搜索内容"
            size="small"
            prefix-icon="el-icon-search"
            v-model="keyword">
        </el-input>
      </div>
      <div id="search-bt" class="inl">
        <el-button icon="el-icon-search" @click="search" size="mini" type="primary" round>搜索</el-button>
      </div>
    </div>
    <div id="user" class="inl">
      <div id="userinfo" class="inl">
        <div @click="goto('/user')" v-if="$store.state.user.username">
          <div id="avatar">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                       size="large  "></el-avatar>
          </div>
        </div>

        <div v-else>
          <el-link @click="loginVisible = true" :underline="false" type="primary">登录</el-link>
          <el-dialog
              :visible.sync="loginVisible"
              destroy-on-close="true"
              width="35%">
            <Account></Account>
          </el-dialog>
        </div>

      </div>
      <div id="appInfo" class="inl">
        <div id="message" class="inl app-info" @click="goto('/message')">
          <div id="m-icon" class="mess">
            <el-badge :value="$store.state.user.msg" :hidden="$store.state.user.msg===0" type="primary ">
              <el-link icon="el-icon-message" type="primary" :underline="false"></el-link>
            </el-badge>
          </div>
          <div class="mess">
            <el-link type="primary" :underline="false">消息</el-link>
          </div>
        </div>
        <div id="dynamic" class="inl app-info" @click="goto('/dynamic')">
          <div id="d-icon" class="mess">
            <el-badge :value="$store.state.user.dym" :hidden="$store.state.user.dym===0" type="primary ">
              <el-link icon="el-icon-magic-stick" type="primary" :underline="false"></el-link>
            </el-badge>
          </div>
          <div class="mess">
            <el-link type="primary" :underline="false">动态</el-link>
          </div>
        </div>
        <div id="collect" class="inl app-info" @click="goto('/favorite')">
          <div id="c-icon" class="mess">
            <el-link icon="el-icon-star-off" type="primary" :underline="false"></el-link>
          </div>
          <div class="mess">
            <el-link type="primary" :underline="false">收藏</el-link>
          </div>
        </div>
        <div id="history" class="inl app-info" @click="goto('/history')">
          <div id="h-icon" class="mess">
            <el-link icon="el-icon-video-camera" type="primary" :underline="false"></el-link>
          </div>
          <div class="mess">
            <el-link type="primary" :underline="false">历史</el-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {search} from '@/js/common'
import Account from '@/views/Account'

export default {
  name: "LBHeader",
  components: {Account},
  data() {
    return {
      keyword: "",
      loginVisible: false,
      account: '',
      password: '',
      nickname: '',
      mode: 'login'
    }
  },
  mounted() {
    this.$bus.$on('show', this.show)
    this.$bus.$on('close', this.close)
  },
  methods: {
    show() {
      this.loginVisible = true
    },
    close() {
      this.loginVisible = false
    },
    goto(type) {
      if (this.$route.path !== type) {
        this.$router.push(type)
      }
    },
    search: function () {
      if (this.keyword.replaceAll(" ", '') !== "") {
        if (this.$route.path !== '/search') {
          search(this, this.keyword)
        } else {
          this.$router.push('/')
          search(this, this.keyword)
        }
      }
    }
  }
}
</script>

<style scoped>
#nav a {
  font-size: 20px;
  padding-left: 25px;
}

#avatar {
  position: absolute;
  top: -27px;
  left: -30px
}

#search {
  background-color: #f6f6f6;
  border-radius: 7px;
  padding: 10px;
  position: relative;
  height: 32px;
}

#user {
  position: relative;
}

#appInfo a {
  font-size: 18px;
}

.app-info {
  padding-left: 15px;
}

#userinfo {
  position: relative;
  top: -7px;
  left: -5px;
}

#userinfo a {
  font-size: larger;
}

#lb-header {
  margin-top: 5px;
  border-bottom: 2px solid #ee5b7a;
  display: flex;
  justify-content: space-between;
  height: 60px;
}
</style>
