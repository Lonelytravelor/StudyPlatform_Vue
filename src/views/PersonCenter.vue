<template>
  <div style="padding-top: 30px">
    <el-row>
      <el-col :span="16" style="padding-right: 10px">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>基本资料</span>
            <el-link type="primary" style="float: right; margin-top: 10px">完善信息</el-link>
          </div>
          <el-descriptions :column="num">
            <el-descriptions-item label="年   龄 ">{{ userBasic.userAge }}</el-descriptions-item>
            <el-descriptions-item label="性   别 ">{{ userBasic.userGender }}</el-descriptions-item>
            <el-descriptions-item label="所在大学 ">{{ userBasic.userCollege }}</el-descriptions-item>
            <el-descriptions-item label="所在专业 ">{{ userBasic.userDiscipline }}</el-descriptions-item>
            <el-descriptions-item label="所在班级 ">{{ userBasic.userClass }}</el-descriptions-item>
            <el-descriptions-item label="入学年份 ">{{ userBasic.userSchoolYear }}</el-descriptions-item>
            <el-descriptions-item label="性格分析 ">{{ studyStyle.styleName }}</el-descriptions-item>
          </el-descriptions>
          <el-link type="primary" @click="centerDialogVisible = true">查看详细性格测试信息<i class="el-icon-view el-icon--right"></i></el-link>
        </el-card>
      </el-col>
      <el-col :span="8" style="padding-left: 10px">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>账户信息</span>
          </div>
          <el-descriptions :column="num">
            <el-descriptions-item label="手机号">{{ userAccount.userPhone }}</el-descriptions-item>
            <el-descriptions-item label="邮 箱">{{ userAccount.userEmail }}</el-descriptions-item>
            <el-descriptions-item label="密 码 ">{{ password }}
              <i class="el-icon-view" style="padding-left: 20px"
                 @mousedown="password=userAccount.userPassword" @mouseup="password='******'"></i>
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog
        title="性格分析结果"
        :visible.sync="centerDialogVisible"
        width="35%">
      <strong>你的性格分析结果为： </strong>
      {{ studyStyle.styleName }}<br><br>
      <i>{{ studyStyle.styleDes[0] }}</i>
      <i>{{ studyStyle.styleDes[1] }}</i><br>
      <i>{{ studyStyle.styleDes[2] }}</i><br>
      <i>{{ studyStyle.styleDes[3] }}</i><br><br><br>
      您可以在个人中心中重新测试，以便我们可以更好地了解您。
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="toTest">重新测试 <i class="el-icon-right"></i></el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/vuex/store";

export default {
  name: "PersonCerter",
  store,
  data(){
    return{
      centerDialogVisible: false,
      num: 1,
      password: "******",
      userAccount: {
        userId: 0,
        userPhone: "",
        userPassword: "",
        userEmail: "",
      },
      userBasic: {
        userAge: "",
        userGender: "",
        userCollege: "",
        userDiscipline: "",
        userClass: "",
        userSchoolYear: "",
      },
      studyStyle: {
        styleId: 0,
        styleName: "",
        styleShape: "",
        styleDes: [],
      },

    }
  },
  created() {
    const that = this;
    axios({
      url: "http://localhost:9090/loadUserAccount",
      method: 'get',
      params:{
        phone: this.$store.state.userName,
      },
    }).then(function (response) {
      console.log(response.data);
      that.userAccount = response.data;
    });
    axios({
      url: "http://localhost:9090/loadUserBasic",
      method: 'get',
      params:{
        userId: this.$store.state.userId,
      },
    }).then(function (response) {
      console.log(response.data);
      that.userBasic = response.data
      that.studyStyle = response.data.studyStyle;
      that.studyStyle.styleDes = response.data.studyStyle.styleDes.split("。");
    });
  },
  methods: {
    toTest(){
      this.$router.push("/NatureTest")
    }
  }
}

</script>

<style scoped>
</style>