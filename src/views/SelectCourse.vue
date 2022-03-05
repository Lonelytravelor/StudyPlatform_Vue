<template>
  <div class="my-main">
    <el-card class="course-title">
      <p> 搜索结果 </p>
      <el-divider></el-divider>
      <el-row>
        <el-card v-for="item in courses" :key="item.courseId">
          <el-col :span="6" >
              <el-image
                  style="width: 100%; margin-top: 5px; margin-bottom: 5px"
                  :src="baseUrl + item.courseImageUrl"
                  @click="toCourseIndex(item.courseId)"></el-image>
          </el-col>
          <el-col :span="18">
              <div style="padding-left: 15px; ">
                <span><p style="font-family: 微软雅黑; font-size: 18px; margin-bottom: 8px"> {{ item.courseName }}</p></span>
                <span><p style="font-family: 微软雅黑; font-size: 10px; color: #909399; margin-top: 8px">
                  {{ item.courseTeacher }}&nbsp;&nbsp;&nbsp;{{ item.courseInstitution }}
                </p></span>
              </div>
          </el-col>
        </el-card>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SelectCourse",
  props: ["courseName"],
  data(){
    return{
      baseUrl: "http://localhost:9090/",
      courses: [],
    }
  },
  created() {
    this.selectCourse();
  },
  methods: {
    toCourseIndex:function (courseId) {
      this.$router.push('/CourseIndex/' + courseId);
    },
    selectCourse (){
      const that =this;
      axios({
        url: "http://localhost:9090/loadAllCourseByCourseName",
        params: {
          courseName: this.courseName,
        }
      }).then(function (response) {
        that.courses = response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>