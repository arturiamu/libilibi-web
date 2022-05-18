<template>
  <div id="search">
    <div id="tip">
      <el-link :underline="false" id="res">综合排序:</el-link>
    </div>
    <div v-for="video in videos" class="inl">
      <div class="img-div">
        <img :src="video.pic" @click="play(video)">
      </div>
      <div class="info-div">
        <el-link :underline="false" v-html="video.title"></el-link>
      </div>
    </div>
  </div>
</template>

<script>
import {video_detail} from "@/js/common";

export default {
  name: "LBSearch",
  data: function () {
    return {
      // videos: this.$route.params.videos,
      videos: ""
    }
  },
  methods: {
    play: function (video) {
      video_detail(this, video.bvid)
    }
  },
  mounted() {
    this.videos = this.$route.params.videos
  },
}
</script>

<style scoped>
#search {
  text-align: center;
  margin-top: 10px;
}

.img-div {
  width: 270px;
  height: 150px;
  padding: 10px 5px;
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

.info-div {
  width: 250px;
  height: 20px;
  overflow: hidden;
  text-align: left;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 3%
}
</style>
