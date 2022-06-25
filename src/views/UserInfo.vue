<template>
  <div id="userInfo">
    <div>
      <img src="../assets/home.png">
    </div>
    <div id="title">
      {{ $store.state.user.username }} 的主页
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

            <el-menu-item index="1-2" @click="$router.push('/collection')">
              <i class="el-icon-star-on"></i>
              我的收藏
            </el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/message')">
              <i class="el-icon-chat-dot-round"></i>
              我的消息
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div id="content" class="inl">
      <div id="content1">
        <div id="personData-title">
          <i class="el-icon-user"></i>
          我的资料
        </div>
        <div id="personData-avatar" class="inl">
          <img :src="$store.state.avatar" width="120px" height="120px">
        </div>
        <div id="personData-body" class="inl">
          <div id="personData-names">
            <div id="personData-name-1" class="inl">
              {{ $store.state.user.username }}
            </div>
            <div id="personData-name-2" class="inl">
              <i class="el-icon-edit"></i>
            </div>
            <div id="personData-name-3" class="inl">
              <img src="../assets/qiandao.png">
            </div>
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
            贵族专属
          </div>
          <div id="personData-vip-2" class="inl">
            七大贵族 显赫身份 尊贵特权 奢华福利
          </div>
          <div id="personData-vip-3" class="inl">
            <el-button type="primary" round="">查看VIP特权</el-button>
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
                  手机号未绑定
                </div>
                <div id="personAccount-body1-3">
                  您可以享受手机相关的安全及提醒服务
                </div>
              </div>
              <div id="personAccount-body1-4" class="inl">
                <el-button round type="success" size="medium">绑定手机</el-button>
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
                <el-button round type="success" size="medium">绑定邮箱</el-button>
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
                <el-button round type="success" size="medium">绑定银行卡</el-button>
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
                <el-button round type="success" size="medium">绑定身份证</el-button>
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
                <el-button round type="success" size="medium">立即认证</el-button>
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
                手机号未绑定
              </div>
              <div id="personBand-body1-3">
                您可以享受手机相关的安全及提醒服务
              </div>
            </div>
            <div id="personBand-body1-4" class="inl">
              <el-button round type="success" size="medium">绑定手机</el-button>
            </div>
          </div>
          <div id="personBand-body2" class="inl">
            <div id="personBand-body2-1" class="inl">
              <i class="el-icon-message"></i>
            </div>
            <div class="inl">
              <div id="personBand-body2-2">
                邮箱未绑定
              </div>
              <div id="personBand-body2-3">
                您可以使用邮箱来保障您的帐号安全
              </div>
            </div>
            <div id="personBand-body2-4" class="inl">
              <el-button round type="success" size="medium">绑定邮箱</el-button>
            </div>
          </div>
          <div id="personBand-body3" class="inl">
            <div id="personBand-body3-1" class="inl">
              <i class="el-icon-bank-card"></i>
            </div>
            <div class="inl">
              <div id="personBand-body3-2">
                银行卡绑定
              </div>
              <div id="personBand-body3-3">
                完善银行卡信息，便于提取直播收益
              </div>
            </div>
            <div id="personBand-body3-4" class="inl">
              <el-button round type="success" size="medium">绑定银行卡</el-button>
            </div>
          </div>
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
  data() {
    return {
      value: 2.5
    }
  },
  methods: {
    goto(tg) {
      alert(tg)
    },
    exit() {
      httpGet("/user/logout")
      this.$store.dispatch("clear_user", {})
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#personBand-body3-4 {
  position: relative;
  top: -10px;
  left: 23px;
}

#personBand-body3-3 {
  color: rgb(115, 115, 115);
  font-size: 13px;
}

#personBand-body3-1 {
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
  left: 102px;
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
  left: 113px;
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
  padding-top: 2%;
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
  margin-top: 2%;
  padding-left: 5%;
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

#content {
  vertical-align: top;
  width: 70%;
}

#nav {
  vertical-align: top;
  width: 15%;
}

#title {
  font-size: 30px;
  color: rgb(85, 85, 85);
  margin-bottom: -1%;
  text-align: center;
}

</style>
