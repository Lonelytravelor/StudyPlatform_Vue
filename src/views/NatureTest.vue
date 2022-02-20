<template>
  <el-radio-group v-model="radio" @change="hello">
    <el-radio label="1">备选项</el-radio>
    <el-radio label="2">备选项</el-radio>
  </el-radio-group>
</template>

<script>
import axios from "axios";

export default {
  name: "NatureTest",
  data(){
    return{
      questions:[],
    }
  },
  created() {
    const that = this;
    axios({
      url: "http://localhost:9090/loadNatureTest",
      method: "get",
    }).then(function (response) {
      that.questions = response.data;
    })
  },
  methods:{
    hello:function () {
      console.log("hello")
    }
  }
}
</script>

<style scoped>

</style>