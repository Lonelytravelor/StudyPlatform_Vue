<template>
  <el-container>
    <el-header>
      <el-menu  class="el-menu-demo nav" mode="horizontal" router text-color="#000000" style="width: 60% ;margin-left: 20%">
        <el-menu-item index="/" style="font-size: 16px">首页</el-menu-item>
        <el-menu-item index="/" style="font-size: 16px">课程</el-menu-item>
        <el-menu-item index="/" style="font-size: 16px">学校</el-menu-item>
        <el-button round class="header-right" type="primary" @click="toLogin" v-if="userId == null">登录/注册</el-button>
        <el-button round class="header-right" type="primary" @click="toPersonCenter" v-if="userId != null"> {{ userId }}</el-button>
      </el-menu>
    </el-header>
  </el-container>
</template>
<script>
  import axios from "axios";
  export default {
    name: "Header",
    props: ['userId'],
    data() {
      return {
        dialogFormVisible : false,
        form: {},
        courses: [],
        userId: "",
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
    },
    methods:{
      toCourseIndex:function (courseId) {
        this.$router.push('/CourseIndex/' + courseId);
      },
      toLogin: function () {
        this.$router.push('/Login');
      },
      toPersonCenter(){
        this.$router.push('/PersonCerter/' + this.userId);
      }
    }
  }
</script>
<style scoped>

.header-right {
  float: right ;
  margin-top: 15px;
}

</style>
