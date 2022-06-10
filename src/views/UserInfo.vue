<template>
  <div>
    <div id="popover-root">
      <div id="qq" class="share-sub inl" @click="share('qq')">
        <div class="share-pic">
          <img src="../assets/qq.png">
        </div>
        <div>
          <el-link :underline="false" type="primary">QQ空间</el-link>
        </div>
      </div>
      <div id="weibo" class="share-sub inl" @click="share('weibo')">
        <div class="share-pic">
          <img src="../assets/weibo.png">
        </div>
        <div>
          <el-link :underline="false" type="primary">微博</el-link>
        </div>
      </div>
      <div id="facebook" class="share-sub inl" @click="share('facebook')">
        <div class="share-pic">
          <img src="../assets/facebook.png">
        </div>
        <div>
          <el-link :underline="false" type="primary">facebook</el-link>
        </div>
      </div>
      <div id="twitter" class="share-sub inl" @click="share('twitter')">
        <div class="share-pic">
          <img src="../assets/twitter.png">
        </div>
        <div>
          <el-link :underline="false" type="primary">twitter</el-link>
        </div>
      </div>
      <div id="linkedin" class="share-sub inl" @click="share('linkedin')">
        <div class="share-pic">
          <img src="../assets/linkedin.png">
        </div>
        <div>
          <el-link :underline="false" type="primary">linkedin</el-link>
        </div>
      </div>
      <div id="pinterest" class="share-sub inl" @click="share('pinterest')">
        <div class="share-pic">
          <img src="../assets/pinterest.png">
        </div>
        <div>
          <el-link :underline="false" type="primary">pinterest</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserInfo",
}
</script>

<style scoped>
#popover-root {
  width: 400px;
  display: flex;
  justify-content: space-between;
}

.share-pic{
  margin: 0 auto;
  width: 40px;
  height: 40px;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>
