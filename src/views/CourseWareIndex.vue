<template>
  <div style=" margin-right: 180px; min-height: 300px;">
    <el-card style="background-color: white; padding-left: 20px;">
      <div slot="header" class="clearfix">
        <span>课件</span>
      </div>
      <el-collapse accordion style="width: 98%; margin-left: 1%;">
        <el-collapse-item v-for="(point1, index) in courseIndex" :key="point1.id">
          <template slot="title">
            <span style="font-size: 18px" >第{{ index+1 }}章 {{ point1.name }}</span>
          </template>
          <div style="margin-left: 15px">
            <div v-for="(point2, index) in point1.nextPoints" :key="point2.id">
              <span style="font-size: 16px">第{{ index+1 }}节 {{ point2.name }}</span>
              <div style="margin-left: 15px">
                <div v-for="(point3, index) in point2.nextPoints" :key="point3.id">
                  <div v-for="video in point3.videoList">
                    <i class="el-icon-video-play" style="margin-right: 4px"></i>
                    <el-link @click="ToCourseWare(point3.name, video)" style="font-size: 15px">{{ point3.name }}</el-link>
                  </div>
                  <div v-for="file in point3.fileList">
                    <i class="el-icon-document-remove" style="margin-right: 4px"></i>
                    <el-link @click="ToCourseWare(point3.name, file)" style="font-size: 15px">{{ point3.name }}</el-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  name: "CourseWareIndex",
  data() {
    return {
      isShow : true,
      courseWareId: 1,
      courseIndex: [],
    }
  },
  created() {
    let that = this;
    axios({
      url: "http://localhost:9090/loadCoursePointIndex",
      params: {
        courseId: this.$store.state.courseId,
        // courseId: 1,
      }
    }).then(function (response) {
      that.courseIndex = response.data.nextPoints;
    })
  },
  methods: {
    ToCourseWare(name, file) {
      router.push('/CourseWare/' + name + '/' + file);
    }
  }
}
</script>

<style scoped>

</style>