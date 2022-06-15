<template>
  <div>
    <div id="top">
      <i class="el-icon-time"> 历史记录</i>
      <div id="search">
        <el-input v-model="content" prefix-icon="el-icon-search" placeholder="搜索历史记录"></el-input>
      </div>
      <div id="clean">
        <el-button round="true" type="primary" @click="clean">清空历史</el-button>
      </div>
    </div>

    <div id="history">
      <el-timeline>
        <el-timeline-item v-for="video in videos" :timestamp="video.createTime" placement="top" type="primary"
                          size="normal">
          <el-card>
            <div class="center">
              <div class="videoImg inl" @click="gotoPlay(video)">
                <img :src="video.video.pic">
              </div>
              <div class="videoContent inl">
                <div class="videoContent1 " @click="gotoPlay(video)">
                  <el-link :underline="false">{{ video.video.title }}</el-link>
                </div>
                <div class="desc">
                  <h4>描述 :</h4>
                </div>
                <div class="videoContent2 ">
                  <el-link :underline="false">{{ video.video.desc.replaceAll(/\r/g, "&nbsp;") }}</el-link>
                </div>
                <div class="videoContent3">
                  <el-link :underline="false">类型 | {{ video.video.tname }}</el-link>
                </div>
              </div>
              <div class="videoDelete ">
                <el-button type="danger" @click="deleteHistory(video)" icon="el-icon-delete" circle></el-button>
              </div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <div id="footImg">
      <img src="../assets/historyEnd.png">
    </div>
  </div>
</template>

<script>
import {httpGet, play_video} from "@/js/https";


export default {
  name: "History",
  data() {
    return {
      videos: [],
      content: '',
      count: 0,
    }
  },
  mounted() {
    httpGet("/history/get/13").then(data => {
      this.videos = data.data
    })
  },
  methods: {
    clean() {
      let that = this
      this.$confirm('清空之后就什么都没有了哦~', '提示', {
        confirmButtonText: '确定清空',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        httpGet("/history/del/all")
        that.videos = []
        this.$message({
          type: 'success',
          message: '删除成功!',
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    gotoPlay(v) {
      play_video(this, v.video)
    },
    deleteHistory(his) {
      httpGet("/history/del/" + his.id)
      for (let i = 0; i < this.videos.length; i++) {
        if (this.videos[i].id === his.id) {
          this.videos.splice(i, 1)
          break
        }
      }
    }
  }
}
</script>

<style scoped>
#top {
  text-align: left;
  padding-left: 80px;
  padding-top: 10px;
  font-size: 25px;
}

.el-icon-time {
  position: absolute;
  padding-top: 8px;
}

#search {
  width: 10%;
  padding-left: 1100px;
  position: absolute;

}

#clean {
  padding-left: 1350px;
}

#history {
  width: 50%;
  padding-top: 50px;
  margin: 0 auto;

}

img {
  width: 100%;
  height: 100%;
}

.videoImg {
  position: relative;
  width: 160px;
  height: 100px;

}

.center {
  text-align: left;
}

#footImg {
  width: 450px;
  height: 200px;
  margin: 0 auto;
}

.videoContent {
  position: relative;
  left: 40px;
  top: -90px;
}

.videoContent1 a {
  font-size: larger;
  font-weight: bold;
}

.videoContent1 {
  position: absolute;
  width: 380%;
}

.videoContent2 {
  position: absolute;
  top: 80px;
  width: 350px;
  max-height: 60px;
  overflow: hidden;

}

.videoContent3 {
  position: relative;
  top: 90px;
  left: 410px;
  margin-left: 10px;
}

.videoDelete {
  position: relative;
  top: -105px;
  left: 690px;
}

.desc {
  position: absolute;
  top: 60px;
}

</style>
