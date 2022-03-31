<template>
  <div style=" margin-right: 180px; min-height: 300px;">
    <el-card style="background-color: white; padding-left: 20px;">
      <div slot="header" class="clearfix">
        <span>课件</span>
      </div>
      <div>
        <el-card style="width: 98%; height: 60px; margin-left: 1%; cursor: pointer" shadow="hover" >
          <span style="font-size: 18px" >第一章 数理结构</span>
        </el-card>
        <div v-show="isShow">
          <div style="margin-left: 50px">
            <span style="font-size: 16px">第一节 创建者模式</span>
            <div style="margin-left: 50px">
              <span style="font-size: 16px">单例模式</span><br>
              <span style="font-size: 16px">抽象工厂模式</span><br>
              <span style="font-size: 16px">原型模式</span><br>
              <span style="font-size: 16px">建造者模式</span><br>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CourseWare",
  data() {
    return {
      isShow : true
    }
  }
}
</script>

<style scoped>

</style>