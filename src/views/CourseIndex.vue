<template>
  <div style="padding-top: 30px">
<!--    这里是最上面课程的总体展示部分，包含照片和基本信息，以及选课按钮    -->
    <el-row>
      <el-col :span="24">
        <el-card>
          <el-col :span="12">
            <el-image :src="baseUrl + course.courseImageUrl" style="width: 100%;border-radius:10px"></el-image>
          </el-col>
          <el-col :span="12">
            <div style="margin-top: 20px; margin-left: 25px">
              <div>
                <b style="font-size: 24px">{{ course.courseName }}</b>
                <el-tag style="margin-left: 5px" size="mini" effect="dark">{{ course.courseLabel }}</el-tag>
              </div>
              <div style="margin-top: 20px;">
                <el-button round>立即参加</el-button>
              </div>
            </div>
          </el-col>
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
            <el-tabs v-model="activeName">
              <el-tab-pane label="课程公告" name="first">
                <div v-for="item in courseAnnouncementList">
                  <b style="font-size: 13px;text-align-last:justify">{{ item.announcementTitle }}</b><br>
                  <i style="font-size: 10px">{{ item.announcementContent }}</i>
                </div>
              </el-tab-pane>
            </el-tabs>
            <el-tabs v-model="activeName">
              <el-tab-pane label="参考书籍" name="first">
                <div v-for="item in courseReferenceList">
                  <cite style="font-size: 13px;text-align-last:justify">《{{ item.referenceName }}》</cite>
                  <i style="font-size: 10px">{{ item.referenceAuthor }}</i>
                  <i style="font-size: 10px">{{ item.referencePress }}</i>
                </div>
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
              <el-tabs v-model="activeName">
                <el-tab-pane label="授课教师" name="first">
                  <i style="font-size: 13px">{{ course.courseTeacher }}</i>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </div>
        </el-row>
        <el-row style="margin-top: 20px">
          <div style="margin-left: 10px">
            <el-card class="box-card" body-style="round">
              <el-tabs v-model="activeName">
                <el-tab-pane label="所属学院" name="first">
                  <i style="font-size: 13px">{{ course.courseInstitution }}</i>
                </el-tab-pane>
              </el-tabs>
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
      baseUrl: "http://localhost:9090/",
      course: {
        courseName: "",
        courseInstitution: "",
        courseTeacher: "",
        courseReleaseTime: "",
        courseLabel: "",
        courseImageUrl: "",
        courseSelected: 0,
      },
      courseSummary: {
        summaryContent: "",
      },
      courseAnnouncementList: [],
      courseReferenceList: [],
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
      that.courseReferenceList = response.data.courseReferenceList;
    })
  }
}
</script>

<style scoped>

</style>