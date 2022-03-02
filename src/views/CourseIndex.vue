<template>
  <div style="padding-top: 30px">
<!--    这里是最上面课程的总体展示部分，包含照片和基本信息，以及选课按钮    -->
    <el-row>
      <el-col :span="24">
        <el-card>

        </el-card>
      </el-col>
    </el-row>
<!--    下面是课程的简介信息，分为主体和右侧卡片。    -->
<!--    主体部分    -->
    <el-row style="margin-top: 20px">
      <el-col :span="16">
        <div style="margin-right: 10px">
          <el-card class="box-card" body-style="round">
            <el-tabs v-model="activeName">
              <el-tab-pane label="课程详情" name="first">
                <i style="font-size: 13px">{{ courseSummary.summaryContent }}</i>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-col>
<!--    右侧卡片部分    -->
      <el-col :span="8">
        <el-row>
          <div style="margin-left: 10px">
            <el-card class="box-card" body-style="round">
              <div v-for="o in 2" :key="o" class="text item">
                {{ courseId }}
              </div>
            </el-card>
          </div>
        </el-row>
        <el-row style="margin-top: 20px">
          <div style="margin-left: 10px">
            <el-card class="box-card" body-style="round">
              <div v-for="o in 2" :key="o" class="text item">
                {{ courseId }}
              </div>
            </el-card>
          </div>
        </el-row>
      </el-col>
<!--      右侧卡片结束    -->
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CourseIndex",
  props:['courseId'],
  data(){
    return{
      id: 0,
      activeName: "first",
      course: {
        courseName: "",
        courseInstitution: "",
        courseTeacher: "",
        courseReleaseTime: "",
        courseSelected: 0,
      },
      courseSummary: {
        summaryContent: "",
      },
      courseAnnouncementList: []
    }
  },
  created() {
    const that = this;
    axios({
      url: "http://localhost:9090/loadCourseById",
      params: {
        id : this.courseId
      }
    }).then(function (response) {
      that.course = response.data;
      that.courseSummary = response.data.courseSummary;
      that.courseAnnouncementList = response.data.courseAnnouncementList;
    })
  }
}
</script>

<style scoped>

</style>