<template>
  <div style=" margin-right: 180px; min-height: 300px;">
    <el-card style="background-color: white; padding-left: 20px;">
      <div slot="header" class="clearfix">
        <span>课程详情</span>
      </div>
      <div style="padding-left: 15px; padding-right: 15px">
        <i>{{ this.summaryContent }}</i>
      </div>
    </el-card>
  </div>
</template>

<script>
import store from "@/vuex/store";
import axios from "axios";
export default {
  name: "CourseDetails",
  store,
  data(){
    return{
      activeName: "first",
      summaryContent: "",
    }
  },
  created() {
    let that = this;
    axios({
      url: "http://localhost:9090/selectCourseSummaryById",
      params: {
        id: this.$store.state.courseId,
      }
    }).then(function (response) {
      that.summaryContent = response.data.summaryContent;
    })
  }
}
</script>

<style scoped>

</style>