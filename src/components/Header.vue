<template>
  <el-container>
    <el-header>
      <el-menu  class="" mode="horizontal" router text-color="#000000" style="width: 60% ;margin-left: 20%;
      " default-active="/">
        <el-menu-item index="/" style="font-size: 16px">首页</el-menu-item>
        <el-menu-item index="/CourseSummary" style="font-size: 16px">课程</el-menu-item>
        <el-menu-item index="/CourseUniversity" style="font-size: 16px">学校</el-menu-item>
        <el-button size="small" round class="header-right" type="primary" @click="toLogin"
                   v-if="this.$store.state.userName == '' "> 登录 / 注册 </el-button>
        <el-dropdown class="header-right"
                     style="width: 120px;
                     cursor: pointer"
                     v-if="this.$store.state.userName != '' "
                     @command="command">
          <span>
            {{ this.$store.state.userName }}
            <i class="el-icon-arrow-down"
               style="margin-left: 5px;
               margin-top: 10px"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">个人中心</el-dropdown-item>
            <el-dropdown-item command="b">个人信息</el-dropdown-item>
            <el-dropdown-item command="c">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-input
            class="header-right"
            size="small"
            placeholder="搜索感兴趣的课程"
            suffix-icon="el-icon-search"
            v-model="input"
            style="width: 20%; margin-right: 20px"
            @keydown.enter.native="toSelectCourse">
        </el-input>
      </el-menu>
    </el-header>
  </el-container>
</template>
<script>
  import SelectCourse from "@/views/SelectCourse";
  import store from "@/vuex/store";
  export default {
    name: "Header",
    store,
    components: {
      child: SelectCourse
    },
    data() {
      return {
        dialogFormVisible : false,
        form: {},
        courses: [],
        input: "",
        userId: "",
      }
    },
    methods:{
      toCourseIndex (courseId) {
        this.$router.push('/CourseIndex/' + courseId);
      },
      toLogin: function () {
        this.$router.push('/Login');
      },
      toSelectCourse(){
        let key = this.$route.fullPath;
        this.$router.push({
          path: '/SelectCourse/' + this.input,
          query: {
            key: key
          }
        });

      },
      command(command){
        if (command == 'a'){
          this.$router.push('/PersonCenter');
        }else if (command == 'b'){
          this.$router.push('/PersonMessage');
        }else if (command == 'c') {
          this.$store.commit("exit");
          this.$router.push('/');
        }
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
