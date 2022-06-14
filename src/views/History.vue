<template>
  <div id="login">
    历史记录
  </div>
</template>

<script>
import {httpGet} from "@/js/https";

export default {
  name: "History",
  mounted() {
    if (this.$store.state.user.id) {
      httpGet("/history/get/10").then(data=>{
        console.log(data)
      })
    }
  }
}
</script>

<style scoped>

</style>
