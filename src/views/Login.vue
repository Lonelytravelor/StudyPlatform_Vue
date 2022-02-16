<template>
  <el-container>
    <el-main>
      <el-card class="box-card">
        <div v-show="isLogin">
          <el-form label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="userName" style="width: 140px"></el-input>
            </el-form-item>
            <el-form-item label="密码" >
              <el-input v-model="password" style="width: 140px"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="toRegister">没有账号，我要注册</el-button>
          <el-button type="primary" @click="login">登 录</el-button>
        </div>
        <div v-show="isRegister">
          <el-form label-width="80px" >
            <el-form-item label="手机号">
              <el-input v-model="userName" style="width: 140px"></el-input>
            </el-form-item>
            <el-form-item label="密码" >
              <el-input v-model="password" style="width: 140px"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" >
              <el-input v-model="confirm_password" style="width: 140px"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="register">注 册</el-button>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data(){
    return{
      userName: "",
      password: "",
      confirm_password: "",
      isLogin: true,
      isRegister: false,
    }
  },
  methods: {
    toRegister: function () {
      this.isLogin = false
      this.isRegister = true
    },
    checkPassword: function () {
      var res = true;
      if ( this.password !== this.confirm_password){
        res = false;
        this.$message({
          message: '两次密码不一致！',
          type: 'warning'
        });
      }
      return res;
    },
    checkPasswordNotNull: function () {
      var res = true;
      if ( this.password === "" ){
        res = false;
        this.$message({
          message: '请输入密码！',
          type: 'warning'
        });
      }
      return res;
    },
    checkPhone: function () {
      var res = true;
      var regex = /^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})$/;
      if ( !this.userName.match(regex)){
        res = false;
        this.$message({
          message: '手机号格式错误！',
          type: 'warning'
        });
      }
      return res;
    },
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
    },
    register: function () {
      var that = this;
      if ( this.checkPhone() && this.checkPasswordNotNull() && this.checkPassword()){
        axios({
          url: "http://localhost:9090/register",
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