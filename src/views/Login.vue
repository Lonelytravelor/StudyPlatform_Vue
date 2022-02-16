<template>
  <el-container>
    <el-main>
      <div v-show="isLogin">
        <el-form label-width="80px" class="login-box">
          <h3 class="login-title">欢迎登录</h3>
          <el-form-item label="用户名">
            <el-input v-model="userName"></el-input>
          </el-form-item>
<!--          <el-form-item label="账号" prop="username">-->
<!--            <el-input type="text" placeholder="请输入账号" v-model="form.username"/>-->
<!--          </el-form-item>-->
          <el-form-item label="密码" >
            <el-input v-model="password"></el-input>
          </el-form-item>
          <el-form-item>
            <a @click="toRegister">没有账号，我要注册</a>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="big" @click="login">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-show="isRegister">
        <el-form label-width="80px"  class="login-box">
          <el-form-item label="手机号">
            <el-input v-model="userName" style="width: 140px"></el-input>
          </el-form-item>
          <el-form-item label="密码" >
            <el-input v-model="password" style="width: 140px"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" >
            <el-input v-model="confirm_password" style="width: 140px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="big" @click="register">注 册</el-button>
          </el-form-item>
        </el-form>
      </div>
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

.login-box {
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>