<template>
  <div style="padding-top: 30px">
    <el-row>
      <el-col :span="16">
        <div style="margin-right: 10px">
          <el-card class="box-card" body-style="round">
            <el-tabs v-model="activeName">
              <el-tab-pane label="课程详情" name="first">
                用户法第三方士大夫管理
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <el-row>
          <div style="margin-left: 10px">
            <el-card class="box-card" body-style="round">
              <div v-for="o in 2" :key="o" class="text item">
                {{ courseId }}
              </div>
            </el-card>
          </div>
        </el-row>
        <el-row style="margin-top: 20px">
          <div style="margin-left: 10px">
            <el-card class="box-card" body-style="round">
              <div v-for="o in 2" :key="o" class="text item">
                {{ courseId }}
              </div>
            </el-card>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CourseIndex",
  props:['courseId'],
  data(){
    return{
      id: 0,
      activeName: "first",
    }
  },
}
</script>

<style scoped>

</style>