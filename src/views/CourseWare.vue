<template>
  <div style=" margin-right: 180px; min-height: 300px;">
    <el-card style="background-color: white; padding-left: 20px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/CourseWareIndex' }">
          <span style="font-size: 15px;">课件</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span style="font-size: 15px;">{{ name }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div style="width: 100%; margin-top: 20px">
        <div>
          <video
              ref="video"
              :src="urlBase + url"
              @timeupdate="change"
              controls="controls"
              style="width: 80%; margin-left: 10%"></video>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CourseWare",
  props: ["name", "file"],
  data() {
    return {
      urlBase: "http://localhost:9090/video/",
      url: "",
      speed: 0,
    }
  },
  created() {
    console.log(this.file)
    let split = this.file.split('@');
    console.log("========")
    console.log(split[0])
    console.log(split[1])
    console.log("========")
    this.url = split[0];
    this.speed = parseInt(split[1]);
  },
  mounted() {
    this.$refs.video.currentTime = this.speed;
  },
  methods: {
    fixedPoint() {
      console.log(this.speed);
      this.$refs.video.currentTime = 30;
    },
    change() {
      console.log(this.$refs.video.currentTime);
    }
  }
}
</script>

<style scoped>

</style>