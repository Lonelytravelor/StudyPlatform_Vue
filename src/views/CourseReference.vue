<template>
  <div style=" margin-right: 180px; min-height: 300px;">
    <el-card style="background-color: white; padding-left: 20px;">
      <div slot="header" class="clearfix">
        <span>参考书籍</span>
      </div>
      <div v-for="item in courseReferenceList">
        <cite style="font-size: 13px;text-align-last:justify">《{{ item.referenceName }}》</cite>
        <i style="font-size: 10px">{{ item.referenceAuthor }}</i>
        <i style="font-size: 10px">{{ item.referencePress }}</i>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/vuex/store";

export default {
  name: "CourseReference",
  store,
  data(){
    return{
      activeName: "first",
      id: "",
      courseReferenceList: [],
    }
  },
  created() {
    const that = this;
    axios({
      url: "http://localhost:9090/selectCourseReferenceById",
      params: {
        id: this.$store.state.courseId,
      }
    }).then(function (response) {
      that.courseReferenceList = response.data;
    });
  },
  methods: {
  }
}
</script>

<style scoped>

</style>