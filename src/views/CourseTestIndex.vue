<template>
  <div style="margin-right: 15%;">
    <el-card>
      <el-tabs v-model="activeName" style="background-color: white; padding-left: 20px;">
        <el-tab-pane label="课程详情" name="first">
          <div style="padding-left: 15px; padding-right: 15px">
            <el-row>
              <el-card shadow="never"style="margin-bottom: 10px">
                <el-col :span="24" >
                  {{ courseTitle }}
                  <el-button style="float: right" type="primary" @click="toCourseTest( courseTitle )">测试</el-button>
                </el-col>
              </el-card>
            </el-row>
            <el-row>
              <el-card shadow="never" style="margin-bottom: 10px">
                <el-col :span="24" >
                  {{ courseTitle2 }}
                  <el-button style="float: right" type="primary" @click="toCourseTest( courseTitle2 )">测试</el-button>
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
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CourseTestIndex",
  data(){
    return{
      activeName: "first",
      courseTitle: "第一章测试题",
      courseTitle2: "第二章测试题"
    }
  },
  methods: {
    toCourseTest(title) {
      this.$router.push("/CourseTest/" + title)
    }
  }
}
</script>

<style scoped>

</style>