<template>
  <div id="search">
    <div id="tip">
      <el-link :underline="false" id="res">综合排序:</el-link>
    </div>
    <div v-for="video in videos" class="inl video-it-sh">
      <img :src="video.pic" @click="play(video)">
      <div class="v-count-sh">
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
import {httpGet, play_video} from "@/js/https";

export default {
  name: "Search",
  data: function () {
    return {
      keyword: this.$route.query.keyword,
      videos: []
    }
  },
  methods: {
    play: function (video) {
      play_video(this, video)
    },
    search(keyword, offset, ps) {
      let url = "/video/search/" + keyword + '/' + offset + '/' + ps
      httpGet(url).then(resp => {
        this.videos = resp
      })
    }
  },
  beforeMount() {
    this.search(this.keyword, 0, 50)
  }
}
</script>

<style scoped>
#search {
  text-align: center;
  margin-top: 10px;
}

.video-it-sh {
  width: 264px;
  height: 156px;
  padding-left: 7px;
  padding-top: 20px;
  position: relative;
}

.desc {
  max-height: 20px;
  overflow: hidden;
}

.v-count-sh {
  text-align: left;
  position: absolute;
  top: 154px;
  width: 97.5%;
  background-image: linear-gradient(0deg, rgba(160, 163, 165, 0.84) 20%, rgba(246, 246, 246, 0.2) 100%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.v-count-sh a {
  margin-left: 10px;
  color: #ffffff;
}

.v-count-sh a span {
  color: #ffffff;
}

.v-count-sh a i {
  color: #f6f6f6;
}

#tip {
  margin-left: 125px;
  margin-top: 5px;
  text-align: left;
}

#res {
  text-align: left;
  font-size: 20px;
}


img {
  width: 100%;
  height: 100%;
  border-radius: 3%
}
</style>
