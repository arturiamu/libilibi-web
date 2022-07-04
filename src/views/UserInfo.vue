<template>
  <div id="userInfo">
    <div>
      <div id="vipBk" v-if="$store.state.vip===true">
        <img src="../assets/vipBackground.webp">
      </div>
      <div v-else>
        <img src="../assets/home.png">
      </div>

    </div>
    <div id="title">
      <div id="vipTitle" v-if="$store.state.vip===true">
        <div id="vipTitle-1" class="inl">
          <img src="../assets/vipImg.webp">
        </div>
        <div id="vipTitle-2" class="inl">
          {{ $store.state.user.username + ' ' }}的主页
        </div>
      </div>
      <div v-else>
        {{ $store.state.user.username + ' ' }}的主页
      </div>
    </div>
    <image-cropper
        v-show="imagecropperShow"
        :width="300"
        :height="300"
        :key="imagecropperKey"
        :url="imagepath"
        field="file"
        @close="close"
        @crop-upload-success="cropSuccess"/>
    <div id="divider">
      <el-divider></el-divider>
    </div>
    <div id="nav" class="inl">
      <el-menu default-active="1-1">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>个人中心</span>
          </template>
          <el-menu-item-group>
            <div id="personData">
              <el-menu-item index="1-1" @click="flag='info'">
                <i class="el-icon-user-solid"></i>
                我的资料
              </el-menu-item>
            </div>

            <el-menu-item index="1-2" @click="$router.push('/collection')">
              <i class="el-icon-star-on"></i>
              我的收藏
            </el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/message')">
              <i class="el-icon-chat-dot-round"></i>
              我的消息
            </el-menu-item>
            <el-menu-item index="1-4" @click="flag='data'">
              <i class="el-icon-reading"></i>
              我的数据
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div id="content" class="inl">
      <div id="info" v-if="flag === 'info'">
        <el-dialog
            :visible.sync="updateVisible"
            destroy-on-close="true"
            width="25%">
          <div id="createdForm">
            <div id="createdForm-head">
              修改信息
            </div>
            <el-divider></el-divider>
            <div id="update-info">
              <div id="name">
                用户名(3-15个字符)：
                <el-input v-model="username" placeholder="请输入用户名" size="small"></el-input>
              </div>
              <div id="item">
                <div id="userItem" class="inl">
                  <div>
                    <el-link :underline="false">选择兴趣模块:</el-link>
                  </div>
                  <div id="chose">
                    <el-checkbox-group v-model="checkedItems">
                      <el-checkbox :border="true" size="mini" v-for="it in items" :label="it" :key="it.pid"
                                   style="margin: 6px">{{
                          it.name
                        }}
                      </el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </div>
            <div id="createdForm-foot">
              <el-button type="primary" @click="update" style="width: 25%">确认修改</el-button>
            </div>
          </div>
        </el-dialog>
        <div id="content1">
          <div id="personData-title">
            <i class="el-icon-user"></i>
            我的资料
          </div>
          <div id="personData-avatar" class="inl">
            <img :src="$store.state.avatar" @click="imagecropperShow=true" width="120px" height="120px">
          </div>
          <div id="personData-body" class="inl">
            <div id="personData-names">
              <div id="personData-name-1" class="inl" @click="updateVisible = true">
                {{ $store.state.user.username }}
              </div>
              <div id="personData-name-2" class="inl" @click="updateVisible = true">
                <i class="el-icon-edit"></i>
              </div>
              <div id="personData-name-3" class="inl">
                <img src="../assets/qiandao.png">
              </div>
              <div id="exit" class="inl">
                <el-link @click="exit" type="primary" :underline="false">退出登录</el-link>
              </div>
            </div>
            <div id="log" @click="updateVisible = true">
              <el-link :underline="false">{{ log }}</el-link>
            </div>
            <div id="personData-des">
              用户等级
            </div>
            <div id="personData-level">
              <div id="personData-level-1" class="inl">
                <img src="../assets/LV1.png">
              </div>
              <div id="personData-level-2" class="inl">
                <el-progress :percentage="60"></el-progress>
              </div>
              <div id="personData-level-3" class="inl">
                <el-link type="primary">等级特权</el-link>
              </div>
            </div>
            <div id="personData-items">
              <div id="personData-items-1" class="inl">
                <i class="el-icon-watermelon">数量:10</i> <i class="el-icon-lollipop">数量:3</i> <i
                  class="el-icon-sugar">数量:0 </i>
              </div>
              <div id="personData-items-2" class="inl">
                <el-link type="primary">信用积分: 100分</el-link>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div id="content2">
          <div id="personData-vip">
            <div id="personData-vip-1" class="inl">
              <i class="el-icon-trophy-1"></i>
              会员专属
            </div>
            <div id="personData-vip-2" class="inl">
              七大贵族 显赫身份 尊贵特权 奢华福利
            </div>
            <div id="personData-vip-3" class="inl">
              <el-button type="primary" size="small" @click="$router.push('/vip')" round="">查看会员特权</el-button>
            </div>
          </div>
          <div id="personData-img">
            <img src="../assets/vip2.jpg" width=100%>
          </div>
        </div>
        <div id="content3">
          <div id="personAccount">
            <div id="personAccount-title">
              <i class="el-icon-user"></i>
              账户设置
            </div>
            <div id="personAccount-number" class="inl">
              <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
              </el-rate>
            </div>
            <div id="personAccount-tip" class="inl">
              安全评分2.5分，帐号存在安全风险，可进一步提升
            </div>
            <div id="personAccount-body">
              <div id="personAccount-body1" class="inl">
                <div id="personAccount-body1-1" class="inl">
                  <i class="el-icon-mobile-phone"></i>
                </div>
                <div class="inl">
                  <div id="personAccount-body1-2">
                    手机号已绑定
                  </div>
                  <div id="personAccount-body1-3">
                    您可以享受手机相关的安全及提醒服务
                  </div>
                </div>
                <div id="personAccount-body1-4" class="inl">
                  <el-button round type="success" size="medium">解绑手机</el-button>
                </div>
              </div>
              <div id="personAccount-body2" class="inl">
                <div id="personAccount-body2-1" class="inl">
                  <i class="el-icon-message"></i>
                </div>
                <div class="inl">
                  <div id="personAccount-body2-2">
                    邮箱未绑定
                  </div>
                  <div id="personAccount-body2-3">
                    您可以使用邮箱来保障您的帐号安全
                  </div>
                </div>
                <div id="personAccount-body2-4" class="inl">
                  <el-button round type="warning" size="medium">绑定邮箱</el-button>
                </div>
              </div>
              <div id="personAccount-body3" class="inl">
                <div id="personAccount-body3-1" class="inl">
                  <i class="el-icon-bank-card"></i>
                </div>
                <div class="inl">
                  <div id="personAccount-body3-2">
                    银行卡绑定
                  </div>
                  <div id="personAccount-body3-3">
                    完善银行卡信息，便于提取直播收益
                  </div>
                </div>
                <div id="personAccount-body3-4" class="inl">
                  <el-button round type="warning" size="medium">绑定银行卡</el-button>
                </div>
              </div>
              <div id="personAccount-body4" class="inl">
                <div id="personAccount-body4-1" class="inl">
                  <i class="el-icon-postcard"></i>
                </div>
                <div class="inl">
                  <div id="personAccount-body4-2">
                    身份证认证
                  </div>
                  <div id="personAccount-body4-3">
                    完善身份证信息，便于提取直播收益
                  </div>
                </div>
                <div id="personAccount-body4-4" class="inl">
                  <el-button round type="warning" size="medium">绑定身份证</el-button>
                </div>
              </div>
              <div id="personAccount-body5" class="inl">
                <div id="personAccount-body5-1" class="inl">
                  <i class="el-icon-thumb"></i>
                </div>
                <div class="inl">
                  <div id="personAccount-body5-2">
                    尚未实名认证
                  </div>
                  <div id="personAccount-body5-3">
                    认证后可申请直播间
                  </div>
                </div>
                <div id="personAccount-body5-4" class="inl">
                  <el-button round type="warning" size="medium">立即认证</el-button>
                </div>
              </div>
              <div id="personAccount-body6" class="inl">
                <div id="personAccount-body6-1" class="inl">
                  <i class="el-icon-lock"></i>
                </div>
                <div class="inl">
                  <div id="personAccount-body6-2">
                    密码强度(低)
                  </div>
                  <div id="personAccount-body6-3">
                    目前您的密码强度低
                  </div>
                </div>
                <div id="personAccount-body6-4" class="inl">
                  <el-button round type="warning" size="medium">修改密码</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content4">
          <div id="personBand-title">
            <i class="el-icon-connection"></i>
            第三方账户绑定
          </div>
          <div id="personBand-body">
            <div id="personBand-body1" class="inl">
              <div id="personBand-body1-1" class="inl">
                <img src="../assets/qq1.png" width="40px" height="40px">
              </div>
              <div class="inl">
                <div id="personBand-body1-2">
                  绑定QQ
                </div>
                <div id="personBand-body1-3">
                  绑定QQ帐号，使用QQ帐号便捷登录
                </div>
              </div>
              <div id="personBand-body1-4" class="inl">
                <el-button round type="warning" size="medium">绑定</el-button>
              </div>
            </div>
            <div id="personBand-body2" class="inl">
              <div id="personBand-body2-1" class="inl">
                <img src="../assets/wx.png" width="43px" height="40px">
              </div>
              <div class="inl">
                <div id="personBand-body2-2">
                  绑定微信
                </div>
                <div id="personBand-body2-3">
                  绑定微信帐号，使用微信帐号便捷登录
                </div>
              </div>
              <div id="personBand-body2-4" class="inl">
                <el-button round type="warning" size="medium">绑定</el-button>
              </div>
            </div>
            <div id="personBand-body3" class="inl">
              <div id="personBand-body3-1" class="inl">
                <img src="../assets/wb.png" width="40px" height="40px">
              </div>
              <div class="inl">
                <div id="personBand-body3-2">
                  绑定微博
                </div>
                <div id="personBand-body3-3">
                  绑定微博帐号，使用微博帐号便捷登录
                </div>
              </div>
              <div id="personBand-body3-4" class="inl">
                <el-button round type="warning" size="medium">绑定</el-button>
              </div>
            </div>
          </div>
        </div>
        <div id="content5">
          <div id="personBand1-title">
            <i class="el-icon-connection"></i>
            个人信息
          </div>
          <div id="personBand1-body">
            <div id="personBand1-1">
              <div id="personBand1-body1" class="inl">
                <div id="personBand1-body1-1" class="inl">
                  <img src="../assets/qq1.png" width="40px" height="40px">
                </div>
                <div class="inl">
                  <div id="personBand1-body1-2">
                    填写QQ吧
                  </div>
                  <div id="personBand1-body1-3">
                    您可以填写QQ帐号来完善个人信息
                  </div>
                </div>
                <div id="personBand1-body1-4" class="inl">
                  <el-button round type="warning" size="medium">填写QQ</el-button>
                </div>
              </div>
              <div id="personBand1-body2" class="inl">
                <div id="personBand1-body2-1" class="inl">
                  <i class="el-icon-mic"></i>
                </div>
                <div class="inl">
                  <div id="personBand1-body2-2">
                    您还不是主播
                  </div>
                  <div id="personBand1-body2-3">
                    尚未申请实名认证，无法申请直播间
                  </div>
                </div>
                <div id="personBand1-body2-4" class="inl">
                  <el-button round type="warning" size="medium">立即申请</el-button>
                </div>
              </div>
            </div>
            <div id="personBand1-2">
              <div id="personBand1-body3" class="inl">
                <div id="personBand1-body3-1" class="inl">
                  <i class="el-icon-service"></i>
                </div>
                <div class="inl">
                  <div id="personBand1-body3-2">
                    成为客服人员
                  </div>
                  <div id="personBand1-body3-3">
                    团队招募通道
                  </div>
                </div>
                <div id="personBand1-body3-4" class="inl">
                  <el-button round type="warning" size="medium">申请加入</el-button>
                </div>
              </div>
              <div id="personBand1-body4" class="inl">
                <div id="personBand1-body4-1" class="inl">
                  <i class="el-icon-location-information"></i>
                </div>
                <div class="inl">
                  <div id="personBand1-body4-2">
                    收货地址
                  </div>
                  <div id="personBand1-body4-3">
                    活动实物邮寄
                  </div>
                </div>
                <div id="personBand1-body4-4" class="inl">
                  <el-button round type="warning" size="medium">填写地址</el-button>
                </div>
              </div>
            </div>
            <div id="personBand1-3">
              <div id="personBand1-body7" class="inl">
                <div id="personBand1-body7-1" class="inl">
                  <i class="el-icon-magic-stick"></i>
                </div>
                <div class="inl">
                  <div id="personBand1-body7-2">
                    个性化广告推荐
                  </div>
                  <div id="personBand1-body7-3">
                    关闭后仍可以看到广告
                  </div>
                </div>
                <div id="personBand1-body7-4" class="inl">
                  <el-switch width="60"
                             v-model="values2"
                             active-color="rgb(255,102,0)"
                             inactive-color="rgb(221,221,221)">
                  </el-switch>
                </div>
              </div>

              <div id="personBand1-body6" class="inl">
                <div id="personBand1-body6-1" class="inl">
                  <i class="el-icon-data-analysis"></i>
                </div>
                <div class="inl">
                  <div id="personBand1-body6-2">
                    个性化内容推荐
                  </div>
                  <div id="personBand1-body6-3">
                    关闭后无法收到内容推荐
                  </div>
                </div>
                <div id="personBand1-body6-4" class="inl">
                  <el-switch width="60"
                             v-model="values1"
                             active-color="rgb(255,102,0)"
                             inactive-color="rgb(221,221,221)">
                  </el-switch>
                </div>
              </div>
            </div>
            <div id="personBand1-4">
              <div id="personBand1-body5" class="inl">
                <div id="personBand1-body5-1" class="inl">
                  <i class="el-icon-switch-button"></i></div>
                <div class="inl">
                  <div id="personBand1-body5-2">
                    帐号注销
                  </div>
                  <div id="personBand1-body5-3">
                    注销帐号相关信息，请谨慎操作
                  </div>
                </div>
                <div id="personBand1-body5-4" class="inl">
                  <el-button round type="info" size="medium">注销</el-button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <Data></Data>
      </div>

    </div>
  </div>
</template>

<script>
import {httpGet, httpPost, requestUrl} from "@/js/https";
import ImageCropper from "@/components/ImageCropper";
import Data from "@/views/Data";

export default {
  name: "UserInfo",
  components: {ImageCropper, Data}, // 加载components 的组件
  data() {
    return {
      flag: 'info',
      value: 2.5,
      values1: true,
      values2: true,
      updateVisible: false,
      checkedItems: [],
      items: this.$store.state.all_items,
      username: '',
      log: '',
      imagecropperShow: false, // 是否显示上传组件
      imagecropperKey: 0,  // 上传组件id ，要变化
      imagepath: requestUrl + '/avatar/ossfile'
    }
  },
  mounted() {
    this.log = this.getLog()
  },
  methods: {
    goto(target) {

    },
    getLog() {
      let log = ""
      for (let i = 0; i < this.$store.state.user.items.length; i++) {
        console.log(this.$store.state.user.items[i].name)
        log += this.$store.state.user.items[i].name + "|"
      }
      return log
    },
    tip(message) {
      this.$message({
        message: message,
        type: "success"
      })
    },
    update() {
      if (this.username.length !== 0) {
        if (this.username.replaceAll(" ", '') === "" || this.username.length > 15 || this.username.length < 3) {
          this.tip("用户名格式错误")
          return
        }
      }
      let um = this.username
      if (um === '') {
        um = this.$store.state.user.username
      }
      let it = this.checkedItems
      if (it.length === 0) {
        it = this.$store.state.user.items
      }
      httpPost("/user/update", {
        username: um,
        items: it
      }).then(resp => {
        if (resp.state === 200) {
          this.updateVisible = false
          this.$store.dispatch("ch_user", resp.data)
          this.tip("修改成功")
        }
        console.log(resp)
      })
    },
    exit() {
      httpGet("/user/logout")
      this.$store.dispatch("clear_user", {})
      this.$router.push('/')
    },
    cropSuccess(data) {
      this.$store.dispatch("ch_avatar", data)
      httpPost("/avatar/updateAvatar", {
        url: data
      }).then(resp => {
        console.log(resp)
      })
      this.imagecropperShow = false
      //this.user.avatar = data.url
      // 上传成功后，重新打开上传组件时初始化组件，否则显示上一次的上传结果
      this.imagecropperKey = this.imagecropperKey + 1
    },
    // 关闭上传组件
    close() {
      this.imagecropperShow = false
      // 上传失败后，重新打开上传组件时初始化组件，否则显示上一次的上传结果
      this.imagecropperKey = this.imagecropperKey + 1
    }
  }
}
</script>

<style scoped>
#vipTitle-1 img {
  width: 100%;
  height: 100%;
}

#vipTitle-1 {
  vertical-align: top;
  padding-right: 0.5%;
  width: 45px;
  height: 37px;
  opacity: 0.7;

}

#vipBk img {
  width: 100%;
  height: 100%;
}

#vipBk {
  padding-left: 176px;
  text-align: center;
  width: 1280px;
  height: 280px;
}

#personBand1-body7-4 {
  position: relative;
  top: -10px;
  left: 30px;
}

#personBand1-body7-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand1-body7-1 {
  font-size: 40px;
}

#personBand1-body7 {
  padding-top: 2%;
}

#personBand1-body6-4 {
  position: relative;
  top: -10px;
  left: 33px;
}

#personBand1-body6-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand1-body6-1 {
  font-size: 40px;
}

#personBand1-body6 {
  padding-top: 2%;
  padding-left: 29.7%;
}

#personBand1-body5-4 {
  position: relative;
  top: -10px;
  left: 12px;
}

#personBand1-body5-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand1-body5-1 {
  position: relative;
  top: 5px;
  font-size: 40px;
}

#personBand1-body5 {
  padding-top: 2%;
}

#personBand1-body4-4 {
  position: relative;
  top: -10px;
  left: 100px;
}

#personBand1-body4-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand1-body4-1 {
  font-size: 40px;
}

#personBand1-body4 {
  padding-top: 2%;
  padding-left: 29.2%;
}

#personBand1-body3-4 {
  position: relative;
  top: -10px;
  left: 23px;
}

#personBand1-body3-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand1-body3-1 {
  position: relative;
  font-size: 40px;
}

#personBand1-body3 {
  padding-top: 2%;
}

#personBand1-body2-4 {
  position: relative;
  top: -10px;
  left: 12px;
}

#personBand1-body2-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand1-body2-1 {
  font-size: 40px;
}

#personBand1-body2 {
  padding-top: 2%;
  padding-left: 20%;
}

#personBand1-body1-4 {
  position: relative;
  top: -10px;
  left: 12px;
}

#personBand1-body1-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand1-body1-1 {
  position: relative;
  top: 5px;
  font-size: 40px;
}

#personBand1-body1 {
  padding-top: 2%;
}

#personBand1-body {
  padding-left: 3%;
}

#personBand1-title {
  width: 92%;
  font-size: 20px;
  font-weight: bolder;
  background-color: rgb(245, 245, 245);
  margin-left: 2%;
  padding: 1% 0 1% 2%;
  text-align: left;
}

#content5 {
  padding-top: 4%;
  text-align: left;
}

#personBand-body3-4 {
  position: relative;
  top: -10px;
  left: 23px;
}

#userInfo {
  position: relative;
}

#exit {
  padding-left: 10%;
}

#name {
  width: 200px;
  text-align: left;
}

#userItem {
  text-align: left;
  margin-top: 5px;
}

#personBand-body3-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand-body3-1 {
  position: relative;
  top: 5px;
  font-size: 40px;
}

#personBand-body3 {
  padding-top: 2%;
}

#personBand-body2-4 {
  position: relative;
  top: -10px;
  left: 12px;
}

#personBand-body2-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand-body2-1 {
  position: relative;
  top: 5px;
  font-size: 40px;
}

#personBand-body2 {
  padding-top: 2%;
  padding-left: 15%;
}

#personBand-body1-4 {
  position: relative;
  top: -10px;
  left: 12px;
}

#personBand-body1-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand-body1-1 {
  position: relative;
  top: 5px;
  font-size: 40px;
}

#personBand-body1 {
  padding-top: 2%;
}

#personBand-body {
  padding-left: 3%;
}

#personBand-title {
  width: 92%;
  font-size: 20px;
  font-weight: bolder;
  background-color: rgb(245, 245, 245);
  margin-left: 2%;
  padding: 1% 0 1% 2%;
  text-align: left;
}

#content4 {
  padding-top: 4%;
  text-align: left;
}

#personAccount-body6-4 {
  position: relative;
  top: -10px;
  left: 42px;
}

#personAccount-body6-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personAccount-body6-1 {
  font-size: 40px;
}

#personAccount-body6 {
  padding-top: 2%;
  padding-left: 24.5%;
}

#personAccount-body5-4 {
  position: relative;
  top: -10px;
  left: 43px;
}

#personAccount-body5-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personAccount-body5-1 {
  font-size: 40px;
}

#personAccount-body5 {
  padding-top: 2%;
}

#personAccount-body4-4 {
  position: relative;
  top: -10px;
  left: 12px;
}

#personAccount-body4-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personAccount-body4-1 {
  font-size: 40px;
}

#personAccount-body4 {
  padding-top: 2%;
  padding-left: 15%;
}

#personAccount-body3-4 {
  position: relative;
  top: -10px;
  left: 23px;
}

#personAccount-body3-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personAccount-body3-1 {
  font-size: 40px;
}

#personAccount-body3 {
  padding-top: 2%;
}

#personAccount-body2-4 {
  position: relative;
  top: -10px;
  left: 12px;
}

#personAccount-body2-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personAccount-body2-1 {
  font-size: 40px;
}

#personAccount-body2 {
  padding-top: 2%;
  padding-left: 15%;
}

#personAccount-body1-4 {
  position: relative;
  top: -10px;
  left: 12px;
}

#personAccount-body1-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personAccount-body1-1 {
  font-size: 40px;
}

#personAccount-body1 {
  padding-top: 2%;
}

#personAccount-body {
  padding-left: 3%;
}

#personAccount-tip {
  font-size: 14px;
  padding-left: 2%;
}

#personAccount-number {
  padding-left: 25%;
}

#personAccount-title {
  width: 92%;
  font-size: 20px;
  font-weight: bolder;
  background-color: rgb(245, 245, 245);
  margin-left: 2%;
  padding: 1% 0 1% 2%;
  text-align: left;
}

#content3 {
  padding-top: 4%;
  text-align: left;
}

#personData-img {
  padding-left: 5%;
  padding-top: 1%;
  width: 70%;
  text-align: center;
}

#personData-vip-1 {
  width: 92%;
  font-size: 20px;
  font-weight: bolder;
  background-color: rgb(245, 245, 245);
  margin-left: 2%;
  padding: 1% 0 1% 2%;
  text-align: left;
}

#personData-vip-2 {
  font-size: 16px;
  padding-top: 2%;
  padding-left: 8%
}

#personData-vip-3 {
  padding-left: 31%
}

#content2 {
  padding-top: 4%;
  text-align: left;
}

#personData-items-2 {
  padding-left: 12%;
}

#personData-items {
  padding-top: 2%;
}

#personData-level-2 {
  padding-left: 2%;
  width: 30%;
}

#personData-level {
  padding-top: 1%;
}

#personData-des {
  font-size: 12px;
  font-weight: bolder;
  padding-top: 3%;
}

#personData-name-1 {
  font-weight: bolder;
  margin-top: 2%;
}

#personData-name-2 {
  padding-top: 2%;
}

#personData-name-3 {
  padding-left: 2%;
}

#personData-body {
  text-align: left;
  vertical-align: top;
  width: 75%;
  margin-left: 2%;
}

#personData-avatar {
  vertical-align: top;
  padding: 2% 0% 0% 6%;
}

#personData-title {
  width: 92%;
  font-size: 20px;
  font-weight: bolder;
  background-color: rgb(245, 245, 245);
  margin-left: 2%;
  padding: 1% 0 1% 2%;
  text-align: left;
}

#divider {
  width: 80%;
  margin-left: 10%;
}


#content {
  vertical-align: top;
  width: 70%;
}

#nav {
  vertical-align: top;
  width: 15%;
}

#vipTitle {
  font-size: 30px;
  color: rgb(229, 200, 42);
  margin-bottom: -1%;
  text-align: center;
}

#title {
  font-size: 30px;
  color: rgb(85, 85, 85);
  margin-bottom: -1%;
  text-align: center;
}

</style>
