<template>
  <div id="lb-header">
    <div id="logo" class="inl">
      <img style="vertical-align: middle " src="../assets/logo.png">
      <el-link href="/" :underline="false" style="font: 40px 'Segoe Print;color:#ee5b7a">Artless-Mu</el-link>

      <div id="nav" class="inl">
        <el-link :underline="false" type="primary" @click="home">首页</el-link>
        <el-link :underline="false" type="primary" @click="tip">直播</el-link>
        <el-link :underline="false" type="primary" @click="tip">热门</el-link>
      </div>
    </div>

    <div id="search" class="inl">
      <div id="search-input" class="inl s-c">
        <el-input
            style="width:300px;"
            placeholder="请输入内容"
            size="small"
            prefix-icon="el-icon-search"
            v-model="keyword">
        </el-input>
      </div>
      <div id="search-bt" class="inl">
        <el-button @click="search" size="small" type="primary" round>搜索</el-button>
      </div>
    </div>
    <div id="user" class="inl">
      <div id="userinfo" class="inl">
        <div id="avatar" @click="tip">
          <el-avatar :src="user.pic"></el-avatar>
        </div>
      </div>
      <div id="appInfo" class="inl">
        <div id="message" class="inl app-info" @click="tip">
          <div id="m-icon" class="mess">
            <el-link icon="el-icon-message" type="primary" :underline="false"></el-link>
          </div>
          <div class="mess">
            <el-link type="primary" :underline="false">消息</el-link>
          </div>
        </div>
        <div id="dynamic" class="inl app-info" @click="tip">
          <div id="d-icon" class="mess">
            <el-link icon="el-icon-bangzhu" type="primary" :underline="false"></el-link>
          </div>
          <div class="mess">
            <el-link type="primary" :underline="false">动态</el-link>
          </div>
        </div>
        <div id="collect" class="inl app-info" @click="tip">
          <div id="c-icon" class="mess">
            <el-link icon="el-icon-star-off" type="primary" :underline="false"></el-link>
          </div>
          <div class="mess">
            <el-link type="primary" :underline="false">收藏</el-link>
          </div>
        </div>
        <div id="history" class="inl app-info" @click="tip">
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
import {bl_search} from '@/js/common'

export default {
  name: "LBHeader",
  data() {
    return {
      // user: {name: "ArturiaMu", pic: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png", sex: "男"},
      user: {name: "", pic: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png", sex: "男"},
      keyword: "",
    }
  },
  methods: {
    home: function () {
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    },
    tip: function () {
      this.$message({
        message: '该功能暂未开放！！！',
        type: 'success'
      });
    },
    net: function () {
      this.$message({
        message: '当前网络环境异常，该功能暂停使用！！！',
        type: 'success'
      });
    },
    search: function () {
      if (this.keyword.replaceAll(" ", '') !== "") {
        bl_search(this, this.keyword)
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


#search {
  height: 35px;
  background-color: #f6f6f6;
  border-radius: 7px;
  padding: 10px;
  position: relative;
  top: 10px;
}

#user {
  position: relative;
  top: 10px
}

#appInfo a {
  font-size: 18px;
}

.app-info {
  padding-left: 15px;
}

#avatar span {
  position: relative;
  top: 5px;
}

#lb-header {
  border-bottom: 2px solid #e36666;
  display: flex;
  justify-content: space-between;
}
</style>
