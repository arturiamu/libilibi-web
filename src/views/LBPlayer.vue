<template>
  <div id="lb-player">
    <div id="player-area" class="inl">
      <div id="introduce">
        <div id="title">
          <h2>
            {{ video.title }}
          </h2>
        </div>
        <div id="video-info">
          <el-link :underline="false" icon="el-icon-video-play">{{ video.stat.view + " " }}播放</el-link>
          <el-link :underline="false" icon="el-icon-film">{{ video.stat.danmaku + " " }}弹幕</el-link>
          <el-link :underline="false" icon="el-icon-star-off">{{ video.stat.favorite + " " }}收藏</el-link>
          <el-link :underline="false" icon="el-icon-circle-check">{{ video.stat.like + " " }}点赞</el-link>
          <el-link :underline="false" icon="el-icon-help">{{ video.stat.coin + " " }}投币</el-link>
          <el-link :underline="false" icon="el-icon-position">{{ video.stat.share + " " }}分享</el-link>
        </div>
      </div>
      <div id="frame">
        <iframe v-bind:src="src + video.stat.aid"
                allowfullscreen="allowfullscreen" width="100%" height="100%"
                scrolling="no" frameborder="no" framespacing="0" border="0"
                sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
        ></iframe>
      </div>
      <div id="describe">
        <div v-for="i in desc">
          <el-link :underline="false">{{ i }}</el-link>
        </div>
      </div>
    </div>
    <div id="recommend-area" class="inl">
      <div id="re">
        <div id="re-tittle">
          <h2>推荐列表：</h2>
        </div>
        <div @click="play(re_video)" class="re-video" v-for="re_video in videos">
          <div class="re-it">
            <div class="re-pic inl">
              <img :src="re_video.pic">
            </div>
            <div class="inl a-re">
              <div class="re-desc">
                <el-link class="info" type="primary" :underline="false">
                  {{ re_video.title.substring(0, 35) }}
                </el-link>
              </div>
              <div class="re-desc">
                <el-link class="info" type="primary" :underline="false">
                  bofan danmu
                </el-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {player} from "@/js/common";

export default {
  name: "LBPlayer",
  data: function () {
    return {
      video: this.$route.query.video,
      src: "https://player.bilibili.com/player.html?high_quality=1&aid=",
      desc: this.$route.query.video.desc.split('\n'),
      videos: [
        {
          "bvid": "BV17r4y1b7z8",
          "desc": "sm40456289\nそれっぽい単語集で踊ってんだ\n\nダンマスワールド４に応募してます。\nワーワーワールド枠もよろしくお願いします。【sm39762942】\n\n\n失敬。\n\n\nりるあ　mylist/54240379\nTwitter ＠ririrua_723\nコミュ　co4041716\n\n撮影・編集\nさんさんさん　mylist/63741366\n\n楽曲本家様　sm39334235\n振付本家様　sm39476758",
          "duration": "206",
          "pic": "http://i2.hdslb.com/bfs/archive/b0d746767158e2f0752e83e7d460c4ea7d0d5b87.jpg",
          "stat": {
            "aid": "769097350",
            "coin": "0",
            "danmaku": "0",
            "favorite": "25",
            "like": "64",
            "reply": "0",
            "share": "0",
            "view": "634"
          },
          "tid": "20",
          "title": "【りるあ】神っぽいな (像神一样呐)【踊ってみた】"
        },
        {
          "bvid": "BV1zV411j74P",
          "desc": "录了两次，第一次高跟鞋实在是太高了，跳起来一点活力都没有，\n第二次衣服拉垮，但阳光好好☀、\n摄影/后期：item道具",
          "duration": "113",
          "pic": "http://i1.hdslb.com/bfs/archive/b9960576876104dcebbbd35907e41acd179300f3.jpg",
          "stat": {
            "aid": "418198091",
            "coin": "5666",
            "danmaku": "419",
            "favorite": "16361",
            "like": "24375",
            "reply": "621",
            "share": "686",
            "view": "529801"
          },
          "tid": "20",
          "title": "糟糕，被学长找到了❤️我喜欢阳光，你喜欢我吗☀【向阳】☀"
        },
        {
          "bvid": "BV1iB4y1m7rd",
          "desc": "是明日方舟干员安洁莉娜（jk.ver）的cos\r\n觉得和星期五的早安非常配于是录了(o^^o)\r\n可惜在天桥上完全没有办法避开人群嘛(ﾟoﾟ;;\r\n\r\n希望大家喜欢这一作！能够带来元气的能量就太好啦！\r\n祝大家假期愉快，幸福健康的度过吧～\r\n\r\n参考振幅：BV1Gp4y1k7NU（manako天下第一）\r\n使用音源：sm23926031\r\n安洁莉娜/后期：希尔\r\n摄影：@巧克力酱w",
          "duration": "193",
          "pic": "http://i2.hdslb.com/bfs/archive/11c6f8fbb87b642bfd24bfbfb271fffe76451031.jpg",
          "stat": {
            "aid": "596108233",
            "coin": "730",
            "danmaku": "140",
            "favorite": "1170",
            "like": "2726",
            "reply": "142",
            "share": "336",
            "view": "23169"
          },
          "tid": "20",
          "title": "金曜日のおはよう｜明日方舟安洁莉娜cos/泰拉jk星期五的早安！"
        },
        {
          "bvid": "BV1dL4y187ak",
          "desc": "up是开头中间那个，不是专业的节目排的也蛮紧的，家人们不要嫌弃哦",
          "duration": "192",
          "pic": "http://i2.hdslb.com/bfs/archive/1ada2603ff1c02c76476fe71e7b7664974f53056.jpg",
          "stat": {
            "aid": "848258628",
            "coin": "81",
            "danmaku": "12",
            "favorite": "643",
            "like": "490",
            "reply": "70",
            "share": "81",
            "view": "21346"
          },
          "tid": "20",
          "title": "丹东二中艺术节宅舞《星期五的早安》2.6"
        },
        {
          "bvid": "BV1H5411d7Td",
          "desc": "-",
          "duration": "90",
          "pic": "http://i1.hdslb.com/bfs/archive/68accfdf5c13b2fa4478bece205aa4c81047c19a.jpg",
          "stat": {
            "aid": "468854475",
            "coin": "159",
            "danmaku": "0",
            "favorite": "815",
            "like": "791",
            "reply": "37",
            "share": "8",
            "view": "11983"
          },
          "tid": "20",
          "title": "【雷姆】天使降临到我身边"
        },
        {
          "bvid": "BV1m3411A7H7",
          "desc": "参考视频：BV1Lr4y1y78x  BV1ug411P7J1\nrin：社央\nmiku：沫曦\n有幸参加了本年度的线上学园祭！这是单品！\n因为条件有限妆造不完美请见谅！！",
          "duration": "218",
          "pic": "http://i1.hdslb.com/bfs/archive/074cebbe885fbe9a562b29a41b405c93331aa49d.jpg",
          "stat": {
            "aid": "426611880",
            "coin": "28",
            "danmaku": "38",
            "favorite": "35",
            "like": "80",
            "reply": "23",
            "share": "5",
            "view": "635"
          },
          "tid": "20",
          "title": "【沫曦×社央】Gimme×Gimme~演唱会振付~【2022拓歌动漫社夏日典单品】"
        },
        {
          "bvid": "BV1S3411T7Yo",
          "desc": "姐姐的首cos！（俺本来也想出的，但是戴口罩不还原我就把这个艰巨任务交给！姐姐啦！\n舞见 岚兮（岚西姐姐yyds\n摄影 岚西\n后期 岚西（姐姐录了这么久才做好！呜呜久等了\n参考BV1tu411R78s",
          "duration": "98",
          "pic": "http://i1.hdslb.com/bfs/archive/dff345f452df0fd4e5eac75d427e2d12f7778375.jpg",
          "stat": {
            "aid": "425824548",
            "coin": "208",
            "danmaku": "10",
            "favorite": "1648",
            "like": "2527",
            "reply": "90",
            "share": "26",
            "view": "35440"
          },
          "tid": "20",
          "title": "“五条君，我 喜欢 你 哦！”| 姐姐的初次cos♥"
        },
        {
          "bvid": "BV1Q94y1f7oN",
          "desc": "音源本家：BV13L4y1n7XD\n振幅：我\n后期/拍摄/场工：也我\n中途被耳唇钉一体的挂饰群殴的也是我\nps：眼睛没有什么大事不要担心（根本没人担心）",
          "duration": "127",
          "pic": "http://i1.hdslb.com/bfs/archive/08221e3d40db52d370c5fc517ea470b8a31e73fd.jpg",
          "stat": {
            "aid": "340203472",
            "coin": "240",
            "danmaku": "20",
            "favorite": "763",
            "like": "2040",
            "reply": "68",
            "share": "37",
            "view": "11620"
          },
          "tid": "20",
          "title": "【原创振幅】Bloody Groovy//ChroNoiR【瞬间】^不抓紧项圈小狗就跑掉了^"
        },
        {
          "bvid": "BV1C3411P7TN",
          "desc": "大家五一都在干嘛呢\n\nBGM：还是你的笑容最可爱-泠鸢yousa",
          "duration": "142",
          "pic": "http://i1.hdslb.com/bfs/archive/d1439a37287ae8e2d9b8bc0ef6d1dc62af7930ee.jpg",
          "stat": {
            "aid": "426300936",
            "coin": "3167",
            "danmaku": "225",
            "favorite": "12304",
            "like": "16059",
            "reply": "168",
            "share": "405",
            "view": "334112"
          },
          "tid": "20",
          "title": "女仆妹妹的笑容可爱吗 (〃'▽'〃)"
        },
        {
          "bvid": "BV1xA4y1f7Q2",
          "desc": "-",
          "duration": "110",
          "pic": "http://i1.hdslb.com/bfs/archive/a903ee389e2ea5095fb2ef4fa0dd4cfa8f9c6121.jpg",
          "stat": {
            "aid": "896581030",
            "coin": "21309",
            "danmaku": "612",
            "favorite": "7819",
            "like": "51379",
            "reply": "5410",
            "share": "2179",
            "view": "722168"
          },
          "tid": "20",
          "title": "Start Dash！！"
        },
        {
          "bvid": "BV1ki4y1U7rR",
          "desc": "距离婚礼其实已经过去两个月了~~一直拖延到现在哈哈哈~~\n因为婚礼是在过年期间办的，拉拉人没凑上九人团稍有些可惜，但还是谢谢玉珉和小妖陪我跳了勾指起誓~~婚礼上出现两只小樱我也太幸福啦哈哈哈~~",
          "duration": "186",
          "pic": "http://i1.hdslb.com/bfs/archive/d03c99153652ffbdd49c2bf6c02e43b4f2dc6348.jpg",
          "stat": {
            "aid": "553242922",
            "coin": "73939",
            "danmaku": "6808",
            "favorite": "20408",
            "like": "183145",
            "reply": "5557",
            "share": "6001",
            "view": "2189022"
          },
          "tid": "20",
          "title": "【勾指起誓】在自己的婚礼上跳宅舞是一种什么样的体验？"
        },
        {
          "bvid": "BV19Y4y147FM",
          "desc": "终于有了第一次了！希望可以和大家一起继续走下去~\n摄影：@Aki秋穆  \n舞见：\n小千：不愿透露姓名的发面馒头  \n香音：@梦羽丶yume  \n堇：@桥本班班  \n恋：@星辰是九种颜色  \n可可：@wu传说 \n后期:@wu传说 \n\n参考视频\nBV1Hq4y1B7yU  \n感谢@妙尘- 的多机位视频\nLiella演唱会",
          "duration": "237",
          "pic": "http://i0.hdslb.com/bfs/archive/81b5aba25eb7a49a608335cffea23e5289d8d243.jpg",
          "stat": {
            "aid": "641586195",
            "coin": "21",
            "danmaku": "12",
            "favorite": "15",
            "like": "40",
            "reply": "14",
            "share": "10",
            "view": "326"
          },
          "tid": "20",
          "title": "初投稿 ♪START!! True dreams♪【N.Elf舞团】【BDF2022 青岛赛区】"
        },
        {
          "bvid": "BV16F411T7Ca",
          "desc": "-将我甜蜜的心意送给你 请收下吧！！(｡•﹃•｡)❤️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nどりーみんチュチュ emon (Tes.) / 巡音ルカ / 初音ミク - どりーみんチュチュ\n舞蹈：七河みこ Arimaasu KiSweets",
          "duration": "250",
          "pic": "http://i1.hdslb.com/bfs/archive/71819bc0da48c20bd59ad3f6c169d69b12cdc3b6.jpg",
          "stat": {
            "aid": "298694380",
            "coin": "529",
            "danmaku": "135",
            "favorite": "3796",
            "like": "4462",
            "reply": "118",
            "share": "64",
            "view": "40400"
          },
          "tid": "20",
          "title": "【咖纳】竖屏元气宅舞！Dreaming Chuchu~❤️ヾ(≧▽≦*)o"
        }
      ],
    }
  },
  methods: {
    play(video) {
      player(this, video)
    }
  }
}
</script>
<style scoped>
.a-re {
  padding-left: 5px;
  position: relative;
  top: -25px
}
.re-desc{
  max-width: 230px;
}

#re {
  text-align: left;
}

.re-pic {
  width: 140px;
  height: 80px;
}

#video-info a {
  font-weight: lighter;
  padding-left: 20px;
  font-size: 10px;
}

#re-tittle {
  height: 68px;
}

#lb-player {
  margin-top: 15px;
}

#describe {
  text-align: left;
}

img {
  width: 100%;
  height: 100%;
}

#frame {
  width: 1055px;
  height: 680px;
}

#player-area {
  width: 1050px;
}

#recommend-area {
  vertical-align: top;
  margin-left: 20px;
  width: 400px;
  height: 750px;
  overflow: scroll;
}

h2 {
  text-align: left;
  font-weight: lighter;
  margin-left: 10px;
}

#video-info {
  text-align: left;
  margin: 10px 0;
}
</style>
