<template>
  <div id="app">
    <MainBody></MainBody>
  </div>
</template>

<script>
import MainBody from "@/components/MainBody";
import {httpGet} from "@/js/https";

export default {
  name: 'App',
  components: {MainBody},
  methods: {
    ch_sc(w) {
      console.log(w)
      if (w > 1600 && w < 1700) {
        document.body.style.zoom = '0.85'
        this.$store.dispatch('ch_per', '92%')
      } else if (w > 1500 && w < 1600) {
        document.body.style.zoom = '0.75'
        this.$store.dispatch('ch_per', '91%')
      } else if (w > 1400 && w < 1500) {
        document.body.style.zoom = '0.65'
        this.$store.dispatch('ch_per', '90%')
      } else if (w > 1200 && w < 1300) {
        document.body.style.zoom = '0.65'
        this.$store.dispatch('ch_per', '93%')
      } else if (w > 1100 && w < 1200) {
        document.body.style.zoom = '0.55'
        this.$store.dispatch('ch_per', '89%')
      }
    }
  },
  mounted() {
    let tip_time = localStorage.getItem("tip_time")
    let now = Date.now()
    if (now - tip_time > 5 * 24 * 60 * 60 * 1000) {
      this.$confirm('若页面显示异常，请尝试缩放页面', '提示', {
        confirmButtonText: '下次不在提示',
        cancelButtonText: '我知道了',
        type: 'warning',
        center: true
      }).then(() => {
        localStorage.setItem("tip_time", Date.now().toString())
      }).catch(() => {
      });
    }
    httpGet("/user/isLogin").then(data => {
      let that = this
      if (data.state === 200) {
        that.$store.dispatch("ch_user", data.data)
        httpGet("/category/selectByCategory").then(resp => {
          if (resp.state === 200) {
            that.$store.dispatch("ch_favorites", resp.data)
          }
        })
        httpGet("/user/isVip").then(resp => {
          if (resp.state === 200) {
            that.$store.dispatch("ch_vip", resp.data)
          }
        })
        httpGet("/avatar/getAvatar").then(resp => {
          if (resp.state === 200) {
            that.$store.dispatch("ch_avatar", resp.data)
          }
        })
      }
    })
    httpGet("/item/all").then(data => {
      if (data.state === 200) {
        this.$store.dispatch("ch_all_items", data.data)
      }
    })
    httpGet("/item/default").then(data => {
      if (data.state === 200) {
        this.$store.dispatch("ch_default_items", data.data)
        if (!this.$store.state.user.id) {
          this.$store.dispatch("ch_user_items", data.data)
        }
      }
    })

    let w = document.body.clientWidth
    this.ch_sc(w)
    let that = this
    window.onresize = () => {
      return (() => {
        w = document.body.clientWidth
        if (w < 1920) {
          that.ch_sc(w)
        }
      })();
    };
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
