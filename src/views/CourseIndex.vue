<template>
  <div class="my-main">
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
                <el-button v-show="!isSelected" round @click="joinCourse" style="width: 30%" type="primary">立即参加</el-button>
                <!--      margin-left: 0px 用来解决莫名出现的左外边距10px的问题             -->
                <el-button v-show="isSelected" round style="width: 30%;margin-left: 0px" type="primary">以参加,立即学习</el-button>
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
<!--        这里使用v-if 判断对象是否为空时提示对象不能为空，类型不交叉使得判断条件一直为ture ，原因是
            v-if="courseSummary !== null"    时，我们在赋值的时候未加载到数据时会使用null覆盖       -->
            <el-tabs v-model="activeName" v-if="courseSummary !== null">
              <el-tab-pane label="课程详情" name="first">
                <i style="font-size: 13px">{{ courseSummary.summaryContent }}</i>
              </el-tab-pane>
            </el-tabs>
            <el-tabs v-model="activeName" v-if="courseAnnouncementList  !== null">
              <el-tab-pane label="课程公告" name="first">
                <div v-for="item in courseAnnouncementList">
                  <b style="font-size: 13px;text-align-last:justify">{{ item.announcementTitle }}</b><br>
                  <i style="font-size: 10px">{{ item.announcementContent }}</i>
                </div>
              </el-tab-pane>
            </el-tabs>
            <el-tabs v-model="activeName" v-if="courseReferenceList !== null">
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
import store from "@/vuex/store";

export default {
  name: "CourseIndex",
  props:['courseId'],
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
    this.loadIndex();
    this.isSelectCourse();
  },
  methods: {
    loadIndex(){
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
        console.log(response.data.courseSummary)
        console.log(typeof response.data.courseSummary)
      });
    },
    isSelectCourse() {
      if (this.$store.state.userId !== -1){
        const that = this;
        axios({
          url: "http://localhost:9090/isSelectCourse",
          method: "post",
          data: {
            courseId : this.courseId,
            userId : this.$store.state.userId,
          }
        }).then(function (response) {
          that.isSelected = response.data;
        })
      }
    },
    joinCourse() {
      if (this.$store.state.userId !== -1){
        const that = this;
        axios({
          url: "http://localhost:9090/updateUserCourseByUserId",
          method: "post",
          data: {
            courseId : this.courseId,
            userId : this.$store.state.userId,
          }
        }).then(function (response) {
          if ( response.data === "success"){
            that.isSelected = true;
            that.$message({
              message: '选课成功！',
              type: 'success'
            });
          }else {
            that.$message({
              message: '选课失败，请稍后再试！',
              type: 'warning'
            });
          }
        })
      }else {
        this.$router.push("/Login")
      }
    }
  }
}
</script>

<style scoped>

</style>