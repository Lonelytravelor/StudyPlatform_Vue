<template>
  <div style=" margin-right: 180px; min-height: 300px;">
    <el-card style="background-color: white; padding-left: 20px;">
      <div slot="header" class="clearfix">
        <span>课件</span>
      </div>
      <el-collapse style="width: 98%; margin-left: 1%;">
        <el-collapse-item v-for="(point, index) in points" :key="point">
          <template slot="title">
            <span style="font-size: 18px" >第{{ index+1 }}章 {{ point }}</span>
          </template>
          <div style="margin-left: 20px">
            <span style="font-size: 16px">第一节 创建者模式</span>
            <div style="margin-left: 20px">
              <div>原型模式</div>
              <div>原型模式</div>
              <div>原型模式</div>
              <div>原型模式</div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "CourseWareIndex",
  data() {
    return {
      isShow : true,
      courseWareId: 1,
      points: ["建造者模式", "单例模式", "工厂模式", "原型模式"],
    }
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