<template>
  <div style=" margin-right: 180px; min-height: 300px;">
    <el-card style="background-color: white; padding-left: 20px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }" style="margin-top: 7px">
          <span style="font-size: 15px;">课件</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-select size="mini" v-model="value" placeholder="请选择" @change="showWare">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-select size="mini" v-model="value" placeholder="请选择" @change="showWare">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-select size="mini" v-model="value" placeholder="请选择" @change="showWare">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div style="width: 100%; margin-top: 20px">
        <router-view></router-view>
      </div>
    </el-card>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "CourseWare",
  props: ["courseWareId"],
  data() {
    return {
      video: "",
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      points: ["建造者模式", "单例模式", "工厂模式", "原型模式"],
    }
  },
  created() {
    this.showWare()
  },
  methods: {
    showWare() {
      router.push('/CourseWareShow/' + this.courseWareId);
    }
  }
}
</script>

<style scoped>

</style>