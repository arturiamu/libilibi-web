<template>
  <div id="lb-player">
    <div id="player-area" class="inl">
      <div id="introduce">
        <div id="title">
          <h2>
            {{ video.title.substring(0, 40) }}...
          </h2>
        </div>
        <div id="video-info">
          <el-link :underline="false" icon="el-icon-video-play">{{ video.view + " " }}播放</el-link>
          <el-link :underline="false" icon="el-icon-film">{{ video.danmaku + " " }}弹幕</el-link>
          <el-link :underline="false" icon="el-icon-help">{{ video.coin + " " }}投币</el-link>
          <el-link :underline="false" icon="el-icon-circle-check">{{ video.like + " " }}点赞</el-link>
          <el-link :underline="false" icon="el-icon-star-off">{{ video.favorite + " " }}收藏</el-link>
          <el-link :underline="false" icon="el-icon-position">{{ video.share + " " }}分享</el-link>
        </div>
      </div>
      <div id="frame">
        <iframe id="lb-frame" ref="iframeRef" v-bind:src="src + video.aid"
                allowfullscreen="allowfullscreen" width="100%" height="100%" allow="autoplay"
                scrolling="no" frameborder="no" framespacing="0" border="0"
                sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
        >您的浏览器不支持iframe，请升级或更换浏览器
        </iframe>
      </div>
      <div id="video-op">
        <div id="liked" class="inl op">
          <div v-if="video.islike === 'like'" class="inl" @click="op('unlike')">
            <img src="../assets/liked.png">
          </div>
          <div v-else class="inl" @click="op('like')">
            <img src="../assets/like.png">
          </div>
          <div class="inl cnt">
            <el-link :underline="false">{{ video.like }}</el-link>
          </div>
        </div>
        <div id="collection" class="inl op" @click="dialogVisible = true">
          <div class="inl">
            <img src="../assets/collection.png">
          </div>
          <div class="inl cnt">
            <el-link :underline="false">{{ video.favorite }}</el-link>
          </div>
        </div>
        <div id="share" class="inl op">
          <div class="inl">
            <el-popover
                placement="top"
                trigger="hover">
              <div>
                <el-link :underline="false">好东西要和朋友一起分享哦~</el-link>
              </div>
              <div id="popover-root">
                <div id="qq" class="share-sub inl" @click="share('qq')">
                  <div class="share-pic">
                    <img src="../assets/qq.png">
                  </div>
                  <div>
                    <el-link :underline="false" type="primary">QQ空间</el-link>
                  </div>
                </div>
                <div id="weibo" class="share-sub inl" @click="share('weibo')">
                  <div class="share-pic">
                    <img src="../assets/weibo.png">
                  </div>
                  <div>
                    <el-link :underline="false" type="primary">微博</el-link>
                  </div>
                </div>
                <div id="facebook" class="share-sub inl" @click="share('facebook')">
                  <div class="share-pic">
                    <img src="../assets/facebook.png">
                  </div>
                  <div>
                    <el-link :underline="false" type="primary">facebook</el-link>
                  </div>
                </div>
                <div id="twitter" class="share-sub inl" @click="share('twitter')">
                  <div class="share-pic">
                    <img src="../assets/twitter.png">
                  </div>
                  <div>
                    <el-link :underline="false" type="primary">twitter</el-link>
                  </div>
                </div>
                <div id="linkedin" class="share-sub inl" @click="share('linkedin')">
                  <div class="share-pic">
                    <img src="../assets/linkedin.png">
                  </div>
                  <div>
                    <el-link :underline="false" type="primary">linkedin</el-link>
                  </div>
                </div>
                <div id="pinterest" class="share-sub inl" @click="share('pinterest')">
                  <div class="share-pic">
                    <img src="../assets/pinterest.png">
                  </div>
                  <div>
                    <el-link :underline="false" type="primary">pinterest</el-link>
                  </div>
                </div>
              </div>
              <img src="../assets/share.png" slot="reference">
            </el-popover>
          </div>
          <div class="inl cnt">
            <el-link :underline="false">{{ video.share }}</el-link>
          </div>
        </div>
        <el-divider></el-divider>
      </div>
      <div id="describe">
        <div v-for="i in desc">
          <el-link :underline="false">{{ i }}</el-link>
        </div>
      </div>
    </div>
    <div id="recommend-area" class="inl">
      <div id="re-tittle">
        <h2>推荐列表：</h2>
      </div>
      <div id="re">
        <div @click="play(re_video)" class="re-video" v-for="re_video in videos">
          <div class="re-it">
            <div class="re-pic inl">
              <img :src="re_video.pic">
            </div>
            <div class="inl a-re">
              <div class="re-desc">
                <el-link class="info" type="primary" :underline="false">
                  {{ re_video.title.substring(0, 15) }}...
                </el-link>
              </div>
              <div class="re-desc">
                <div>
                  <el-link icon="el-icon-video-play" class="info" type="primary" :underline="false">
                    {{ re_video.view }}
                  </el-link>
                </div>
                <div>
                  <el-link icon="el-icon-c-scale-to-original" class="info" type="primary" :underline="false">
                    {{ re_video.danmaku }}
                  </el-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
        :visible.sync="dialogVisible"
        width="30%">
      <div id="chose">
        <el-radio-group v-model="checkedItems">
          <el-radio :border="true" size="mini" v-for="it in items" :label="it.categoryName"
                       :key="it.categoryName"
                       style="margin: 6px">
            {{ it.categoryName }}
          </el-radio>
        </el-radio-group>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="sub">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import {httpGet, httpPost, play_video} from "@/js/https";

export default {
  name: "Player",
  data: function () {
    return {
      dialogVisible: false,
      video: '',
      src: "https://player.bilibili.com/player.html?high_quality=1&autoplay=1&aid=",
      desc: this.$route.query.video.desc.split('\n'),
      videos: '',
      items: [],
      checkedItems: []
    }
  },
  activated() {
    this.items = this.$store.state.user.favorites
    this.video = this.$route.query.video
    httpGet('/interest/13').then(data => {
      if (data.state === 200) {
        this.videos = data.data
      }
      this.$forceUpdate()
    })
    httpPost('/like/isLike', {
      aid: this.video.aid,
      pid: this.video.pid
    }).then(resp => {
      this.video.islike = resp.data.message
      this.$forceUpdate()
    })
  },
  methods: {
    success(message){
      this.$message({
        message: message,
        type: 'success'
      });
    },
    sub() {
      if(this.checkedItems){
        httpPost('/collection/add',{
          "aid": this.video.aid,
          "categoryName": this.checkedItems,
          "pid": this.video.pid,
        }).then(resp=>{
          if(resp.state === 200){
            this.success("添加成功")
          }else {
            this.success(resp.message)
          }
          this.dialogVisible=false
        })
      }
    },
    op(type) {
      if (this.$store.state.user.id) {
        if (type === 'like') {
          this.video.islike = 'like'
          this.video.like++
          httpPost('/like/add', {
            aid: this.video.aid,
            pid: this.video.pid
          })
        } else if (type === 'unlike') {
          this.video.islike = 'unlike'
          this.video.like--
          httpPost('/like/cancel', {
            aid: this.video.aid,
            pid: this.video.pid
          })
        }
        this.$forceUpdate()
      } else {
        this.$message.error({
          message: "请先登录",
        });
      }
    },
    share(type) {
      let url = 'http://adastra.isamumu.cn'
      let title = "aid:" + this.video.aid + '  ' + this.video.title
      let pic = this.video.pic
      let summary = '我发现了一个宝藏网站，快来加入吧~'
      let share = ''
      if (type === 'qq') {
        share = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?sharesource=qzone&url=' + url + '&title='
            + title + '&pics=' + pic + '&summary=' + summary
      } else if (type === 'facebook') {
        share = 'https://www.facebook.com/sharer/sharer.php?u=' + url
      } else if (type === 'twitter') {
        share = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title
      } else if (type === 'linkedin') {
        share = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url
      } else if (type === 'pinterest') {
        share = 'https://pinterest.com/pin/create/button/?url' + url + '&media=' + pic + '&description=' + title
      } else if (type === 'weibo') {
        share = 'http://service.weibo.com/share/share.php?title=' + title + '&url=' + url + '&pic=' + pic
      }
      window.open(share, "adastra 视频分享", 'height=720, width=900, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
    },
    play(video) {
      play_video(this, video)
    }
  }
}
</script>
<style scoped>
#popover-root {
  margin-top: 15px;
  width: 400px;
  display: flex;
  justify-content: space-between;
}

.share-pic {
  margin: 0 auto;
  width: 40px;
  height: 40px;
}

.share-pic img {
  border-radius: 20px;
}

.share-sub {

}

.a-re {
  position: absolute;
  left: 150px;
}

.re-it {
  position: relative;
}

.re-desc {
  max-width: 230px;
}

.re-video {
  padding-bottom: 10px;
}

#video-op {
  text-align: left;
}

.op {
  padding: 5px 15px 0 15px;
}

.cnt {
  padding: 0 5px 0 5px;
  position: relative;
  top: -5px
}

#re {
  text-align: left;
  margin-left: 20px;
  width: 400px;
  height: 750px;
  overflow: scroll;
}

.re-pic {
  width: 140px;
  height: 80px;
}

#video-info a {
  font-weight: lighter;
  padding-left: 20px;
  font-size: 10px;
}

#re-tittle {
  height: 68px;
  margin-left: 20px;
}

#lb-player {
  margin-top: 15px;
}

#describe {
  text-align: left;
}

img {
  width: 100%;
  height: 100%;
}

#frame {
  width: 1055px;
  height: 680px;
}

#player-area {
  width: 1050px;
  vertical-align: top;
}

#recommend-area {
  vertical-align: top;
}

h2 {
  text-align: left;
  font-weight: lighter;
}

#video-info {
  text-align: left;
  margin: 10px 0;
}

img {
  border-radius: 3%;
}
</style>
