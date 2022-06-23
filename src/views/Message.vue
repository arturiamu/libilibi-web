<template>
  <div id="message">
    <div id="windows">
      <div id="nav" class="inl">
        <el-menu default-active="1-1">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>消息列表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">彭于晏</el-menu-item>
              <el-menu-item index="1-2">周杰伦</el-menu-item>
              <el-menu-item index="1-3">陈冠希</el-menu-item>
              <el-menu-item index="1-4">胡歌</el-menu-item>
              <el-menu-item index="1-5">余文乐</el-menu-item>
              <el-menu-item index="2-1">彭于晏</el-menu-item>
              <el-menu-item index="2-2">周杰伦</el-menu-item>
              <el-menu-item index="2-3">陈冠希</el-menu-item>
              <el-menu-item index="2-4">胡歌</el-menu-item>
              <el-menu-item index="2-5">余文乐</el-menu-item>
              <el-menu-item index="2-1">彭于晏</el-menu-item>
              <el-menu-item index="2-2">周杰伦</el-menu-item>
              <el-menu-item index="2-3">陈冠希</el-menu-item>
              <el-menu-item index="2-4">胡歌</el-menu-item>
              <el-menu-item index="2-5">余文乐</el-menu-item>
              <el-menu-item index="2-1">彭于晏</el-menu-item>
              <el-menu-item index="2-2">周杰伦</el-menu-item>
              <el-menu-item index="2-3">陈冠希</el-menu-item>
              <el-menu-item index="2-4">胡歌</el-menu-item>
              <el-menu-item index="2-5">余文乐</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div id="content" class="inl">
        <div id="content-title">
          彭于晏
        </div>
        <div id="content-body">
          <div id="content-body-talk">
            <div id="content-body-time">
              2022年6月22日 22:16:24
            </div>
            <div id="content-body-user">
              陈冠希 :
            </div>
            <div id="content-body-window">
              微信转账叁佰块，我带你回香港！微信转账叁佰块，我带你回香港啦！              微信转账叁佰块，我带你回香港！微信转账叁佰块，我带你回香港啦！微信转账叁佰块，我带你回香港！微信转账叁佰块，我带你回香港啦！
              微信转账叁佰块，我带你回香港！微信转账叁佰块，我带你回香港啦！
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div id="content-foot">
          <div id="content-foot-input">
            <el-input type="textarea" :autosize="{ minRows: 6.7}" placeholder="请输入内容"
                      maxlength="500" show-word-limit v-model="text">
            </el-input>
          </div>
          <div id="content-foot-sendButton" @click="sendMessage">
            <el-button type="primary" size="medium" style="width: 90%">发送</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      text: '',

    }
  },
  methods: {
    sendMessage() {

    }
  }
}
</script>

<style scoped>
#content-body-window {
  text-align: center;
  width: 80%;
  min-height: 75px;
  font-size: 20px;
  margin-left: 10%;
  border-radius: 8px;
  background-color: #ee5b7a;

}

#content-body-user {
  font-size: 25px;
  font-weight: bolder;
}

#content-body-time {
  text-align: center;

}

#content-body-talk {
  text-align: left;
}

#message {
  background-image: url("../assets/11.png");
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  min-height: 727px;
  margin-bottom: -2%;

}

#windows {
  margin: 0 auto;
  width: 80%;
  height: 100%;
}

#nav {
  width: 15%;
  vertical-align: top;
  opacity: 0.9;
  margin: 0 auto;
  max-height: 727px;
  overflow: scroll;
  overflow-x: hidden;


}

#content {
  vertical-align: top;
  width: 80%;
  background-color: white;
  opacity: 0.9;


}

#content-body {
  width: 1000px;
  height: 455px;
  margin: 0 auto;
  max-height: 1000px;
  min-height: 380px;
  overflow: scroll;
  overflow-x: hidden;


}

#content-foot {
  width: 1000px;
  height: 195px;
  overflow: scroll;
  margin: 0 auto;
  overflow-x: hidden;
}

#content-title {
  font-size: 20px;
  font-weight: bolder;
}

#content-foot-sendButton {
  margin-left: 85%;
  margin-top: -4%;

}

#content-foot-input {
  height: 100%;
}

</style>
