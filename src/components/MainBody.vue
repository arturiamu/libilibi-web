<template>
  <div id="main-body">
    <LBHeader></LBHeader>
    <keep-alive include="Home,Explore">
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
    </div>
  </div>
</template>
<script>
import LBHeader from "@/components/Header";
import LBFooter from "@/components/Footer";
import LBHome from "@/views/Home";
import {httpPost} from '@/js/https'

export default {
  name: "MainBody",
  components: {LBHeader, LBFooter, LBHome},
  data() {
    return {
      small_screen: '',
    }
  },
  mounted() {
    this.$router.push('/')
  },
  methods: {
    success_tip: function (text) {
      this.$message({
        type: 'success',
        message: text
      });
    },
    failed_tip: function (text) {
      this.$message({
        type: 'info',
        message: text
      });
    },
    side_f: function (type) {
      let that = this
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
          if (!value.match(/^\s+$/)) {
            httpPost("/advise/add", {
              advise: value,
              userId: this.$store.state.user.id
            }).then(data => {
              if (data.state === 200) {
                that.success_tip(data.message)
              } else {
                that.failed_tip(data.message)
              }
            }).catch(err => {
              that.failed_tip("网络繁忙，请稍后重试")
            })
          } else {
            that.failed_tip("输入无效")
          }
        }).catch(() => {
          that.failed_tip("输入无效")
        });
      }
    }
  }
}
</script>

<style scoped>
#main-body {
  margin: 0 auto;
  max-width: 1630px;
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
</style>
