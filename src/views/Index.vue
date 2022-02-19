<template>
  <el-container>
    <el-header >
      <el-menu  class="el-menu-demo nav" mode="horizontal" router text-color="#000000" style="width: 60% ;margin-left: 30%">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/">课程</el-menu-item>
        <el-menu-item index="/">学校</el-menu-item>
      </el-menu>
    </el-header>
    <el-row>
      <el-col :span="3" v-for="item in courses" :key="item.courseId">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" style=" margin-left: 11px">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>{{ item.courseName }}</span><br/>
            <span>{{ item.courseTeacher }}</span>
            <div>
              <p style="font-family: 微软雅黑"> {{ item.courseInstitution }}</p>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
<!--  <div>-->
<!--    <table>-->
<!--      <tr v-for="item in courses" :key="item.courseId">-->
<!--        <td>{{}}</td>-->
<!--        <td>{{item}}</td>-->
<!--      </tr>-->
<!--    </table>-->
<!--  </div>-->

</template>

<script>
import axios from "axios";

export default {
  name: "Index",
  data() {
    return {
      dialogFormVisible : false,
      form: {},
      courses: [],
    }
  },
  created() {
    const that = this;
    axios({
      url: "http://localhost:9090/loadCourse",
      method: "get",
    }).then(function (response) {
      that.courses = response.data;
    })
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #ffffff;
  color: #333;
  line-height: 60px;
  box-sizing: border-box;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>