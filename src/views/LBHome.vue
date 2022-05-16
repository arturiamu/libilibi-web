<template>
  <div id="lb-home">
    <div id="top">
      <div id="refresh" @click="load_videos">
        <el-link icon="el-icon-refresh" :underline="false"></el-link>
        <div id="re-text">
          <el-link :underline="false">换一批</el-link>
        </div>
      </div>

      <div id="sidebar">
        <div id="sidebar-bt" class="s-h" @click="drawer = true">
          <el-link :underline="false" icon="el-icon-menu"></el-link>
          <el-link :underline="false">分区</el-link>
        </div>
        <div id="up" class="s-h" @click="goAnchor('lb-header')">
          <el-link :underline="false" icon="el-icon-arrow-up"></el-link>
          <el-link :underline="false">顶部</el-link>
        </div>
        <div id="join" class="s-h" @click="side_f('join')">
          <el-link :underline="false">加入</el-link>
          <el-link :underline="false">我们</el-link>
        </div>
        <div id="get" class="s-h" @click="side_f('get')">
          <el-link :underline="false">获取</el-link>
          <el-link :underline="false">源码</el-link>
        </div>
        <div id="feedback" class="s-h" @click="side_f('feedback')">
          <el-link :underline="false">意见</el-link>
          <el-link :underline="false">反馈</el-link>
        </div>
        <el-drawer
            title="视频分区"
            :size="150"
            :visible.sync="drawer">
          <div id="partition">
            <div class="pt pt-top" @click="goAnchor('lb-header')">
              <el-link :underline="false" icon="el-icon-arrow-up"></el-link>
            </div>
            <div class="pt" v-for="item in $store.state.items" @click="goAnchor(item.url)">
              <el-link :underline="false">{{ item.name }}</el-link>
            </div>
            <div class="pt pt-top" @click="goAnchor('lb-header')">
              <el-link :underline="false" icon="el-icon-arrow-up"></el-link>
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
    <LBItem v-for="it in $store.state.items" v-bind:item_info="it" :id="it.url"></LBItem>
  </div>
</template>

<script>
import {main_video} from "@/js/common";
import {player} from "@/js/common";
import LBItem from "@/views/LBItem";

export default {
  name: "LBHome",
  components: {LBItem},
  data() {
    return {
      videos: '',
      drawer: false,
    }
  },
  methods: {
    load_videos: function () {
      main_video(this)
    },
    play: function (video) {
      player(this, video)
    },
    goAnchor: function (id) {
      let anchor = document.getElementById(id);
      anchor.scrollIntoView();
    },
    side_f: function (type) {
      if (type === 'get') {
        this.$alert('<a href="https://gitee.com/arturiamu/libilibi-web.git" target="_blank">前端 </a>' +
            '<a href="https://gitee.com/arturiamu/libilibi-host.git" target="_blank"> 后端</a>', 'gitee 仓库地址', {
          dangerouslyUseHTMLString: true
        });
      } else if (type === 'join') {

      } else if (type === 'feedback') {
        this.$prompt('请输入您的建议', '意见反馈', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
          this.$message({
            type: 'success',
            message: '反馈成功，感谢您的宝贵意见！！！: '
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  },
  mounted() {
    this.load_videos()
  },
}
</script>

<style scoped>

.s-h:hover {
  background-color: #e3e5e7;
}

#sidebar {
  position: absolute;
  top: 40%;
  left: 93%;
}

#sidebar-bt {
  position: fixed;
  text-align: center;
  width: 40px;
  border: 1px solid #606266;
  border-radius: 5px;
}

#up {
  text-align: center;
  position: fixed;
  width: 40px;
  top: 46%;
  border: 1px solid #606266;
  border-radius: 5px;
}

#join {
  text-align: center;
  position: fixed;
  width: 40px;
  top: 52%;
  border: 1px solid #606266;
  border-radius: 5px;
}

#get {
  text-align: center;
  position: fixed;
  width: 40px;
  top: 58%;
  border: 1px solid #606266;
  border-radius: 5px;
}

#feedback {
  text-align: center;
  position: fixed;
  width: 40px;
  top: 64%;
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
  z-index: 1;
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
  top: -15px
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
