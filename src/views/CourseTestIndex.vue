<template>
  <div style="margin-right: 25%">
    <el-tabs v-model="activeName" style="background-color: white; padding-left: 20px;">
      <el-tab-pane label="课程详情" name="first">
        <div style="padding-left: 15px; padding-right: 15px">
          <el-row>
            <el-card shadow="never"style="margin-bottom: 10px">
              <el-col :span="24" >
                {{ courseTitle }}
                <el-button style="float: right" type="primary" @click="toCourseTest">测试</el-button>
              </el-col>
            </el-card>
          </el-row>
          <el-row>
            <el-card shadow="never" style="margin-bottom: 10px">
              <el-col :span="24" >
                第一章
              </el-col>
            </el-card>
          </el-row>
          <el-row>
            <el-card shadow="never" style="margin-bottom: 10px">
              <el-col :span="24" >
                第一章
              </el-col>
            </el-card>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
export default {
  name: "CourseTestIndex",
  data(){
    return{
      activeName: "first",
      courseTitle: "第一章测试题"
    }
  },
  methods: {
    toCourseTest() {
      this.$router.push("/CourseTest/" + this.courseTitle)
    }
  }
}
</script>

<style scoped>

</style>