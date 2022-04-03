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
          <div style="margin-left: 20px">
            <div v-for="(point2, index) in point1.nextPoints" :key="point2.id">
              <span style="font-size: 16px">第{{ index+1 }}节 {{ point2.name }}</span>
              <div style="margin-left: 20px">
                <div v-for="(point3, index) in point2.nextPoints" :key="point3.id">
                  <el-link @click="ToCourseWareShow">{{ point3.name }}</el-link>
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
      points: ["建造者模式", "单例模式", "工厂模式", "原型模式"],
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
      console.log(response.data);
      that.courseIndex = response.data.nextPoints;
    })
  },
  methods: {
    ToCourseWareShow() {
      router.push('/CourseWare/' + this.courseWareId);
    }
  }
}
</script>

<style scoped>

</style>