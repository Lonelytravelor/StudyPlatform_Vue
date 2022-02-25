<template>
  <div>
    <el-card class="box-card">
      <div v-for="(question, index) in questions"  class="text item">
        <span>{{ question.natureTest }}</span>
        <br>
        <el-radio-group @change="hello" v-model="index">
          <el-radio :label="question.optionA" ></el-radio>
          <el-radio :label="question.optionB" ></el-radio>
        </el-radio-group>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "test",
  data () {
    return {
      radio: 1,
      questions : [],
    };
  },
  created() {
    const that = this;
    axios({
      url: "http://localhost:9090/loadNatureTest",
      method: "get",
    }).then(function (response) {
      that.questions = response.data;
      console.log(response.data)
    })
  },
  methods: {
    onSubmit: function () {
      console.log(this.questions)
    },
    hello:function (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>