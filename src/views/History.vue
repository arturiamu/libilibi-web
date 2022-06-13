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
        <el-timeline-item v-for="video in videos" placement="top" size="normal">
          <el-card>
            <div class="center">
              <div class="videoimg inl">
                <img :src="video.pic">
              </div>
              <div class="videocontent inl">
                <div class="videocontent1 ">
                  <el-link>{{ video.title }}</el-link>
                </div>
                <div class="videocontent2 ">
                  <el-link>{{ video.desc }}</el-link>
                </div>
                <div class="videocontent3">
                  <el-link>类型 | {{ video.tname }}</el-link>
                </div>
              </div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <div id="footimg">
      <img src="../assets/historyend.png">
    </div>
  </div>
</template>

<script>
import {httpGet} from "@/js/https";

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
      console.log(data)
      this.videos = data.data
    })
  },
  methods: {
    clean() {
      this.$confirm('清空之后就什么都没有了哦~', '提示', {
        confirmButtonText: '确定清空',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
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

.videoimg {
  width: 160px;
  height: 100px;
  position: relative;
}

.center {
  text-align: left;
}

#footimg {
  width: 450px;
  height: 200px;
  margin: 0 auto;
}

.videocontent {
  position: relative;
  left: 40px;
  top: -90px;
}
.videocontent1 a{
  font-size: larger;
  font-weight: bold;

}

.videocontent2 {
  position: absolute;
  top: 85px;
}
.videocontent3 {
  position: absolute;
  top: 85px;
  left: 200px;
}

</style>
