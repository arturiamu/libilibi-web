<template>
  <div id="collection">
    <div id="nav" class="inl">
      <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo">
        <div id="collectionTitle">
          <h2>我的收藏</h2>
        </div>
        <div id="recommendImg">
          <img src="../assets/recommde.png">
        </div>
        <div id="default">
          <el-submenu index="-1">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>默认收藏夹</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="ch_default">收藏数量: {{
                  defaultVCollections[0].videos.length
                }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
        <div id="createdCollection">
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder-add"></i>
              <span>用户收藏夹</span>
            </template>
            <div id="user-collections">
              <el-menu-item-group>
                <el-menu-item v-for="(c,i) in category" :index="i" @click="ch_videos(i)">
                  {{ c.name + "：" + c.videos.length }}
                </el-menu-item>
              </el-menu-item-group>
            </div>
          </el-submenu>
        </div>
      </el-menu>
    </div>
    <div id="content" class="inl">
      <div id="content-head">
        <div id="content-addCollection" class="inl">
          <el-button icon="el-icon-circle-plus-outline" type="primary" @click="createVisible = true">新建收藏夹</el-button>
          <el-dialog
              :visible.sync="createVisible"
              destroy-on-close="true"
              width="25%">
            <div id="createdForm">
              <el-form :model="ruleForm" :rules="rules" label-position="top" ref="ruleForm" label-width="80px"
                       class="demo-ruleForm">
                <div id="createdForm-head">
                  收藏夹信息
                </div>
                <el-divider></el-divider>
                <div id="createdForm-body">
                  <el-form-item label="收藏夹名称" prop="name">
                    <el-input icon="el-icon-edit" v-model="ruleForm.name" placeholder="收藏夹名称"></el-input>
                  </el-form-item>
                  <el-form-item label="简介:" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="可填写简介"></el-input>
                  </el-form-item>
                </div>
                <div id="createdForm-foot">
                  <el-form-item>
                    <el-button type="primary" @click="resetForm()" style="width: 25%">创建</el-button>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </el-dialog>
        </div>
        <div id="content-clear" class="inl" @click="clearCate">
          <el-button>清空收藏夹</el-button>
        </div>
        <div id="content-del" class="inl" @click="delCate">
          <el-button>删除收藏夹</el-button>
        </div>
        <div id="content-search" class="inl">
          <el-input v-model="ruleForm.content" prefix-icon="el-icon-search" placeholder="搜索收藏夹内容"></el-input>
        </div>
      </div>
      <div id="content-body">
        <div id="content-null" v-if="videos.length === 0">
          <div id="content-pic">
            <img src="../assets/null.png">
          </div>
          <div id="content-des">
            <el-link :underline="false">这里什么都没有哦~</el-link>
          </div>
        </div>
        <div id="content-exist" v-else>
          <div id="content-description">
            简介：
            没到18+不准看哦，我说认真的，因为你们也看不懂，嘿嘿嘿，都是珍藏精品资源!
          </div>
          <div class="videosType inl" v-for="v in videos">
            <div class="videosImg" @click="play(v)">
              <img :src="v.video[0].pic">
            </div>
            <div class="title">
              <el-link :underline="false" type="primary" @click="play(v)">
                {{ v.video[0].title.substring(0, 25) }}
              </el-link>
            </div>
            <div class="collectionTime ">
              <el-link type="primary">收藏于: {{ v.createTime.substring(0, 10) }}</el-link>
            </div>
            <div class="videosDelete ">
              <el-link type="primary" :underline="false" @click="del(v)">删除</el-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {play_video, httpGet, httpPost} from "@/js/https";

export default {

  name: "Collection",
  data() {
    return {
      createVisible: false,
      ruleForm: {
        name: '',
        desc: '',
        content: '',
      },
      c_index: -1,
      category: [],
      defaultVCollections: [],
      videos: [],
      rules: {
        name: [
          {required: true, message: '请输入收藏夹名称', trigger: 'blur'},
          {min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur'}
        ],
      }
    }
  },
  mounted() {
    if (this.$store.state.user.id) {
      for (let i = 0; i < this.$store.state.user.favorites.length; i++) {
        let url = "/collection/selectByCategory/" + this.$store.state.user.favorites[i].categoryName
        let c = {name: this.$store.state.user.favorites[i].categoryName, videos: []}
        httpGet(url).then(resp => {
          for (let j = 0; j < resp.data.length; j++) {
            c.videos.push(resp.data[j])
          }
        })
        if (c.name === '默认收藏夹') {
          this.defaultVCollections.push(c)
          this.videos = this.defaultVCollections[0].videos
        } else {
          this.category.push(c)
        }
      }
      this.$forceUpdate()
    }
  },
  methods: {
    success_tip(message) {
      this.$message({
        message: message,
        type: 'success'
      });
    },
    play(v) {
      play_video(this, v.video[0])
    },
    ch_videos(index) {
      this.videos = this.category[index].videos
      this.c_index = index
    },
    ch_default() {
      this.videos = this.defaultVCollections[0].videos
      this.c_index = -1
    },
    resetForm() {
      let that = this
      that.createVisible = false
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          httpPost('/category/add', {
            "categoryName": this.ruleForm.name
          }).then(data => {
            if (data.state === 200) {
              that.createVisible = false
              that.success_tip("创建成功")
              that.$store.dispatch("add_favorites", {categoryName: this.ruleForm.name})
              that.category.push({categoryName: this.ruleForm.name})
              that.$router.push("/").then(f => {
                that.$router.push("/collection")
              })
            } else {
              this.success_tip(data.message)
            }
          })
        }
      })
    },
    del(v) {
      httpGet('/collection/cancel/' + v.id)
      if (this.c_index === -1) {
        for (let i = 0; i < this.defaultVCollections[0].videos.length; i++) {
          if (this.defaultVCollections[0].videos[i].id === v.id) {
            this.defaultVCollections[0].videos.splice(i, 1)
            this.ch_default()
            break
          }
        }
      } else {
        for (let i = 0; i < this.category[this.c_index].videos.length; i++) {
          if (this.category[this.c_index].videos[i].id === v.id) {
            this.category[this.c_index].videos.splice(i, 1)
            this.ch_videos(this.c_index)
            break
          }
        }
      }
    },
    delCate() {
      if (this.c_index === -1) {
        return
      }
      let url = '/category/del/' + this.category[this.c_index].name
      httpGet(url)
      this.$store.dispatch("del_favorites", this.category[this.c_index].name)
      this.category.splice(this.c_index, 1)
    },
    clearCate() {
      let url = ''
      if (this.c_index === -1) {
        url = '/category/clear/默认收藏夹'
        this.defaultVCollections[0].videos = []
        this.ch_default()
      } else {
        url = '/category/clear/' + this.category[this.c_index].name
        this.category[this.c_index].videos = []
        this.ch_videos(this.c_index)
      }
      httpGet(url)
    }
  }
}
</script>

<style scoped>
#nav {
  vertical-align: top;
}

#user-collections {
  height: 300px;
  overflow: scroll;
}

.title {
  max-height: 22px;
  overflow: hidden;
}

#collectionTitle {
  padding-top: 40px;
}

#default {
  padding-top: 10%;
}

#createdCollection {
  padding-top: 5%;
}

#content {
  vertical-align: top;
  width: 80%;
  margin: 0 auto;
}

#content-head {
  text-align: right;
  margin-top: 20px;
}

#content-addCollection {
  position: relative;
  left: -54%;
}

#content-clear {
  position: relative;
  left: -53%;
}

#content-del {
  position: relative;
  left: -52%;
}

#content-body {
  padding-left: 6%;
  padding-top: 2%;
}

#content-exist {
  text-align: left;
  max-height: 640px;
  min-height: 640px;
  overflow: scroll;
  overflow-x: hidden;
}

#content-description {
  padding-bottom: 2%;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
}

#content-pic {
  margin-left: -10%;
}

#content-des {
  margin-left: -10%;
  margin-top: -4%;
  font-size: 20px;
}

#createdForm {
  width: 100%;
  text-align: center;
}

.videosType {
  width: 190px;
  padding: 5px 20px;
}

.videosImg {
  width: 190px;
  height: 120px;
}

.videosImg img {
  width: 100%;
  height: 100%;
}

.videosDelete {
  margin-top: -12%;
  margin-left: 80%;
}

#createdForm-body {
  width: 100%;
  text-align: center;
}

#createdForm-head {
  font-size: 25px;
  font-weight: bolder;
  margin-top: -10px;
}

#createdForm-body {
  width: 100%;
  text-align: left;
}

</style>
