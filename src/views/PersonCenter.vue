<template>
  <div class="my-main">
    <el-row>
      <el-col :span="24">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane label="已选课程" name="first">
              <el-empty v-if="courses.length == 0" description="您还没有选择课程哦，请先选择课程开始学习吧！"></el-empty>
              <el-col v-else :span="4" v-for="item in courses" :key="item.courseId">
                <el-card :body-style="{ padding: '0px' }" shadow="hover" style=" margin-left: 11px;margin-bottom: 10px">
                  <el-image :src="baseUrl + item.courseImageUrl"></el-image>
                  <div style="padding: 14px;">
                    <span><p style="font-family: 微软雅黑; font-size: 13px"> {{ item.courseName }}</p></span>
                    <span><p style="font-family: 微软雅黑; font-size: 10px"> {{ item.courseTeacher }}</p></span>
                    <div>
                      <p style="font-family: 微软雅黑; font-size: 10px"> {{ item.courseInstitution }}</p>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/vuex/store";

export default {
  name: "PersonCenter",
  store,
  data(){
    return{
      activeName: "first",
      baseUrl: "http://localhost:9090/",
      courses: [],
    }
  },
  created() {
    const that = this;
    axios({
      url: "http://localhost:9090/loadPersonCourses",
      method: "post",
      data: {
        id : this.$store.state.userId,
      }
    }).then(function (response) {
      that.courses = response.data;
      console.log(that.courses)
    })
  }
}
</script>

<style scoped>

</style>