<template>
  <div style="margin-right: 25%">
    <el-tabs v-model="activeName" style="background-color: white; padding-left: 20px;">
      <el-tab-pane label="课程详情" name="first">
        <div style="padding-left: 15px; padding-right: 15px">
          <el-row>
            <el-card shadow="never"style="margin-bottom: 10px">
              <el-col :span="24" >
                第一章
                <el-button style="float: right" type="primary">测试</el-button>
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
    }
  }
}
</script>

<style scoped>

</style>