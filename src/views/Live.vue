<template>
  <div tabindex="0" id="live">
    <div id="tip">
      <el-link :underline="false" type="primary">
        播放提示：直播区域内滚动鼠标切换直播，两侧白边滚动鼠标移动页面，按ESC返回主页面
      </el-link>
    </div>
    <div id="frame">
      <iframe id="lb-frame" v-bind:src="src + videos[i].roomid"
              allowfullscreen="allowfullscreen" width="100%" height="100%" allow="autoplay"
              scrolling="no" frameborder="no" framespacing="0" border="0"
              sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
      >您的浏览器不支持iframe，请升级或更换浏览器
      </iframe>
      <div id="mark">
      </div>
    </div>
  </div>
</template>

<script>
import {live_video} from '@/js/common'

export default {
  name: "Live",
  created() {
    live_video(this)
  },
  mounted() {
    let that = this
    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        that.$router.push('/')
      }
    })
  },
  updated() {
    document.getElementById('tip').scrollIntoView();
    document.getElementById("mark").addEventListener('mousewheel', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      e.preventDefault()
      let direction = e.deltaY > 0 ? 'down' : 'up';  //deltaY为正则滚轮向下，为负滚轮向上
      if (direction === 'down') {
        if (this.i < 11) {
          this.i += 1
        } else {
          live_video(this)
        }
      } else {
        if (this.i > 1) {
          this.i -= 1
        } else {
          this.i = 11
        }
      }
    },
  },
  data() {
    return {
      src: 'https://www.bilibili.com/blackboard/live/live-activity-player.html?quality=1&cid=',
      i: 0,
      videos: ''
    }
  }
}
</script>

<style scoped>

#frame {
  width: 100%;
  height: 917px;
  overscroll-behavior: contain
}

#mark {
  width: 100%;
  height: 750px;
  position: relative;
  top: -100%;
  /*background-color: rgba(238, 91, 122, 0.38);*/
}
</style>
