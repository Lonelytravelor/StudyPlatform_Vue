<template>
  <div>
    <el-image :src="url1"></el-image>
    <el-image :src="url2"></el-image>
  </div>
</template>

<script>
import store from '../vuex/store'
import axios from "axios";
export default {
  name: "test",
  store,
  data() {
    return {
      url1: "http://localhost:9090/courseImage/image.png",
      url2: "http://localhost:9090/courseImage/10009.png",
    }
  },
  created() {
    const that =this;
    axios({
      url: "http://localhost:9090/image"
    }).then(function (response) {
      // that.url = response.data;
    })
  }
}
</script>

<style scoped>

</style>