<template>
  <div>
    <el-image :src="url"></el-image>
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
      url: "",
    }
  },
  created() {
    const that =this;
    axios({
      url: "http://localhost:9090/image"
    }).then(function (response) {
      that.url = response.data;
    })
  }
}
</script>

<style scoped>

</style>