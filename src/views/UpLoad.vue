<template>
  <div>
    <el-form>
      <el-form-item label="用户头像">
        <!-- 头衔缩略图 -->
        <div>
          <el-avatar :src="user.avatar" size="large"></el-avatar>
        </div>
        <!-- 文件上传按钮 -->
        <el-button type="primary" icon="el-icon-upload" @click="imagecropperShow=true">更换头像
        </el-button>

        <image-cropper
            v-show="imagecropperShow"
            :width="300"
            :height="300"
            :key="imagecropperKey"
            :url="imagepath"
            field="file"
            @close="close"
            @crop-upload-success="cropSuccess"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
import {httpPost} from "@/js/https";

export default {
  components: {ImageCropper}, // 加载components 的组件
  name: "UpLoad",
  data() {
    return {
      user: {
        avatar: 'https://libilibi-host.oss-cn-hangzhou.aliyuncs.com/C20F8AB57A4264C161BD8B3DEF236E20.png'
      },
      // 上传头像需要的参数-0·
      imagecropperShow: false, // 是否显示上传组件
      imagecropperKey: 0,  // 上传组件id ，要变化
      // imagepath: 'http://adastra.isamumu.cn:8160/avatar/ossfile'
      imagepath: 'http://localhost:8160/avatar/ossfile'
      // imagepath: 'http://10.1.188.121:8160/avatar/ossfile'
    }
  },
  methods: {
    // 上传成功后的回调函数
    cropSuccess(data) {
      this.$store.dispatch("ch_avatar", data)
      httpPost("/avatar/updateAvatar", {
        url: data
      }).then(resp => {
        console.log(resp)
      })
      this.imagecropperShow = false
      //this.user.avatar = data.url
      // 上传成功后，重新打开上传组件时初始化组件，否则显示上一次的上传结果
      this.imagecropperKey = this.imagecropperKey + 1
    },
    // 关闭上传组件
    close() {
      this.imagecropperShow = false
      // 上传失败后，重新打开上传组件时初始化组件，否则显示上一次的上传结果
      this.imagecropperKey = this.imagecropperKey + 1
    }
  }
}
</script>

<style scoped>

</style>
