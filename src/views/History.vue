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

    <div id="history" >
      <el-timeline>
        <el-timeline-item timestamp="2022/6/13" placement="top" size="large">
          <el-card>
            视频一
          </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2022/6/12" placement="top" size="large">
          <el-card>
            视频二
          </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2022/6/11" placement="top" size="large">
          <el-card>
            视频三
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <div>
      <img src="../assets/historyend.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      content: '',
      count: 0,
    }
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
    load() {
      this.count += 2
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
  padding-left: 400px;
  padding-top: 50px;

}

</style>
