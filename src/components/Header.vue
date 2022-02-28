<template>
  <el-container>
    <el-header>
      <el-menu  class="" mode="horizontal" router text-color="#000000" style="width: 60% ;margin-left: 20%;
      " default-active="/">
        <el-menu-item index="/" style="font-size: 16px">首页</el-menu-item>
        <el-menu-item index="/course" style="font-size: 16px">课程</el-menu-item>
        <el-menu-item index="/school" style="font-size: 16px">学校</el-menu-item>
        <el-button size="small" round class="header-right" type="primary" @click="toLogin" v-if="this.$store.state.userName == '' "> 登录 / 注册 </el-button>
        <el-button round class="header-right" type="primary" @click="toPersonCenter" v-if="this.$store.state.userName != '' "> {{ this.$store.state.userName }}</el-button>
      </el-menu>
    </el-header>
  </el-container>
</template>
<script>
  import axios from "axios";
  import store from "@/vuex/store";
  export default {
    name: "Header",
    props: ['userId'],
    store,
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
