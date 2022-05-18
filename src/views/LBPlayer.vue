<template>
  <div id="lb-player">
    <div id="player-area" class="inl">
      <div id="introduce">
        <div id="title">
          <h2>
            {{ video.title }}
          </h2>
        </div>
        <div id="video-info">
          <el-link :underline="false" icon="el-icon-video-play">{{ video.stat.view + " " }}播放</el-link>
          <el-link :underline="false" icon="el-icon-film">{{ video.stat.danmaku + " " }}弹幕</el-link>
          <el-link :underline="false" icon="el-icon-star-off">{{ video.stat.favorite + " " }}收藏</el-link>
          <el-link :underline="false" icon="el-icon-circle-check">{{ video.stat.like + " " }}点赞</el-link>
          <el-link :underline="false" icon="el-icon-help">{{ video.stat.coin + " " }}投币</el-link>
          <el-link :underline="false" icon="el-icon-position">{{ video.stat.share + " " }}分享</el-link>
        </div>
      </div>
      <div id="frame">
        <iframe v-bind:src="src + video.stat.aid"
                allowfullscreen="allowfullscreen" width="100%" height="100%" allow="autoplay"
                scrolling="no" frameborder="no" framespacing="0" border="0"
                sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
        ></iframe>
      </div>
      <div id="describe">
        <div v-for="i in desc">
          <el-link :underline="false">{{ i }}</el-link>
        </div>
      </div>
    </div>
    <div id="recommend-area" class="inl">
      <div id="re">
        <div id="re-tittle">
          <h2>推荐列表：</h2>
        </div>
        <div @click="play(re_video)" class="re-video" v-for="re_video in videos">
          <div class="re-it">
            <div class="re-pic inl">
              <img :src="re_video.pic">
            </div>
            <div class="inl a-re">
              <div class="re-desc">
                <el-link class="info" type="primary" :underline="false">
                  {{ re_video.title.substring(0, 35) }}
                </el-link>
              </div>
              <div class="re-desc">
                <el-link class="info" type="primary" :underline="false">
                  bofan danmu
                </el-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {main_video, player} from "@/js/common";

export default {
  name: "LBPlayer",
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
    play(video) {
      player(this, video)
    }
  }
}
</script>
<style scoped>
.a-re {
  padding-left: 5px;
  position: relative;
  top: -25px
}

.re-desc {
  max-width: 230px;
}

#re {
  text-align: left;
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
}

#recommend-area {
  vertical-align: top;
  margin-left: 20px;
  width: 400px;
  height: 750px;
  overflow: scroll;
}

h2 {
  text-align: left;
  font-weight: lighter;
  margin-left: 10px;
}

#video-info {
  text-align: left;
  margin: 10px 0;
}
</style>
