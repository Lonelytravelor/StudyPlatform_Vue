<template>
  <div>
    <el-row>
      <el-col :span="3" >
        <div style="margin-left: 5%">
          <div style="width: 230px; height: 130px; margin-top: 20px">
            <img :src="baseUrl + course.courseImageUrl" style="width: 100%;height: 100%; margin-right: 5px; border-radius:5px">
          </div>
          <el-menu style="height: 100%; width: 230px; overflow-x: hidden;  margin-top: 10px; border-radius:1px">
            <el-menu-item index="0" @click="toCourseDetails">课程详情</el-menu-item>
            <el-menu-item index="1" v-if="courseAnnouncementList !== null" @click="toCourseAnnouncement">课程公告</el-menu-item>
            <el-menu-item index="2" v-if="courseAnnouncementList !== null" @click="toCourseWareIndex">课件学习</el-menu-item>
            <el-menu-item index="3" v-if="courseAnnouncementList !== null" @click="toCourseAnnouncement">学习资源</el-menu-item>
            <el-menu-item index="4" v-if="courseAnnouncementList !== null" @click="toCourseTestIndex">考试测验</el-menu-item>
            <el-menu-item index="5" v-if="courseReferenceList !== null" @click="toCourseReference">参考书籍</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="21" style="margin-top: 20px; padding-left: 2%" >
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import store from "@/vuex/store";

export default {
  name: "CourseStudy",
  store,
  data(){
    return{
      id: 0,
      activeName: "first",
      isSelected: false,
      baseUrl: "http://localhost:9090/",
      course: {
        courseId: -1,
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
        id : this.$store.state.courseId
      }
    }).then(function (response) {
      that.course = response.data;
      that.courseSummary = response.data.courseSummary;
      that.courseAnnouncementList = response.data.courseAnnouncementList;
      that.courseReferenceList = response.data.courseReferenceList;
    });
    this.toCourseDetails();
  },
  methods: {
    toCourseDetails() {
      router.push('/CourseDetails')
    },
    toCourseReference() {
      router.push('/CourseReference');
    },
    toCourseAnnouncement() {
      router.push('/CourseAnnouncement');
    },
    toCourseTestIndex() {
      router.push('/CourseTestIndex');
    },
    toCourseWareIndex() {
      router.push('/CourseWareIndex');
    }
  }
}
</script>

<style>
.study-left{
  margin-left: 2%
}
</style>