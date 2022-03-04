<template>
  <div class="my-main">
    <el-card class="course-title">
      <p> {{ label }} </p>
      <el-divider></el-divider>
      <el-row style="margin-top: 5px">
        <el-col :span="4" v-for="item in courses" :key="item.courseId">
          <el-card :body-style="{ padding: '0px' }" shadow="hover" style=" margin-left: 11px;margin-bottom: 10px">
            <el-image :src="baseUrl + item.courseImageUrl" @click="toCourseIndex(item.courseId)"></el-image>
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
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AllCourseByLabel",
  props: ["label"],
  data(){
    return{
      baseUrl: "http://localhost:9090/",
      courses: [],
    }
  },
  created() {
    const that =this;
    axios({
      url: "http://localhost:9090/loadAllCourseByLabel",
      params: {
        label: this.label,
      }
    }).then(function (response) {
      that.courses = response.data;
    })
  },
  methods: {
    toCourseIndex:function (courseId) {
      this.$router.push('/CourseIndex/' + courseId);
    },
  }
}
</script>

<style scoped>

</style>