<template>
  <div style="padding-top: 30px">
    <p style="font-size: 24px;margin-left: 10px">国家精品课</p>
    <hr style="color: #0033b0;margin-left: 10px"/>
    <el-row style="margin-top: 5px">
      <el-col :span="4" v-for="item in courses" :key="item.courseId">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" style=" margin-left: 11px">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image" @click="toCourseIndex(item.courseId)">
          <div style="padding: 14px;">
            <span><p style="font-family: 微软雅黑; font-size: 13px"> {{ item.courseName }}</p></span>
            <span><p style="font-family: 微软雅黑; font-size: 10px"> {{ item.courseTeacher }}</p></span>
            <div>
              <p style="font-family: 微软雅黑; font-size: 10px"> {{ item.courseInstitution }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Index",
  props: ['userId'],
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


.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.header-right {
  float: right ;
  margin-top: 15px;
}

</style>