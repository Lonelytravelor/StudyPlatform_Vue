<template>
  <div class="my-main">
    <p style="font-size: 24px;margin-left: 10px; margin-bottom: 0 ">精品课排行榜</p>
    <el-divider></el-divider>
    <el-row style="margin-top: 5px">
      <el-col :span="4" v-for="item in courses" :key="item.courseId">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" style=" margin-left: 11px;margin-bottom: 10px">
          <el-image :src="baseUrl + item.courseImageUrl" @click="toCourseIndex(item.courseId)"></el-image>
          <div style="padding: 14px;">
            <span><p style="font-family: 微软雅黑; font-size: 13px"> {{ item.courseName }}</p></span>
            <span><p style="font-family: 微软雅黑; font-size: 10px"> {{ item.courseTeacher }}</p></span>
            <div>
              <p style="font-family: 微软雅黑; font-size: 10px"> {{ item.courseUniversity }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Index",
  props: ['userId'],
  data() {
    return {
      dialogFormVisible : false,
      form: {},
      baseUrl: "http://localhost:9090/",
      courses: [],
    }
  },
  created() {
    const that = this;
    axios({
      url: "http://localhost:9090/loadCourse",
      method: "get",
    }).then(function (response) {
      that.courses = response.data;
    })
  },
  methods:{
    toCourseIndex:function (courseId) {
      this.$router.push('/CourseIndex/' + courseId);
    }
  }
}
</script>

<style scoped>

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}


.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.header-right {
  float: right ;
  margin-top: 15px;
}

</style>