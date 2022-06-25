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
                <el-badge :value="value" :max="99" :hidden="value===0" class="item">
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
          消息面板
        </div>
        <div id="content-body">
          <div id="content-body-talk" v-for="m in messages">
            <div id="content-body-time">
              {{ m.date }}
            </div>
            <div id="content-body-window">
              <el-card class="box-card">
                <div slot="header" class="box-card-title">
                  <el-link style="font-size: 20px" type="primary" :underline="false">{{ m.sendUserName }}</el-link>
                  <div class="box-card-button">
                    <el-button type="text" v-if="m.read === 0" @click.once="readValue(m)">标为已读</el-button>
                    <el-button type="text" v-else>已读</el-button>
                    <el-button type="text" @click="del_one(m)">删除</el-button>
                  </div>
                </div>
                <div class="box-card-content">
                  {{ m.text }}
                </div>
              </el-card>
            </div>
          </div>
        </div>
        <el-divider content-position="left">用户操作</el-divider>
        <div id="content-body-deep">
          <div id="content-body-deep-1 " class="inl">
            <el-button type="primary" @click.once="ch_value">全部标为已读</el-button>
          </div>
          <div id="content-body-deep-2" class="inl">
            <el-button type="primary" @click="del_all">全部删除</el-button>
          </div>
        </div>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script>
import {httpGet} from "@/js/https";

export default {
  name: "Message",
  data() {
    return {
      text: '',
      value: 0,
      messages: []
    }
  },
  mounted() {
    httpGet('/message/getAll').then(resp => {
      console.log(resp)
      if (resp.state === 200) {
        this.messages = resp.data
        for (let i = 0; i < this.messages.length; i++) {
          if (this.messages[i].read === 0) {
            this.value++
          }
        }
      }
    })
  },
  methods: {
    ch_value() {
      this.value = 0
      for (let i = 0; i < this.messages.length; i++) {
        this.messages[i].read = 1
      }
      httpGet('/message/readAll')
    },
    readValue(his) {
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i].id === his.id) {
          this.messages[i].read = 1
          httpGet('/message/read/' + his.id)
          break
        }
      }
      if (this.value > 0) {
        this.value--
      }
      this.$forceUpdate()
    },
    del_one(his) {
      if (his.read === 0) {
        this.readValue(his)
      }
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i].id === his.id) {
          this.messages.splice(i, 1)
          httpGet('/message/del/' + his.id)
          break
        }
      }
      this.$forceUpdate()
    },
    del_all() {
      let that = this
      that.messages = []
      httpGet('/message/delAll')
      this.value = 0
    }

  }
}
</script>

<style scoped>
.box-card-content {
  color: rgb(107, 117, 123);
  font-size: medium;
  text-align: left;
}

.box-card-button {
  float: right;
  margin-top: -1%;
  padding-right: 3%;
}

.box-card-title {
  text-align: left;
}

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
  color: rgb(102, 102, 102);
  padding-top: 2%;
  text-align: center;
}

#content-body-talk {
  text-align: left;
}

#message {
  background-image: url("../assets/message.png");
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
  color: rgb(51, 51, 51);
  font-size: 25px;
  font-weight: bolder;
  padding-top: 2%;
}


</style>
