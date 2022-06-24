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
              <el-menu-item index="1-1">
                <el-badge :value="value" :max="99" :hidden="value==0" class="item">
                  <el-link>
                    系统通知
                  </el-link>
                </el-badge>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div id="content" class="inl">
        <div id="content-title">
          系统通知
        </div>
        <div id="content-body">
          <div id="content-body-talk">
            <div id="content-body-time">
              2022年6月22日 22:16:24
            </div>

            <div id="content-body-window">
              微信转账叁佰块，我带你回香港！微信转账叁佰块，我带你回香港啦！ 微信转账叁佰块，我带你回香港！微信转账叁佰块，我带你回香港啦！微信转账叁佰块，我带你回香港！微信转账叁佰块，我带你回香港啦！
              微信转账叁佰块，我带你回香港！微信转账叁佰块，我带你回香港啦！
            </div>
          </div>
        </div>
        <el-divider content-position="left">用户操作</el-divider>
        <div id="content-body-deep">
          <div id="content-body-deep-1 " class="inl">
            <el-button type="primary" @click="ch_value">全部标为已读</el-button>
          </div>
          <div id="content-body-deep-2" class="inl">
            <el-button type="primary" @click="deleteMessage">全部删除</el-button>
          </div>
        </div>
        <el-divider></el-divider>
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
      value: 5

    }
  },
  methods: {
    ch_value() {
      this.value = 0
    },
    deleteMessage() {

    }
  }
}
</script>

<style scoped>

#content-body-deep-2 {
  margin-left: 100px;
}

.item {
  margin-top: -2px;
  margin-right: 6px;
}

#content-body-window {
  text-align: center;
  width: 80%;
  min-height: 75px;
  font-size: 20px;
  margin-left: 10%;
  margin-top: 3%;
  border-radius: 8px;
  background-color: #ee5b7a;

}

#content-body-time {
  padding-top: 2%;
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
  min-height: 554px;
  overflow: scroll;
  overflow-x: hidden;
}

#content-title {
  font-size: 25px;
  font-weight: bolder;
  padding-top: 2%;
}


</style>
