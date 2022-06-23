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
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>默认收藏夹</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="ch_default">收藏数量: {{ defaultVCollections.length }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
        <div id="createdCollection">
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder-add"></i>
              <span>用户收藏夹</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(c,i) in collections" :index="2-i" @click="ch_videos(i)">
                {{ c.category + "：" + c.data.length }}
              </el-menu-item>
            </el-menu-item-group>
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
                    <el-button type="primary" @click="resetForm('ruleForm')" style="width: 25%">提交</el-button>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </el-dialog>
        </div>
        <div id="content-deleteAll" class="inl" @click="deleteAll">
          <el-button>删除全部</el-button>
        </div>
        <div id="content-search" class="inl">
          <el-input v-model="ruleForm.content" prefix-icon="el-icon-search" placeholder="搜索收藏夹内容"></el-input>
        </div>
      </div>
      <div id="content-body">
        <div id="content-null" v-if="len === 0">
          <div id="content-pic">
            <img src="../assets/null.png">
          </div>
          <div id="content-des">
            这里什么都没有哦~
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
              <el-link type="primary" :underline="false" @click="VideosDelete">删除</el-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {play_video, httpGet} from "@/js/https";

export default {

  name: "Collection",
  data() {
    return {
      len: 0,
      createVisible: false,
      ruleForm: {
        name: '',
        desc: '',
        content: '',
      },
      defaultVCollections: [],
      collections: [],
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
      let that = this
      httpGet("/collection/selectCategory").then(resp => {
        for (let i = 0; i < resp.data.length; i++) {
          if (resp.data[i].category === '默认收藏夹') {
            this.defaultVCollections = resp.data[i]
          } else {
            this.collections.push(resp.data[i])
          }
        }
        that.ch_default()
        console.log(this.collections)
      })
    }
  },
  methods: {
    play(v) {
      play_video(this, v)
    },
    ch_videos(index) {
      this.videos = this.collections[index].data
      this.len = this.videos.length
    },
    ch_default() {
      this.videos = this.defaultVCollections.data
      if (this.videos) {
        this.len = this.videos.length
      } else {
        this.len = 0
      }
    },
    VideosDelete() {
      alert(1)
    },
    deleteAll() {
      alert(2)
    }
  }
}
</script>

<style scoped>
#nav {
  vertical-align: top;
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

#content-deleteAll {
  margin-right: 55%;
}

#content-addCollection {
  padding-right: 2%;
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
  height: 120px;
  padding: 5px 20px;
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
