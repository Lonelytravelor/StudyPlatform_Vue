<template>
  <div class="my-main">
    <el-card class="course-title">
      <div v-for="(courses, index) in university">
        <div v-if="courses.length !== 0">
          <el-link type="primary" style="float: right; margin-top: 10px" @click="toAllCourseByLabel(index)">全部课程</el-link>
          <p> {{ index }} </p>
          <el-divider></el-divider>
          <el-row style="margin-top: 5px">
            <el-col :span="4" v-for="item in courses" :key="item.courseId">
              <el-card :body-style="{ padding: '0px' }" shadow="hover" style=" margin-left: 11px;margin-bottom: 10px">
                <el-image :src="baseUrl + item.courseImageUrl" @click="toCourseIndex(item.courseId)"></el-image>
                <div style="padding: 14px;">
                  <span><p style="font-family: 微软雅黑; font-size: 13px"> {{ item.courseName }}</p></span>
                  <span><p style="font-family: 微软雅黑; font-size: 10px"> {{ item.courseTeacher }}</p></span>
                  <div>
                    <p style="font-family: 微软雅黑; font-size: 10px"> {{ item.course_university }}</p>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CourseUniversity",
  data() {
    return {
      baseUrl: "http://localhost:9090/",
      university: []
    }
  },
  created() {
    const that =this;
    axios({
      url: "http://localhost:9090/loadCourseUniversity"
    }).then(function (response) {
      that.university = response.data;
    })
  },
  methods:{
    toCourseIndex (courseId) {
      this.$router.push('/CourseIndex/' + courseId);
    },
    toAllCourseByLabel(university){
      this.$router.push('/AllCourseByUniversity/' + university);
    }
  }
}
</script>

<style scoped>
.course-title {
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 0;
}
</style>