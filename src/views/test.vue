<template>
  <div>
    <el-card class="box-card">
      <div v-for="(question, index) in questions" class="text item" :key="question.natureTestId">
        <span>{{ question.natureTest }}</span>
        <br>
        <el-radio-group v-model="answers[index]">
          <el-radio label="a">{{ question.optionA }}</el-radio>
          <el-radio label="b">{{ question.optionB }}</el-radio>
        </el-radio-group>
      </div>
    </el-card>
    <el-button @click="onSubmit">
      提交
    </el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "test",
  data () {
    return {
      answers: [],
      radio: 1,
      questions : [],
      style: "",
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
      axios({
        url:"http://localhost:9090/updateNatureTest",
        method: "post",
        data: {
          answers : this.answers
        }
      })
    }
  }
}
</script>

<style scoped>

</style>