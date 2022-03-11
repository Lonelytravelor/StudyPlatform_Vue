<template>
  <div style=" margin-right: 180px; min-height: 300px;">
    <el-tabs v-model="activeName" style="background-color: white; padding-left: 20px;">
      <el-tab-pane label="参考书籍" name="first">
        <div v-for="item in courseAnnouncementList">
          <b style="font-size: 13px;text-align-last:justify">{{ item.announcementTitle }}</b><br>
          <i style="font-size: 10px">{{ item.announcementContent }}</i>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from "@/vuex/store";
import axios from "axios";

export default {
  name: "CourseAnnouncement",
  store,
  data(){
    return{
      activeName: "first",
      id: "",
      courseAnnouncementList: [],
    }
  },
  created() {
    const that = this;
    axios({
      url: "http://localhost:9090/selectCourseAnnouncementById",
      params: {
        id: this.$store.state.courseId,
      }
    }).then(function (response) {
      that.courseAnnouncementList = response.data;
    });
  }
}
</script>

<style scoped>

</style>