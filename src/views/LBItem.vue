<template>
  <div id="item" class="video-type">
    <div id="it-h">
      <h1>{{ item_info.name }}
        <el-button icon="el-icon-refresh" size="small" round @click="update">换一批</el-button>
      </h1>
    </div>
    <div v-for="video in videos" class="inl video-it">
      <img :src="video.pic" @click="play(video)">
      <div class="v-count">
        <el-link class="info" :underline="false" icon="el-icon-video-pause">
          {{ video.stat.view }}
        </el-link>
        <el-link class="info danmaku" :underline="false" icon="el-icon-c-scale-to-original">
          {{ video.stat.danmaku }}
        </el-link>
      </div>
      <div class="desc">
        <el-link :underline="false">{{ video.title }}</el-link>
      </div>
    </div>
  </div>
</template>
<script>
import {item_video} from '@/js/common'

export default {
  name: "LBItem",
  props: ['item_info'],
  methods: {
    play: function (video) {
      this.$router.push({
        path: '/player',
        query: {
          video: video
        }
      })
    },
    update: function () {
      item_video(this, this.item_info.url)
    }
  },
  data: function () {
    return {
      videos: '',
    }
  },
  mounted() {
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
