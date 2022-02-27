<template>
  <div>
    <el-card class="box-card" style="width: 60%; margin-left: 20%; margin-top: 20px">
      <p style="text-align: center; font-size: 22px"><b>所罗门性格测试</b></p>
      <div v-for="(question, index) in questions" class="text item" :key="question.natureTestId"
           style="margin-bottom: 10px;margin-left: 5px">
        <span>{{ question.natureTest }}</span>
        <br>
        <el-radio-group v-model="answers[index]">
          <el-radio label="a">{{ question.optionA }}</el-radio>
          <el-radio label="b">{{ question.optionB }}</el-radio>
        </el-radio-group>
      </div>
      <el-button @click="onSubmit"  type="primary" style="margin-left: 45%" >
        提交
      </el-button>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "test",
  props: ["userName"],
  data () {
    return {
      answers: [],
      radio: 1,
      questions : [],
      style: "",
      styleShape: "",
      styleName: "",
      styleDes: "",
    };
  },
  created() {
    const that = this;
    console.log(this.userName)
    axios({
      url: "http://localhost:9090/loadNatureTest",
      method: "get",
    }).then(function (response) {
      that.questions = response.data;
    });
    this.$message({
      message: '请先完善性格测试，即可开启个性化推荐内容！',
      showClose: true,
      type: 'success',
    });
  },
  methods: {
    checkAnswers(){
      return (this.answers.length === 44)
    },
    onSubmit: function () {
      const that = this;
      //这里注释了用户的判断是否将问题都选择
      if (true){
        axios({
          url:"http://localhost:9090/updateNatureTest",
          method: "post",
          data: {
            answers : this.answers,
            userName : this.userName,
          }
        }).then(function (response) {
          that.styleShape = response.data.styleShape;
          that.styleName = response.data.styleName;
          that.styleDes = response.data.styleDes;
          that.$alert(
              '<strong>你的性格分析结果为： </strong><i>' + that.styleName + '</i>'
              + '<br><br>'
              + that.styleDes
              , '性格分析结果', {
            dangerouslyUseHTMLString: true
          });
        });
      } else {
        this.$message({
          message: '您还有没有填完的选项，请完善您的答案！',
          showClose: true,
          type: 'warning',
        })
      };
    },
  }
}
</script>

<style scoped>

</style>