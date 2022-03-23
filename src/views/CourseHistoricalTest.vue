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
        <div v-if="question.questionStyle === '单选题' || question.questionStyle === '判断题'">
          <el-radio-group v-if="question.questionStyle === '单选题'" v-model="answers[index]" style="margin-top: 15px; margin-left: 20px" :disabled="disable">
            <el-radio class="radio-bottom" label="A">A.{{ question.questionAnswerA }}</el-radio><br>
            <el-radio class="radio-bottom" label="B">B.{{ question.questionAnswerB }}</el-radio><br>
            <el-radio class="radio-bottom" label="C">C.{{ question.questionAnswerC }}</el-radio><br>
            <el-radio class="radio-bottom" label="D">D.{{ question.questionAnswerD }}</el-radio>
          </el-radio-group>
          <el-radio-group v-if="question.questionStyle === '判断题'" v-model="answers[index]" style="margin-top: 15px; margin-left: 20px" :disabled="disable">
            <el-radio class="radio-bottom" label="A">A.{{ question.questionAnswerA }}</el-radio><br>
            <el-radio class="radio-bottom" label="B">B.{{ question.questionAnswerB }}</el-radio>
          </el-radio-group>
          <el-card :class="answers[index] === question.questionAnswer ? success_card : fail_card" shadow="never" >
            <div style="margin-bottom: 10px">
              <span>正确答案：</span>{{ question.questionAnswer }}
              <span class="question-content" style="margin-bottom: 10px">你的选择是：</span>
              <i style="font-size: 14px" v-if="answers[index] != null">{{ answers[index] }}</i>
              <i style="font-size: 14px" v-else>你没有选择任何选项</i>
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
          <el-card :class="isCorrect(list[index], question.questionAnswer) ? success_card : fail_card" shadow="never" >
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
    </el-card>
    <el-dialog
        title="测试成绩"
        :visible.sync="scoreVisible"
        width="35%">
      <strong>你的分数为： </strong>{{ score }}<br><br>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CourseHistoricalTest",
  props: ["testId"],
  data(){
    return{
      questionList: [],
      answers: [],
      list: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
      fail_card: "box-card fail-card",
      success_card: "box-card success-card",
      isCorrectAnswer: false,
      score: 0,
      disable: true,
      scoreVisible: false,
      testTitle: "",
    }
  },
  created() {
    let that = this;
    axios({
      url: "http://localhost:9090/loadHistoricalTestByTestId",
      params:{
        testId: this.testId,
      }
    }).then(function (response) {
      that.questionList = response.data.questionList;
      that.testTitle = response.data.testTitle;
      let arraylist = response.data.testAnswerList.split(",");
      let i = 0;
      for (; i < 15; i++){
        that.answers[i] = arraylist[i];
      };
      for (; i < 20; i++){
        that.list[i] = arraylist[i].split("");
      };
    })
  },
  methods: {
    isCorrect(answers, questionAnswers){
      const questionList = questionAnswers.split(",");
      const answerList = answers.slice();
      const res =  questionList.sort().toString() === answerList.sort().toString()
      return res;
    },
    setScoreVisible(){
      this.scoreVisible = true
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