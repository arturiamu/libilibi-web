<template>
  <div id="lb-footer">
    <div v-for="i in infos">
      <el-link :underline="false">{{ i }}</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LBFooter",
  data() {
    return {
      infos: [
        "Copyright © 2020 - " + new Date().getFullYear() + " ArturiaMu All Rights Reserved",
        "滇ICP备2020010134号-1",
        "本网站提供的资源均系收集于bilibili视频网站，本网站只提供web页面服务，并不提供影片资源存储，也不参与录制、上传",
        "若本站收录的资源无意侵犯了贵司版权，请给网页底部邮箱地址来信，我们会及时处理和回复，谢谢！",
        "arturiamumu@gmail.com 1743089727@qq.com",
      ],
    }
  },
}
</script>

<style scoped>
#lb-footer {
  text-align: center;
  border-top: 2px solid #e36666;
  margin-top: 30px;
}
</style>
