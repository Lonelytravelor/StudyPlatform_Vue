<template>
  <div style="padding-top: 30px">
    <el-row>
      <el-col :span="16">
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>账户信息</span>
            </div>
            <div class="text item">
              手机号：{{ UserPhone }}<br>
              邮 箱：{{ UserEmail }}<br>
              密 码：{{ UserPassword }}<br>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>账户信息</span>
            </div>
            <div class="text item">
              年   龄：{{ UserAge }}<br>
              性   别：{{ UserGender }}<br>
              所在大学：{{ UserCollage }}<br>
              所在专业：{{ UserDiscipline }}<br>
              所在班级：{{ UserClass }}<br>
              入学年份：{{ UserSchoolYear }}<br>
              性格分析：{{ UserStudyStyle }}<br>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props:["userId"],
  name: "PersonCerter",
  data(){
    return{
      Id: 0,
      UserPhone: "",
      UserPassword: "",
      UserEmail: "",
      UserAge: "",
      UserGender: "",
      UserCollage: "",
      UserDiscipline: "",
      UserClass: "",
      UserSchoolYear: "",
      UserStudyStyle: "",

    }
  },
  created() {
    const that = this;
    let id = 1;
    axios({
      url: "http://localhost:9090/loadUserAccount",
      method: 'get',
      params:{
        phone: this.userId
      },
    }).then(function (response) {
      console.log(response.data);
      that.Id = response.data.userId;
      that.UserPhone = response.data.userPhone;
      that.UserPassword = response.data.userPassword;
      that.UserEmail = response.data.userEmail;
    });
    axios({
      url: "http://localhost:9090/loadUserBasic",
      method: 'get',
      params:{
        userId: id,
      },
    }).then(function (response) {
      console.log(response.data);
      that.UserAge = response.data.userAge;
      that.UserGender = response.data.userGender;
      that.UserCollage = response.data.userCollage;
      that.UserDiscipline = response.data.userDiscipline;
      that.UserClass = response.data.userClass;
      that.UserSchoolYear = response.data.userSchoolYear;
      that.UserStudyStyle = response.data.userStudyStyle;
    });
  }
}

</script>

<style scoped>
</style>