<template>
  <el-container>
    <el-main>
      <div v-show="isLogin">
        <el-form label-width="80px" class="login-box">
          <h3 class="login-title">欢迎登录</h3>
          <el-form-item label="用户名 :">
            <el-input v-model="userName"></el-input>
          </el-form-item>
          <el-form-item label="密码 :" >
            <el-input v-model="password" type="password"></el-input>
          </el-form-item>
          <el-form-item style="text-align: right">
            <a style="cursor: pointer; color: #18345e; text-align: right" @click="toRegister" >没有账号，我要注册</a>
          </el-form-item>
          <el-button type="primary" size="big" @click="login" style="width: 50%; margin-left: 25%">登 录</el-button>
        </el-form>
      </div>
      <div v-show="!isLogin">
        <el-form label-width="80px"  class="login-box">
          <h3 class="login-title">欢迎注册</h3>
          <el-form-item label="手机号 :">
            <el-input v-model="userName"></el-input>
          </el-form-item>
          <el-form-item label="密码 :" >
            <el-input v-model="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码 :" >
            <el-input v-model="confirm_password"></el-input>
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
import router from "@/router";
import store from "@/vuex/store";

export default {
  name: "About",
  store,
  data(){
    return{
      userName: "",
      password: "",
      confirm_password: "",
      isLogin: true,
    }
  },
  methods: {
    toRegister: function () {
      this.isLogin = false
    },
    checkPassword: function () {
      let res = true;
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
      let res = true;
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
      let res = true;
      const regex = /^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})$/;
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
      const that = this;
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
        let arr = [];
        arr = response.data.split(",");
        console.log(arr[1])
        console.log(typeof arr[1])
        if ( arr[1] == "true"){
          that.$store.commit("setUserName", that.userName);
          that.$store.commit("setUserId", arr[0]);
          router.push('/index')
        }else if( arr[1] == 'unTest' ){
          that.$store.commit("setUserName", that.userName);
          that.$store.commit("setUserId", arr[0]);
          router.push('/NatureTest');
        }else {
          console.log(typeof response.data)
          that.$message({
            message: '密码或用户名错误！',
            type: 'warning'
          });
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
            alert("注册成功，请登录");
            that.isLogin = !that.isLogin;
          }else {
            alert("用户名已被注册！");
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