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
          <el-card :class="answers[index] === question.questionAnswer ? success_card : fail_card" v-if="isSubmit" shadow="never" >
            <div style="margin-bottom: 10px">
              <span>正确答案：</span>{{ question.questionAnswer }}
              <span class="question-content" style="margin-bottom: 10px">你的选择是：{{ answers[index] }}</span>
            </div>
            <div class="question-content">
              <span>所属知识点：
                <el-link @click="loadPrePoint(question.questionPoint)"> {{ question.questionPoint }}</el-link>
              </span><br>
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
              <span>所属知识点：
                <el-link @click="loadPrePoint(question.questionPoint)"> {{ question.questionPoint }}</el-link>
              </span><br>
              <span>答案解析：{{ question.questionAnswerExplain }}</span>
            </div>
          </el-card>
        </div>
      </div>
      <el-button @click="onSubmit"  type="primary" style="margin-left: 40%; margin-top: 20px; width: 20%" v-show="!disable">
        提交
      </el-button>
    </el-card>
    <el-dialog
        title="测试成绩"
        :visible.sync="scoreVisible"
        width="35%">
      <strong>你的分数为： </strong>{{ score }}<br><br>
    </el-dialog>
    <el-dialog :visible.sync="pointVisible">
      <div class="block">
        <el-timeline>
          <el-timeline-item v-for="(point, index) in points" :key="point.id">
            <span style="font-size: 16px">第{{ index+1 }}节 {{ point.name }}</span>
            <div style="margin-left: 15px">
              <div v-for="(point1, index) in point.nextPoints" :key="point1.id">
                <div v-for="video in point1.videoList">
                  <i class="el-icon-video-play" style="margin-right: 4px"></i>
                  <el-link @click="ToCourseWare(point1.name, video)" style="font-size: 15px">{{ point1.name }}</el-link>
                </div>
                <div v-for="file in point1.fileList">
                  <i class="el-icon-document-remove" style="margin-right: 4px"></i>
                  <el-link @click="ToCourseWare(point1.name, file)" style="font-size: 15px">{{ point1.name }}</el-link>
                </div>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-dialog>
    <el-button @click="loadPrePoint">
      hereeeeeeeeee
    </el-button>
  </div>
</template>

<script>
import axios from "axios";
import test from "@/views/test";
import router from "@/router";

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
      disable: false,
      scoreVisible: false,
      pointVisible: false,
      testId: -1,
      points: [],
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
      that.testId = response.data.testId;
      if ( response.data.testState === "已完成" ){
        let arraylist = response.data.testAnswerList;
        let i = 0;
        for (; i < 15; i++){
          that.answers[i] = arraylist[i];
        };
        for (; i < 20; i++){
          that.list[i] = arraylist[i].split();
        }
        that.setDisable();
      }
    })
  },
  methods: {
    onSubmit() {
      if (this.isNotEmpty()){
        this.isSubmit = true;
        this.initScore();
        this.compileScope();
        this.setDisable();
        console.log("你的分数是：" + this.score)
        this.setScoreVisible();
        this.resultSubmit()
      }else {
        this.$message({
          message: '您还有没有填完的选项，请完善您的答案！',
          showClose: true,
          type: 'warning',
        })
      }
    },
    resultSubmit(){
      let that = this;
      axios({
        url: "http://localhost:9090/submitTest",
        method: "post",
        data:{
          testId: this.testId,
          testScore: this.score,
          singleAnswers: this.answers,
          multipleAnswers: this.list,
        }
      })
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
        if (questionList[i].questionStyle === '单选题' || questionList[i].questionStyle === '判断题'){
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
    isNotEmpty(){
      let res = true;
      for (let i = 0; i <15; i++) {
        if (this.answers[i] == null) {
          return false;
        }
      }
      for (let i = 15; i < this.list.length; i++){
        if (this.list[i].length === 0 ){
          return false;
        }
      }
      return res;
    },
    initScore(){
      this.score = 0;
    },
    setDisable(){
      this.disable = true;
    },
    setScoreVisible(){
      this.scoreVisible = true
    },
    loadPrePoint(point) {
      this.pointVisible = true;
      let that = this;
      axios({
        url: "http://localhost:9090/loadPrePoint",
        params:{
          point: point,
        }
      }).then(function (response) {
        that.points = response.data;
      })
      that.pointVisible = true;
    },
    ToCourseWare(name, file) {
      router.push('/CourseWare/' + name + '/' + file);
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