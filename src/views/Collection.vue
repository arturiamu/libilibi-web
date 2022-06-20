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
              <el-menu-item index="1-1" @click="ch_videos(0)">收藏数量: 10</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
        <div id="createdCollection">
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder-add"></i>
              <span>创建的收藏夹</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(c,i) in collections" v-if="i!== 0" :index="c" @click="ch_videos(i)">
                {{ c.name }}
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
        <div id="content-null" v-if="collections.length === 0">
          <div id="content-pic">
            <img src="../assets/null.png">
          </div>
          <div id="content-des">
            你暂时还没有收藏夹哦~
          </div>
        </div>
        <div id="content-exist" v-else>
          <div id="content-description">
            简介：
            没到18+不准看哦，我说认真的，因为你们也看不懂，嘿嘿嘿，都是珍藏精品资源!
          </div>
          <div class="videosType inl" v-for="v in videos">
            <div class="videosImg" @click="play(v)">
              <img :src="v.pic">
            </div>
            <div>
              <el-link :underline="false" type="primary" @click="play(v)">
                {{ v.title.substring(0, 25) }}
              </el-link>
            </div>
            <div class="collectionTime ">
              <span>收藏于: xx小时前</span>
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
import {play_video} from "@/js/https";

export default  {
  name: "Collection",
  data() {
    return {
      createVisible: false,
      ruleForm: {
        name: '',
        desc: '',
        content: '',
      },
      collections: [
        {
          name: "默认收藏夹",
          videos: [
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
          ]
        },
        {
          name: "收藏夹1",
          videos: [
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            }, {
              aid: 208453317,
              coin: 16,
              danmaku: 2,
              desc: "-",
              favorite: 9,
              like: 30,
              pic: "http://i1.hdslb.com/bfs/archive/471f1a6bb58b8a12b9776777c99ce52d6ccba9c3.jpg",
              pid: 129,
              reply: 17,
              share: 5,
              tid: 154,
              title: "【Twice】The Feels舞蹈挑战 男生（大叔）翻跳Twice回归英单",
              tname: "舞蹈综合",
              view: 1123
            },
            {
              aid: 208242333,
              coin: 23680,
              danmaku: 3914,
              desc: "唐诗逸舞蹈片段来源于逆水寒 X 唐诗逸《雨霖铃》选段 BV1As41177fV 和新流派“鸿音”同名推广舞蹈《鸿音》BV1" + "Qb4y1d7N6",
              favorite: 83887,
              like: 248160,
              pic: "http://i0.hdslb.com/bfs/archive/db9564dbc6cea79f14732aaf44531e456ed5099d.jpg",
              pid: 129,
              reply: 1776,
              share: 8476,
              tid: 154,
              title: "国家舞团首席:我将用62秒夺走你的“卧槽”！！！",
              tname: "舞蹈综合",
              view: 6241758
            },
          ]
        },
        {
          name: "收藏夹2",
          videos: [
            {
              aid: 208246193,
              coin: 2241,
              danmaku: 2422,
              desc: "yt",
              favorite: 22993,
              like: 26888,
              pic: "http://i2.hdslb.com/bfs/archive/5f607cace91c50fb0c1851c5cabff962e47e11b7.jpg",
              pid: 129,
              reply: 1972,
              share: 7998,
              tid: 199,
              title: "ITZY最新回归曲LOCO 4K舞蹈版公开",
              tname: "明星舞蹈",
              view: 1396928
            },
            {
              aid: 208118587,
              coin: 1322,
              danmaku: 2017,
              desc: "yt",
              favorite: 8047,
              like: 13647,
              pic: "http://i1.hdslb.com/bfs/archive/4c8e16a0e4970bedf5bdbc41e8a58e8a1e2e6541.jpg",
              pid: 129,
              reply: 1148,
              share: 2394,
              tid: 199,
              title: "NCT127最新回归曲Sticker 4K舞蹈版公开",
              tname: "明星舞蹈",
              view: 417397
            }
          ]
        },
        {name: "收藏夹3"},
        {name: "收藏夹4"},
        {name: "收藏夹5"},
        {name: "收藏夹6"},
      ],
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
    this.videos = this.collections[0].videos
  },
  methods: {
    play(v) {
      play_video(this, v)
    },
    ch_videos(index) {
      this.videos = this.collections[index].videos
    },
    VideosDelete() {
    },
    deleteAll() {

    }

  }
}
</script>

<style scoped>
#nav {
  vertical-align: top;
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
