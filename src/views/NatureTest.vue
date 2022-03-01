<template>
  <div>
    <el-card class="box-card" style="width: 60%; margin-left: 20%; margin-top: 20px">
      <p style="text-align: center; font-size: 26px"><b>所罗门性格测试</b></p>
      <div v-for="(question, index) in questions" class="text item" :key="question.natureTestId"
           style="margin-bottom: 10px;margin-left: 10px">
        <span>{{ question.natureTest }}</span>
        <br>
        <el-radio-group v-model="answers[index]">
          <el-radio label="a">{{ question.optionA }}</el-radio>
          <el-radio label="b">{{ question.optionB }}</el-radio>
        </el-radio-group>
      </div>
      <el-button @click="onSubmit"  type="primary" style="margin-left: 40%; margin-top: 20px; width: 20%" >
        提交
      </el-button>
    </el-card>
    <el-dialog
        title="性格分析结果"
        :visible.sync="centerDialogVisible"
        width="35%">
      <strong>你的性格分析结果为： </strong>
      {{ styleName }}<br><br>
      <i>{{ styleDes[0] }}</i>
      <i>{{ styleDes[1] }}</i><br>
      <i>{{ styleDes[2] }}</i><br>
      <i>{{ styleDes[3] }}</i><br><br><br>
      您可以在个人中心中重新测试，以便我们可以更好地了解您。
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="toIndex">转到首页 <i class="el-icon-right"></i></el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/vuex/store";

export default {
  name: "NatureTest",
  store,
  data () {
    return {
      centerDialogVisible: false,
      answers: [],
      radio: 1,
      questions : [],
      style: "",
      styleShape: "",
      styleName: "",
      styleDes: [],
    };
  },
  created() {
    const that = this;
    console.log(this.$store.state.userName)
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
    toIndex(){
      this.centerDialogVisible = false;
      this.$router.push('/');
    },
    onSubmit: function () {
      const that = this;
      //这里注释了用户的判断是否将问题都选择
      if ( this.centerDialogVisible ){
        axios({
          url:"http://localhost:9090/updateNatureTest",
          method: "post",
          data: {
            answers : this.answers,
            userName : that.$store.state.userName,
          }
        }).then(function (response) {
          that.styleShape = response.data.styleShape;
          that.styleName = response.data.styleName;
          that.styleDes = response.data.styleDes.split("。");
          that.centerDialogVisible = true;
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