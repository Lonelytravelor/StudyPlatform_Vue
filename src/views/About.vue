<template>
  <el-card class="box-card">
    <div>
      <el-form label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="userName" style="width: 140px"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" >
          <el-input v-model="password" style="width: 140px"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="login">登 录</el-button>
    </div>
  </el-card>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data(){
    return{
      userName: "",
      password: ""
    }
  },
  methods: {
    login: function () {
      var that = this;
      axios({
        url: "http://localhost:9090/login",
        method: "post",
        data: {
          userName: this.userName,
          password: this.password,
        },
        headers: {
          "Content-type": "application/json;charset=utf-8"
        },
      }).then(function (response){
        if ( response.data ){
          alert("Success");
        }else {
          alert("Fail");
        }
      })
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>