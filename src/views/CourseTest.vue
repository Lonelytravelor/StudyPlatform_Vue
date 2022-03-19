<template>
  <div>
    <el-card class="box-card">
      <p style="text-align: left; margin-left: 10px; margin-bottom: 40px;font-size: 18px">{{ testTitle }}</p>
      <div v-for="(question, index) in questionList" class="text item" :key="question.natureTestId"
           style="margin-bottom: 15px;margin-left: 10px">
        <span style="font-size: 22px">{{ index+1 }}</span>
        <el-tag style="margin-left: 15px; margin-right: 5px" size="mini" effect="dark">{{ question.questionStyle }}</el-tag>
        <span>{{ question.questionContent }}</span>
        <br>
        <el-radio-group v-model="answers[index]" style="margin-top: 15px; margin-left: 20px">
          <el-radio class="radio-bottom" label="A">{{ question.questionAnswerA }}</el-radio><br>
          <el-radio class="radio-bottom" label="B">{{ question.questionAnswerB }}</el-radio><br>
          <el-radio class="radio-bottom" label="C">{{ question.questionAnswerC }}</el-radio><br>
          <el-radio class="radio-bottom" label="D">{{ question.questionAnswerD }}</el-radio>
        </el-radio-group>
      </div>
      <el-button @click="onSubmit"  type="primary" style="margin-left: 40%; margin-top: 20px; width: 20%" >
        提交
      </el-button>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import test from "@/views/test";

export default {
  name: "CourseTest",
  props: ["testTitle"],
  data(){
    return{
      questionList: [],
      testTitle: "",
      answers: [],
    }
  },
  created() {
    let that = this;
    axios({
      url: "http://localhost:9090/createTest",
      params:{
        title: this.testTitle,
        userId: this.$store.state.userId
      }
    }).then(function (response) {
      that.questionList = response.data.questionList;
      that.testTitle = response.data.testTitle;
    })
  }
}
</script>

<style scoped>
.radio-bottom{
  margin-bottom: 5px;
}
</style>