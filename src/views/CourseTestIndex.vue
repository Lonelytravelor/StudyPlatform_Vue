<template>
  <div style="margin-right: 15%;">
    <el-card style="padding-left: 15px; padding-right: 15px">
      <div slot="header" class="clearfix">
        <span>基本资料</span>
        <el-link type="primary" style="float: right; margin-top: 10px" v-if="!isHistory" @click="showHistory">查看历史测验</el-link>
        <el-link type="primary" style="float: right; margin-top: 10px" v-else @click="showHistory">返回</el-link>
      </div>
      <div v-if="!isHistory">
        <el-card shadow="never"style="margin-bottom: 10px">
          <el-col :span="24" >
            {{ courseTitle }}
            <el-button style="float: right" type="primary" @click="toCourseTest( courseTitle )">测试</el-button>
          </el-col>
        </el-card>
        <el-card shadow="never" style="margin-bottom: 10px">
          <el-col :span="24" >
            {{ courseTitle2 }}
            <el-button style="float: right" type="primary" @click="toCourseTest( courseTitle2 )">测试</el-button>
          </el-col>
        </el-card>
        <el-card shadow="never" style="margin-bottom: 10px">
          <el-col :span="24" >
            第一章
          </el-col>
        </el-card>
      </div>
      <div v-else>
        <el-card v-for="test in testList" :key="test.testId" shadow="never" style="margin-bottom: 10px">
          {{ test.testTitle }}
          <i style="font-size: 14px; padding-left: 12px; padding-right: 12px"> {{ test.testTime.replace("T"," ") }}</i>
          <i style="font-size: 14px;" v-if="test.testScore != null" > {{ test.testScore }}分</i>
          <i style="font-size: 14px;" v-else> 未完成 </i>
          <el-button style="float: right" type="primary" @click="toCourseHistoricalTest(test.testId)">查看详情</el-button>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CourseTestIndex",
  data(){
    return{
      activeName: "first",
      courseTitle: "第一章测试题",
      courseTitle2: "第二章测试题",
      isHistory: false,
      testList: [],
      isSelect: false,
    }
  },
  methods: {
    toCourseTest(title) {
      this.$router.push("/CourseTest/" + title)
    },
    toCourseHistoricalTest(testId) {
      this.$router.push("/CourseHistoricalTest/" + testId)
    },
    showHistory(){
      if (!this.isSelect){
        this.loadHistoricalTest();
      }
      this.setIsShow();
    },
    loadHistoricalTest(){
      let that = this;
      axios({
        url:"http://localhost:9090/loadHistoricalTest",
        method: "post",
        data:{
          userId: this.$store.state.userId,
          courseId: this.$store.state.courseId
        }
      }).then(function (response) {
        that.testList = response.data;
      });
      this.isSelect = true;
    },
    setIsShow(){
      this.isHistory = !this.isHistory;
    }
  }
}
</script>

<style scoped>

</style>