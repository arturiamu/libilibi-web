<template>
  <div id="main-body">
    <LBHeader></LBHeader>
    <keep-alive include="LBHome,LBExplore">
      <RouterView></RouterView>
    </keep-alive>
    <LBFooter></LBFooter>
    <div id="sidebar" v-bind:style="{ left: $store.state.per}">
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
  </div>
</template>
<script>
import LBHeader from "@/components/LBHeader";
import LBFooter from "@/components/LBFooter";
import LBHome from "@/views/LBHome";

export default {
  name: "MainBody",
  components: {LBHeader, LBFooter, LBHome},
  data() {
    return {
      small_screen: '',
    }
  },
  methods: {
    side_f: function (type) {
      if (type === 'get') {
        this.$alert('<a href="https://gitee.com/arturiamu/libilibi-web.git" target="_blank">前端 </a>' +
            '<a href="https://gitee.com/arturiamu/libilibi-host.git" target="_blank"> 后端</a>', 'gitee仓库地址', {
          dangerouslyUseHTMLString: true
        });
      } else if (type === 'join') {
        this.$alert('请通过本页面最底端的联系方式与开发人员取得联系！！！', '加入我们', {});
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
  }
}
</script>


<style scoped>
#main-body {
  width: 1630px;
  margin: 0 auto;
}

.s-h:hover {
  background-color: #e3e5e7;
}

#sidebar {
  position: absolute;
  top: 40%;
  left: 93%;
}

#join {
  text-align: center;
  position: fixed;
  width: 40px;
  top: 64%;
  border: 1px solid #606266;
  border-radius: 5px;
}

#get {
  text-align: center;
  position: fixed;
  width: 40px;
  top: 70%;
  border: 1px solid #606266;
  border-radius: 5px;
}

#feedback {
  text-align: center;
  position: fixed;
  width: 40px;
  top: 76%;
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
</style>
