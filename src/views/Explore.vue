<template>
  <div id="lb-explore">
    <div id="top">
      <div id="sidebar" v-bind:style="{ left: $store.state.per}">
        <div id="sidebar-bt" class="s-h" @click="drawer = true">
          <el-link :underline="false" icon="el-icon-menu"></el-link>
          <el-link :underline="false">分区</el-link>
        </div>
        <el-drawer
            title="视频分区"
            :size="150"
            :visible.sync="drawer">
          <div id="partition">
            <div class="pt pt-top" @click="goAnchor('lb-header')">
              <el-link :underline="false" icon="el-icon-arrow-up"></el-link>
            </div>
            <div class="pt" v-for="item in $store.state.explore" @click="goAnchor(item.url)">
              <el-link :underline="false">{{ item.name }}</el-link>
            </div>
            <div class="pt pt-top" @click="goAnchor('lb-footer')">
              <el-link :underline="false" icon="el-icon-arrow-down"></el-link>
            </div>
          </div>
        </el-drawer>
        <div id="up" class="s-h" @click="goAnchor('lb-header')">
          <el-link :underline="false" icon="el-icon-arrow-up"></el-link>
          <el-link :underline="false">顶部</el-link>
        </div>
        <div id="down" class="s-h" @click="goAnchor('lb-footer')">
          <el-link :underline="false">底部</el-link>
          <el-link :underline="false" icon="el-icon-arrow-down"></el-link>
        </div>
      </div>
    </div>
    <LBItem v-for="it in $store.state.all_items" v-bind:item_info="it" :id="it.url"></LBItem>
  </div>
</template>

<script>
import {main_video} from "@/js/common";
import {player} from "@/js/common";
import LBItem from "@/views/Item";

export default {
  name: "Explore",
  components: {LBItem},
  data() {
    return {
      videos: '',
      drawer: false,
    }
  },
  methods: {
    load_videos: function () {
      main_video(this)
    },
    play: function (video) {
      player(this, video)
    },
    goAnchor: function (id) {
      let anchor = document.getElementById(id);
      anchor.scrollIntoView();
    },
  },
  mounted() {
    this.load_videos()
  },
}
</script>

<style scoped>

#lb-explore {
  margin-top: -35px;
  margin-left: -7px;
}

.s-h:hover {
  background-color: #e3e5e7;
}

#sidebar {
  position: absolute;
  top: 50%;
  left: 93%;
}

#sidebar-bt {
  position: fixed;
  text-align: center;
  width: 40px;
  border: 1px solid #606266;
  border-radius: 5px;
}

#up {
  text-align: center;
  position: fixed;
  width: 40px;
  top: 57%;
  border: 1px solid #606266;
  border-radius: 5px;
}

#down {
  text-align: center;
  position: fixed;
  width: 40px;
  top: 83%;
  border: 1px solid #606266;
  border-radius: 5px;
}

.pt {
  margin-top: 5px;
  margin-left: 5px;
  padding-top: 10px;
}

.pt-top {
  position: relative;
  left: -2px;
}

#refresh a {
  position: relative;
  left: 9px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 3%;
}

</style>
