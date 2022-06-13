<template>
  <div id="item" class="video-type">
    <div id="it-h">
      <h1>{{ item_info.name }}
        <el-button icon="el-icon-refresh" size="small" round @click="update">换一批</el-button>
      </h1>
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
</template>
<script>
import {httpGet, play_video} from '@/js/https'

export default {
  name: "Item",
  props: ['item_info'],
  methods: {
    play(video) {
      play_video(this, video)
    },
    update: function () {
      httpGet('/video/pid/' + this.item_info.pid + '/' + 12).then(data => {
        if (data.state === 200) {
          this.videos = data.data
        }
      })
    }
  },
  data: function () {
    return {
      videos: [{
        aid: "",
        coin: "",
        danmaku: "",
        desc: "",
        favorite: "",
        like: "",
        pic: "",
        pid: "",
        reply: "",
        share: "",
        tid: "",
        title: "",
        tname: "",
        view: "",
      }],
    }
  },
  created() {
    this.update()
  }
}
</script>

<style scoped>
#item {
  margin-top: 50px;
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
  border-radius: 3%
}
</style>
