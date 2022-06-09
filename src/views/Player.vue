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
        <div id="like" class="inl op" @click="op('like')">
          <div class="inl">
            <img src="../assets/like.png">
          </div>
          <div class="inl cnt">
            <el-link :underline="false" type="primary">{{ video.like }}</el-link>
          </div>
        </div>
        <div id="collection" class="inl op" @click="op('collection')">
          <div class="inl">
            <img src="../assets/collection.png">
          </div>
          <div class="inl cnt">
            <el-link :underline="false" type="primary">{{ video.favorite }}</el-link>
          </div>
        </div>

        <div id="share" class="inl op">
          <div class="inl">
            <el-popover
                placement="top"
                trigger="hover">
              <div id="popover-root">
                <div id="qq" class="share-sub inl" @click="share('qq')">
                  <div class="share-pic">
                    <img src="../assets/qq.png">
                  </div>
                  <div>
                    <el-link :underline="false" type="primary">空间</el-link>
                  </div>
                </div>
                <div id="wechat" class="share-sub inl" @click="share('wechat')">
                  <div class="share-pic">
                    <img src="../assets/wechat.png">
                  </div>
                  <div>
                    <el-link :underline="false" type="primary">朋友圈</el-link>
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
              </div>
              <img src="../assets/share.png" slot="reference">
            </el-popover>
          </div>
          <div class="inl cnt">
            <el-link :underline="false" type="primary">{{ video.share }}</el-link>
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
  </div>
</template>

<script>
import {main_video, play_video} from "@/js/common";

export default {
  name: "Player",
  data: function () {
    return {
      video: this.$route.query.video,
      src: "https://player.bilibili.com/player.html?high_quality=1&autoplay=1&aid=",
      desc: this.$route.query.video.desc.split('\n'),
      videos: ''
    }
  },
  mounted() {
    main_video(this)
  },
  methods: {
    op(type) {

    },
    share(type) {

    },
    play(video) {
      play_video(this, video)
    }
  }
}
</script>
<style scoped>
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

#popover-root {
  justify-content: space-between;
}

.share-pic {
  width: 40px;
  height: 40px;
}

.share-sub {
  margin: 15px;
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
