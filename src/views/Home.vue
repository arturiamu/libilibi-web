<template>
  <div id="lb-home">
    <div id="top">
      <div id="refresh" v-bind:style="{ left: $store.state.per}" @click="load_videos">
        <el-link icon="el-icon-refresh" :underline="false"></el-link>
        <div id="re-text">
          <el-link :underline="false">换一批</el-link>
        </div>
      </div>

      <div id="sidebar" v-bind:style="{ left: $store.state.per}">
        <div id="sidebar-bt" class="s-h" @click="drawer = true">
          <el-link :underline="false" icon="el-icon-menu"></el-link>
          <el-link :underline="false">分区</el-link>
        </div>
        <el-drawer
            title="视频分区"
            :size="150"
            :visible.sync="drawer">
          <div id="partition">
            <div class="pt pt-top" @click="goAnchor('lb-header')">
              <el-link :underline="false" icon="el-icon-arrow-up"></el-link>
            </div>
            <div class="pt" v-for="item in $store.state.user.items" @click="goAnchor(item.uri)">
              <el-link :underline="false">{{ item.name }}</el-link>
            </div>
            <div class="pt pt-top" @click="goAnchor('lb-footer')">
              <el-link :underline="false" icon="el-icon-arrow-down"></el-link>
            </div>
          </div>
        </el-drawer>
      </div>

      <div class="inl" id="carousel">
        <el-carousel trigger="click" height="380px" indicator-position="outside">
          <el-carousel-item v-for="i in 5">
            <div class="a-card">
              <div class="pic">
                <img @click="play(videos[i - 1])" :src="videos[i - 1].pic">
              </div>
              <div class="desc">
                <el-link class="info" :underline="false">
                  {{ videos[i - 1].title.substring(0, 35) }}
                </el-link>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="inl">
        <div class="inl" id="top-r">
          <div id="top-r-t" class="right">
            <div class="top-item inl" v-for="i in 4">
              <div class="video-it inl">
                <div class="v-pic">
                  <img @click="play(videos[i - 1 + 5])" :src="videos[i - 1 + 5].pic">
                </div>
                <div class="v-count">
                  <el-link class="info" :underline="false" icon="el-icon-video-pause">
                    {{ videos[i - 1 + 5].view }}
                  </el-link>
                  <el-link class="info like" :underline="false" icon="el-icon-circle-check">
                    {{ videos[i - 1 + 5].like }}
                  </el-link>
                </div>
                <div class="desc">
                  <el-link class="info" :underline="false">
                    {{ videos[i - 1 + 5].title }}
                  </el-link>
                </div>
              </div>
            </div>
          </div>
          <div id="top-r-b" class="right">
            <div class="bottom-item inl" v-for="i in 4">
              <div class="video-it inl">
                <div class="v-pic">
                  <img @click="play(videos[i - 1 + 9])" :src="videos[i - 1 + 9].pic">
                </div>
                <div class="v-count">
                  <el-link class="info" :underline="false" icon="el-icon-video-pause">
                    {{ videos[i - 1 + 9].view }}
                  </el-link>
                  <el-link class="info" :underline="false" icon="el-icon-circle-check">
                    {{ videos[i - 1 + 9].like }}
                  </el-link>
                </div>
                <div class="desc">
                  <el-link class="info" :underline="false">
                    {{ videos[i - 1 + 9].title }}
                  </el-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Item v-for="it in $store.state.user.items" v-bind:item_info="it" :id="it.uri"></Item>
  </div>
</template>

<script>
import {httpGet, play_video} from "@/js/https";
import Item from "@/views/Item";

export default {
  name: "Home",
  components: {Item},
  data() {
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
      drawer: false,
    }
  },
  methods: {
    load_videos: function () {
      httpGet('/interest/13').then(data => {
        if (data.state === 200) {
          this.videos = data.data
        }
      })
    },
    play: function (video) {
      play_video(this, video)
    },
    goAnchor: function (id) {
      let anchor = document.getElementById(id);
      anchor.scrollIntoView();
    },
  },
  created() {
    this.load_videos()
  }
}
</script>

<style scoped>

.s-h:hover {
  background-color: #e3e5e7;
}

#sidebar {
  position: absolute;
  top: 50%;
  left: 93%;
}

#sidebar-bt {
  position: fixed;
  text-align: center;
  width: 40px;
  border: 1px solid #606266;
  border-radius: 5px;
}

.pt {
  margin-top: 5px;
  margin-left: 50px;
  padding-top: 10px;
}

.pt-top {
  position: relative;
  left: 5px;
}

#refresh {
  position: absolute;
  top: 8%;
  left: 93%;
  width: 35px;
  height: 80px;
  border: 1px solid #606266;
  border-radius: 8px;
}

#refresh:hover {
  background-color: #e3e5e7;
}

#refresh a {
  position: relative;
  left: 9px;
}

#re-text {
  width: 10px;
}

#lb-home {
  text-align: left;
}

.v-pic {
  height: 155px;
}

#top-r-t {
  position: relative;
  top: -17px;
}

#top-r-b {
  position: relative;
  top: -14px
}

#lb-home {
  margin-top: 5px;
}

#carousel {
  width: 560PX;
  height: 352px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 3%;
}

</style>
