<template>
  <div style="margin-right: 15%;">
    <el-card class="box-card">
      <p style="text-align: left; margin-left: 10px; margin-bottom: 40px;font-size: 18px">{{ testTitle }}</p>
      <div v-for="(question, index) in questionList" class="text item" :key="question.natureTestId"
           style="margin-bottom: 15px;margin-left: 10px">
        <div style="width: 60%">
          <span style="font-size: 22px">{{ index+1 }}</span>
          <el-tag style="margin-left: 15px; margin-right: 5px" size="mini" effect="dark">{{ question.questionStyle }}</el-tag>
          <span style="font-size: 14px; margin-right: 10px">({{ question.questionScore }}分)</span>
          <span>{{ question.questionContent }}（&nbsp;）</span>
        </div>
        <div v-if="question.questionStyle === '单选题'">
          <el-radio-group v-model="answers[index]" style="margin-top: 15px; margin-left: 20px" :disabled="disable">
            <el-radio class="radio-bottom" label="A">A.{{ question.questionAnswerA }}</el-radio><br>
            <el-radio class="radio-bottom" label="B">B.{{ question.questionAnswerB }}</el-radio><br>
            <el-radio class="radio-bottom" label="C">C.{{ question.questionAnswerC }}</el-radio><br>
            <el-radio class="radio-bottom" label="D">D.{{ question.questionAnswerD }}</el-radio>
          </el-radio-group>
          <el-card :class="answers[index] === question.questionAnswer ? success_card : fail_card" v-if="isSubmit" shadow="never" >
            <div style="margin-bottom: 10px">
              <span>正确答案：</span>{{ question.questionAnswer }}
              <span class="question-content" style="margin-bottom: 10px">你的选择是：{{ answers[index] }}</span>
            </div>
            <div class="question-content">
              <span>所属知识点：{{ question.questionPoint }}</span><br>
              <span>答案解析：{{ question.questionAnswerExplain }}</span>
            </div>
          </el-card>
        </div>
        <div v-else-if="question.questionStyle === '多选题'">
          <el-checkbox-group v-model="list[index]" style="margin-top: 15px; margin-left: 20px" :disabled="disable">
            <el-checkbox class="radio-bottom" label="A">A.{{ question.questionAnswerA }}</el-checkbox><br>
            <el-checkbox class="radio-bottom" label="B">B.{{ question.questionAnswerB }}</el-checkbox><br>
            <el-checkbox class="radio-bottom" label="C">C.{{ question.questionAnswerC }}</el-checkbox><br>
            <el-checkbox class="radio-bottom" label="D">D.{{ question.questionAnswerD }}</el-checkbox>
          </el-checkbox-group>
          <el-card :class="isCorrect(list[index], question.questionAnswer) ? success_card : fail_card" v-if="isSubmit" shadow="never" >
            <div style="margin-bottom: 10px">
              <span>正确答案：</span>{{ question.questionAnswer }}
              <span class="question-content">你的选择是：</span>
              <span class="question-content" v-for="selected in list[index]">{{ selected }}</span>
            </div>
            <div class="question-content">
              <span>所属知识点：{{ question.questionPoint }}</span><br>
              <span>答案解析：{{ question.questionAnswerExplain }}</span>
            </div>
          </el-card>
        </div>
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
      answers: [],
      isSubmit: false,
      list: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
      fail_card: "box-card fail-card",
      success_card: "box-card success-card",
      isCorrectAnswer: false,
      score: 0,
      disable: false
    }
  },
  created() {
    let that = this;
    axios({
      url: "http://localhost:9090/createTest",
      params:{
        title: this.testTitle,
        userId: this.$store.state.userId,
        courseId: this.$store.state.courseId,
      }
    }).then(function (response) {
      that.questionList = response.data.questionList;
    })
  },
  methods: {
    onSubmit() {
      this.isSubmit = true;
      this.initScore();
      this.compileScope();
      this.setDisable();
      console.log("你的分数是：" + this.score)
    },
    isCorrect(answers, questionAnswers){
      const questionList = questionAnswers.split(",");
      const answerList = answers.slice();
      const res =  questionList.sort().toString() === answerList.sort().toString()
      return res;
    },
    compileScope() {
      let questionList = this.questionList.slice();
      let answerSingleList = this.answers.slice();
      let answerMultipleList = this.list.slice();
      for (let i = 0; i < questionList.length; i++){
        if (questionList[i].questionStyle === '单选题'){
          if (questionList[i].questionAnswer === answerSingleList[i]){
            this.score += questionList[i].questionScore;
          }
        }else if (questionList[i].questionStyle === '多选题'){
          if (this.isCorrect(answerMultipleList[i], questionList[i].questionAnswer)){
            this.score += questionList[i].questionScore;
          }
        }
      }
    },
    initScore(){
      this.score = 0;
    },
    setDisable(){
      this.disable = true;
    }
  }
}
</script>

<style scoped>
.radio-bottom{
  margin-bottom: 5px;
}
.success-card{
  width: 60%;
  border-radius: 0px;
  border-color: #e1f2d8;
  background-color: #f0f9eb;
}
.fail-card{
  width: 60%;
  border-radius: 0px;
  border-color: #f6bbbb;
  background-color: #fff3f3;
}
.question-content{
  font-size: 14px
}
</style>