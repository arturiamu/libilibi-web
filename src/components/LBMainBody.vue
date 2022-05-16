<template>
  <div id="main-body">
    <LBHeader></LBHeader>
    <RouterView></RouterView>
    <LBFooter></LBFooter>
  </div>
</template>
<script>
import LBHeader from "@/components/LBHeader";
import LBFooter from "@/components/LBFooter";
import LBHome from "@/views/LBHome";


export default {
  name: "MainBody",
  components: {LBHeader, LBFooter, LBHome}
}
</script>


<style scoped>
#main-body {
  width: 1630px;
  margin: 0 auto;
}
</style>
