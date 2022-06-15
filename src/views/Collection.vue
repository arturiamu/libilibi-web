<template>
  <div id="collection">
    <div id="nav">
      <el-row class="tac">
        <el-col :span="12">
          <div id="collectiontitle">
            <h4>我的创建</h4>
          </div>
          <el-menu
              default-act ive="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
            <div id="addCollection">
              <el-button icon="el-icon-circle-plus-outline" type="primary">新建收藏夹</el-button>
            </div>
            <div id="default">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>默认收藏夹</span>
                </template>
              </el-submenu>
            </div>
            <div id="createdCollection">
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-folder-add"></i>
                  <span>创建的收藏夹</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">xx收藏夹</el-menu-item>
                  <el-menu-item index="1-2">xx收藏夹</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </div>
          </el-menu>
        </el-col>
        <el-col :span="12">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collection",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
#nav {
  margin-left: 20px;
  width: 50%;
}

#collectiontitle {
  padding-top: 40px;
}

#addCollection {
  padding-top: 20%;
}

#default {
  padding-top: 20%;

}

#createdCollection {
  padding-top: 20%;

}

</style>
