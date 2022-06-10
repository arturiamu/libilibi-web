<template>
  <div id="userInfo">
<!--    <Item2></Item2>-->
    <div id="user_info" style="background: #f4f5f7">
      <div class="top" :style="background">
        <!--    背景图片、头像、用户名、个性签名-->
        <div class="avatar_img">
          <img :src="userinfo.avatarUrl" alt="图片未正常显示" id="userImage"/>
        </div>
        <div class="setting_right" @click.stop="uploadHeadImg">
          <div class="caption">
            <div id="word">更改头像</div>
          </div>
        </div>
        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
        <div id="introduction">
          <div id="h-name">{{ userinfo.username }}</div>
          <i class="el-icon-male"></i>
          <div id="signature">
            <input id="h-sign" type="text" v-model="userinfo.signature" maxlength="60" class="space_input">
          </div>
        </div>

      </div>
      <nav id="nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <a href="#e1" style="text-decoration: none">我的信息</a>
          </el-menu-item>
          <el-menu-item index="2">
            <a href="#e2" style="text-decoration: none">最近点赞视频</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="#e3" style="text-decoration: none">历史浏览</a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#e4" style="text-decoration: none">我的收藏夹</a>
          </el-menu-item>
        </el-menu>
      </nav>
      <div style="background: #ffffff;width: 1283px;margin: 10px auto;">
        <div id="my_information">
          <div id="section-title-form">
            <el-card class="box-card" style="text-align: left;padding-left: 0">
              <div slot="header" class="clearfix">
                <span class="section-title" style="padding-left: 0" id="e1">个人资料</span>
                <el-button style="float: right; padding: 3px 0" type="text">修改资料</el-button>
              </div>
              <div v-model="userinfo" :key="o" class="text item">
                <ul >
                  <li class="userInfoDetail">{{'UID ' + userinfo.UID }}</li>
                  <li class="userInfoDetail">{{'生日 ' + userinfo.birthday }}</li>
                  <li class="userInfoDetail">{{'注册时间 ' + userinfo.reg_date }}</li>
                  <li class="userInfoDetail">{{'兴趣标签 ' + userinfo.hobbies }}</li>
                </ul>
              </div>
            </el-card>
          </div>
        </div>
        <div id="recently_liked_videos">
          <div class="section-title" id="e2">最近点赞视频</div>
          <a href="" class="more">更多></a>
          <div id="item" class="video-type">
            <div id="it-h">
            </div>
            <div v-for="video in videos" class="inl video-it-it">
              <img :src="video.pic" @click="play(video)">
              <div class="v-count">
                <el-link class="info" :underline="false" icon="el-icon-video-pause">
                  {{ video.view }}
                </el-link>
                <el-link class="info" :underline="false" icon="el-icon-circle-check">
                  {{ video.like }}
                </el-link>
              </div>
              <div class="desc">
                <el-link :underline="false">{{ video.title }}</el-link>
              </div>
            </div>
          </div>
          <div id="browsing_history">
            <div class="section-title" id="e3">历史浏览</div>
            <div id="item2" class="video-type">
              <div id="it-h2">
              </div>
              <div v-for="video in videos" class="inl video-it-it">
                <img :src="video.pic" @click="play(video)">
                <div class="v-count">
                  <el-link class="info" :underline="false" icon="el-icon-video-pause">
                    {{ video.view }}
                  </el-link>
                  <el-link class="info" :underline="false" icon="el-icon-circle-check">
                    {{ video.like }}
                  </el-link>
                </div>
                <div class="desc">
                  <el-link :underline="false">{{ video.title }}</el-link>
                </div>
              </div>
            </div>
        <div id="bookmarks">
          <div class="section-title" id="e4">我的收藏夹</div>
          <el-row :gutter="25" style="margin-left: 5px">
            <el-col :span="5">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="bookmarks.bookmark1.imgUrl" class="image">
                <div style="padding: 14px;">
              <span>
                {{ bookmarks.bookmark1.word }}
              </span>
                  <el-button type="text" class="button">{{ bookmarks.bookmark1.limits }}</el-button>
                </div>
              </el-card>
            </el-col>
            <el-col :span="5">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="bookmarks.bookmark2.imgUrl" class="image">
                <div style="padding: 14px;">
              <span>
                {{ bookmarks.bookmark2.word }}
              </span>
                  <el-button type="text" class="button">{{ bookmarks.bookmark2.limits }}</el-button>
                </div>
              </el-card>
            </el-col>
            <el-col :span="5">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="bookmarks.bookmark3.imgUrl" class="image">
                <div style="padding: 14px;">
              <span>
                {{ bookmarks.bookmark3.word }}
              </span>
                  <el-button type="text" class="button">{{ bookmarks.bookmark3.limits }}</el-button>
                </div>
              </el-card>
            </el-col>
            <el-col :span="5">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="bookmarks.bookmark4.imgUrl" class="image">
                <div style="padding: 14px;">
              <span>
                {{ bookmarks.bookmark4.word }}
              </span>
                  <el-button type="text" class="button">{{ bookmarks.bookmark4.limits }}</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import {logout} from "@/js/common";
import {item_video, play_video} from '@/js/common'
export default {
  name: "UserInfo",
  data() {
    return {
      // 顶部导航背景图片配置
      background: {
        // 背景图片地址
        backgroundImage: 'url(userInfoTop.png)',
        // 背景图片是否重复
        backgroundRepeat: 'no-repeat',
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        backgroundColor: '#000',
        // 背景图片位置
        backgroundPosition: 'center top'
      },
      userinfo: {
        avatarUrl: "avatar.jpg",
        username: "露娜",
        signature: "生而为人，我很抱歉",
        UID: "470286197",
        birthday: "2001-01-07",
        reg_date: "2022-06-09",
        hobbies: "国风|鬼畜|美女"
      },
      bookmarks: {
        bookmark1: {
          word: "默认收藏夹",
          imgUrl: "bookmark1_img1.png",
          limits: "私密"
        },
        bookmark2: {
          word: "搞笑视频",
          imgUrl: "bookmark1_img4.png",
          limits: "公开"
        },
        bookmark3: {
          word: "学习方法",
          imgUrl: "bookmark1_img2.png",
          limits: "公开"
        },
        bookmark4: {
          word: "编程视频",
          imgUrl: "bookmark1_img3.png",
          limits: "公开"
        },
      },
      videos: [
        {
          aid: 850296388,
          coin: 14155,
          danmaku: 1191,
          desc: "原版编舞：嘉禾舞社BV1zA411V79b\n呜呜跳到一半突然出现校领导紧张得放炮了\n记录云南师大附中高二文二元旦晚会",
          favorite: 52029,
          like: 345585,
          pic: "http://i1.hdslb.com/bfs/archive/f5f229151c595bbd76c8f1b1b26609651b985cb0.jpg",
          pid: 129,
          reply: 2799,
          share: 6110,
          tid: 154,
          title: "元旦晚会跳超甜双人舞中途校领导们突然出现是什么体验…【少女时代—GEE翻跳】",
          tname: "舞蹈综合",
          view: 3600529
        },
        {
          aid: 850296388,
          coin: 14155,
          danmaku: 1191,
          desc: "原版编舞：嘉禾舞社BV1zA411V79b\n呜呜跳到一半突然出现校领导紧张得放炮了\n记录云南师大附中高二文二元旦晚会",
          favorite: 52029,
          like: 345585,
          pic: "http://i1.hdslb.com/bfs/archive/f5f229151c595bbd76c8f1b1b26609651b985cb0.jpg",
          pid: 129,
          reply: 2799,
          share: 6110,
          tid: 154,
          title: "元旦晚会跳超甜双人舞中途校领导们突然出现是什么体验…【少女时代—GEE翻跳】",
          tname: "舞蹈综合",
          view: 3600529
        },
        {
          aid: 256029491,
          coin: 42,
          danmaku: 22,
          desc: "是周二才决定要学的呜呜呜动作不是很标准也不熟，当时超级紧张啊啊啊啊啊有一些忘动作对不起女娃！！！下次好好拍一个！！！",
          favorite: 232,
          like: 2761,
          pic: "http://i2.hdslb.com/bfs/archive/f08b8d004bed5f47c0553bd25d66f6441ea54da4.jpg",
          pid: 129,
          reply: 65,
          share: 40,
          tid: 198,
          title: "在班里浅跳个tomboy（社死现场）",
          tname: "街舞",
          view: 42544
        },{
          aid: 256029491,
          coin: 42,
          danmaku: 22,
          desc: "是周二才决定要学的呜呜呜动作不是很标准也不熟，当时超级紧张啊啊啊啊啊有一些忘动作对不起女娃！！！下次好好拍一个！！！",
          favorite: 232,
          like: 2761,
          pic: "http://i2.hdslb.com/bfs/archive/f08b8d004bed5f47c0553bd25d66f6441ea54da4.jpg",
          pid: 129,
          reply: 65,
          share: 40,
          tid: 198,
          title: "在班里浅跳个tomboy（社死现场）",
          tname: "街舞",
          view: 42544
        }
      ],
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    // 打开图⽚上传
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显⽰
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    exit() {
      logout(this)
    },
    play(video) {
      play_video(this, video)
    },
  }
}
</script>

<style scoped>
#userImage {
  position: relative;
  top: 122px;
  left: 10px;
}

#user_info {
  margin: 0 auto;
}

.top {
  width: 1283px;
  height: 192px;
  margin: 0 auto;
}

.avatar_img {
  height: 60px;
  position: absolute;
}

.avatar_img img {
  width: 60px;
  height: 60px;
  border-radius: 50px;
}

.setting_right {
  height: 60px;
  position: absolute;
}

.hiddenInput {
  display: none;
}

.caption {
  color: #8F8F8F;
  font-size: 13px;
  width: 60px;
  height: 60px;
  opacity: 0;
  position: relative;
  top: 122px;
  left: 10px;
  border-radius: 50px;
}

.caption:hover {
  transition: opacity .2s;
  opacity: 1;
  background: rgba(0, 0, 0, 0.6);
}

#word {
  position: relative;
  top: 22px;
  color: #ffffff;
}

#h-sign:focus {
  background: #fff;
  box-shadow: inset 0 2px 4px rgba(35, 54, 86, .3);
  color: #6d757a;
}

#h-sign {
  background: transparent;
  border-radius: 4px;
  border: none;
  box-shadow: none;
  color: hsla(0, 0%, 100%, .8);
  font-size: 13px;
  font-family: Microsoft Yahei, serif;
  line-height: 26px;
  height: 26px;
  margin-left: -5px;
  padding: 0 5px;
  position: relative;
  top: 129px;
  width: 730px;
  right: 190px;
}

#h-name {
  display: inline-block;
  margin-right: 5px;
  font-weight: 700;
  line-height: 18px;
  font-size: 18px;
  vertical-align: middle;
  color: #ffffff;
  position: relative;
  right: 529px;
  top: 122px
}

.el-icon-male:before {
  content: "\e73b";
  position: relative;
  top: 124px;
  right: 520px;
}

.section-title {
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 33px;
  position: relative;
  text-align: left;
  padding: 0 0 15px 21px;
  margin: 60px 0 0 0;
}

.el-menu.el-menu--horizontal[data-v-10c844d3] {
  border-bottom: solid 1px #e6e6e6;
  position: relative;
  right: -176px;
  width: 1281px;
}

div {
  display: block;
}

body, input, textarea {
  font-family: Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

body {
  color: #222;
  font-size: 12px;
  line-height: 1.7em;
  margin: 0;
  overflow-y: scroll;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  position: relative;
  top: 5px;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
#top-r-t[data-v-fae5bece] {
  /*position: relative;*/
  top: 4px;
  margin-left: -102px;
}
.top-item.inl {
  display: inline-block;
  width: 313px;
  margin-right: -25px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card[data-v-10c844d3] {
  width: 480px;
  position: relative;
  left: 20px;
}

.userInfoDetail{
  list-style:none;
  font-size: 15px;
  line-height: 25px;
}
div#e2 {
  margin: 14px 0 0 0;
}
#item[data-v-10c844d3] {
  left: 17px;
  margin-top: -19px;
  position: relative;
  display: flex;
}
#item2[data-v-10c844d3] {
  left: 17px;
  margin-top: 0;
  position: relative;
  display: flex;
}

h1 {
  font-size: 24px;
  font-weight: lighter;
}

h1 button {
  position: relative;
  top: -4px
}

img {
  width: 100%;
  height: 100%;
  border-radius: 3%;
}
.video-it-it {
  width: 264px;
  height: 156px;
  padding-left: 7px;
  position: relative;
  margin: 0 16px 0 0;
}
[class*="el-col-"] {
  float: left;
  box-sizing: border-box;
  margin: 0 28px 0 0;
}
.more[data-v-10c844d3] {
  background-position: -310px -405px;
  border: 1px solid #b8c0cc;
  border-radius: 4px;
  color: #6d757a;
  font-size: 16px;
  line-height: 0px;
  transition: border .2s ease;
  padding: 0 19px 0 10px;
  position: relative;
  right: -472px;
  top: -47px;
}
.section .more {
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/assets/icons.png);
  position: absolute;
}
a, a :active, a :hover, a :link, a :visited {
  text-decoration: none;
  vertical-align: baseline;
  word-break: break-word;
}
.more {
  background-position: -310px -405px;
}
.more:hover{
  border-color: #00a1d6;
  color:#00a1d6 ;
}
</style>
