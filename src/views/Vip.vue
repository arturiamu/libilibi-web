<template>
  <div id="userVip">
    <div id="user" class="inl">
      <el-card style="background-color:rgb(251, 242, 239)" shadow="hover">
        <div id="user-1">
          <el-avatar :src="$store.state.avatar" shape="circle" style="height:80px;width: 80px">
          </el-avatar>
        </div>
        <div id="user-2">
          {{ $store.state.user.username }}
        </div>
        <div id="user-3">
          升级会员福利多多
        </div>
        <div id="user-4">
          <el-button size="medium" @click="goPay" style="width:55%;" round type="warning">开通</el-button>
        </div>
      </el-card>
    </div>
    <div id="content" class="inl">
      <el-card shadow="never">
        <div id="img">
          <img src="https://vfiles.gtimg.cn/vupload/20211108/87618d1636356781710.png"
               shape="square" width="1280px" height="200spx">
        </div>
        <div id="content-button">
          <el-button @click="goPay" size="medium" style="width:16%;" round type="warning">开通会员</el-button>
        </div>
      </el-card>
      <div id="content-news">
        <div id="content-news-1" class="inl">
          我的消息
          <div id="content-news-2" class="inl">
            <el-link :underline="false">有新的会员消息</el-link>
          </div>
        </div>
        <div id="content-news-3" class="inl">
          我的资产
          <div id="content-news-4" class="inl">
            <el-link :underline="false">点我查看</el-link>
          </div>
        </div>
      </div>
      <div id="content-openVip">
        <el-card shadow="never">
          <div id="content-openVip-title1">
            开通会员方式
          </div>
          <div id="content-openVip-title2">
            <el-link :underline="false">您还不是会员，开通会员即刻享受超值特权哦~</el-link>

          </div>
          <div id="content-img" class="inl">
            <img src="../assets/home1.png">
          </div>
          <div id="content-openVip-windows" class="inl">
            <div id="content-openVip-1" class="inl pay" v-for="(vip,index) in vips" @click="getVip(index)">
              <el-card shadow="hover" style=" min-height: 174px;">
                <div id="content-openVip-1-1">
                  {{ vip.title }}
                </div>
                <div id="content-openVip-1-2">
                  ￥<span class="price">{{ vip.money }}</span>
                </div>
                <div id="content-openVip-1-3">
                  {{ vip.desc }}
                </div>
              </el-card>
            </div>
          </div>
        </el-card>
      </div>
      <div id="content-foot">
        <div id="content-foot-title">
          其它会员开通方式
        </div>
        <div id="content-foot-windows" class="inl otherpay" v-for="ovip in otherVip">
          <el-card shadow="never" style=" min-height:152px;min-width: 240px">
            <div id="content-foot-1" class="inl">
              <img :src="ovip.imges">
            </div>
            <div id="content-foot-2" class="inl">
              <div id="content-foot-2-1">
                {{ ovip.top }}
              </div>
              <div id="content-foot-2-2">
                {{ ovip.des }}
              </div>
            </div>
            <div id="content-foot-3">
              <el-button style="width: 100%;background-color: rgb(242, 215, 162);">{{ ovip.button }}</el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div id="pay" v-html="apply">
    </div>
  </div>
</template>

<script>
import {httpGet} from "@/js/https";

export default {
  name: "UserInfo",
  data() {
    return {
      vips: [
        {time: 'mouthsVip', money: 25, title: '连续包月', desc: '会员到期当天以25元/月自动续费，可随时关闭'},
        {time: 'quartersVip', money: 68, title: '连续包季', desc: '会员到期当天以68元/季自动续费，可随时关闭'},
        {time: 'yearsVip', money: 238, title: '连续包年', desc: '会员到期当天以238元/年自动续费，可随时关闭'},
        {time: 'mouthVip', money: 30, title: '1个月会员', desc: '会员开通享受30元/月，不可随时关闭'},
        {time: 'quarterVip', money: 78, title: '6个月会员', desc: '会员开通享受26元/月，不可随时关闭'},
        {time: 'yearVip', money: 258, title: '12个月会员', desc: '会员开通享受21.5元/月，不可随时关闭'},
      ],
      otherVip: [
        {
          imges: 'https://libilibi-host.oss-cn-hangzhou.aliyuncs.com/edu/2022/06/svip1.webp',
          top: '邀请好友有礼',
          des: '好友开通您得现金',
          button: '立即邀请'
        },
        {
          imges: 'https://libilibi-host.oss-cn-hangzhou.aliyuncs.com/edu/2022/06/svip2.webp',
          top: '亲密付',
          des: '帮亲友开通VIP',
          button: '立即开通'
        },
        {
          imges: 'https://libilibi-host.oss-cn-hangzhou.aliyuncs.com/edu/2022/06/svip3.webp',
          top: '赠送好友VIP',
          des: '专属定制传心意',
          button: '立即开通'
        },
        {
          imges: 'https://libilibi-host.oss-cn-hangzhou.aliyuncs.com/edu/2022/06/svip4.avif',
          top: '青春V卡',
          des: '学生专享16/月',
          button: '立即开通'
        },
        {
          imges: 'https://libilibi-host.oss-cn-hangzhou.aliyuncs.com/edu/2022/06/svip5.avif',
          top: '赠送超级影视VIP',
          des: '大屏观影更惬意',
          button: '立即赠送'
        },

      ],
      content: '',
      apply: ''
    }
  },
  methods: {
    goPay: function () {
      let anchor = document.getElementById('content-openVip');
      anchor.scrollIntoView();
    },
    getVip(index) {
      let subject = this.vips[index].time;
      console.log("----------------")
      let money = this.vips[index].money;
      httpGet("/pay/topay?subject=" + subject + "&money=" + money + "").then(resp => {
        console.log(resp)
        // window.open(resp, "adastra 视频分享", 'height=720, width=900, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
        // this.apply = resp
        // document.forms[0].submit()

        let divbody = document.createElement('div')
        divbody.innerHTML = resp   //接口返回的data是一个页面，这里将其添加进新的div
        document.body.appendChild(divbody)
        document.forms[0].submit()   //提交表单
      })
    },
    helpVip(index) {

    }
  }
}
</script>

<style scoped>
#content-foot-3 {
  padding-top: 2%;
}

#content-foot-2-2 {
  color: rgb(151, 151, 151);
  font-size: 5px;
}

#content-foot-2-1 {
  color: rgb(0, 0, 40);
  font-size: 18px;
}

#content-foot-2 {
  vertical-align: top;
  margin-top: 2%;
  padding-left: 2%;
}

#content-foot-1 {
  vertical-align: top;
  width: 30%;
}

#content-foot-title {
  margin-left: 3%;
  margin-top: 3%;
  font-size: 19px;
  text-align: left;
  color: rgb(34, 34, 34);
}

.pay {
  cursor: pointer;
  cursor: hand;
}

#content-img {
  width: 20%;
}

#content-openVip-1-3 {
  color: rgb(151, 151, 151);
}

#content-openVip-1-2 {
  font-weight: bolder;
  color: #dfb349;
}

#content-openVip-1-1 {
  font-size: 18px;
  font-weight: bolder;
}

#content-foot-windows {
  vertical-align: top;
  padding-top: 2%;
}

.price {
  font-size: 36px;
  color: #dfb349;
}

#content-openVip-1 {
  width: 15%;
}

#content-openVip-title2 {
  font-size: 15px;
  color: #ee5b7a;
  position: relative;
  left: 455px;
  top: -10px;
}

#content-openVip-title1 {
  margin-left: 3%;
  margin-top: 1%;
  font-size: 19px;
  text-align: left;
  color: rgb(34, 34, 34);
}

#content-openVip {
  padding-top: 2%;
}

#content-news-4 {
  color: rgb(151, 151, 151);
  position: relative;
  left: 415px;
  top: -2px;
}

#content-news-3 {
  background-color: rgb(251, 251, 251);
  padding: 2% 0 2% 1%;
  width: 45%;
  margin-left: 2%;
}

#content-news-2 {
  color: rgb(151, 151, 151);
  position: relative;
  left: 375px;
  top: -2px;
}

#content-news-1 {
  background-color: rgb(251, 251, 251);
  padding: 2% 0 2% 1%;
  width: 45%;
}

#content-news {
  padding-top: 2%;
  text-align: left;
}

#content-button {
  padding-top: 1.5%;
}

#user-4 {
  margin-top: 5%;
}

#user-3 {
  font-size: 12px;
  margin-top: 2%;
}

#user-2 {
  font-size: 18px;
  font-weight: bolder;
  margin-top: 5%;
}

#user-1 {
  margin-top: 5%;
}

#user {
  min-width: 19%;
  vertical-align: top;
  background-color: rgb(251, 242, 239);
}

#content {
  width: 80%;
  vertical-align: top;
  padding-left: 1%;
}

#userVip {
  text-align: center;
  padding-top: 2%;
}

img {
  width: 100%;
  height: 100%;
}
</style>
