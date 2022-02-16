<template>
  <div class="home" style="height: 100%">
    <el-container style="height: 100%; ">
      <el-aside :width="sideWidth  + 'px'" style="background-color: rgb(238, 241, 246); box-shadow: 2px 0 6px rgb(0,21,41)">
        <el-menu :default-openeds="['1', '3']" style="height: 100%; overflow-x: hidden"
                 background-color="rgb(48,65,86)" text-color="#ffffff" active-text-color="#ffd04b"
                  :collapse-transition="false"
                  :collapse="isCollapse">
          <div style="height: 60px; line-height: 60px; text-align: center">
            <img src="../assets/logo.png" style="width: 20px; position: relative; top: 4px; margin-right: 5px">
            <b style="color: white" v-show="isShow">后台管理系统</b>
          </div>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style=" font-size: 12px; border-bottom: 1px solid #ccc; line-height: 60px; display: flex">
          <div style="flex: 1; font-size: 18px">
            <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
          </div>
          <el-dropdown style="width: 70px; cursor: pointer" >
            <span>王小虎</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <div style="margin-bottom: 15px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div style="padding: 10px 0">
            <el-input style="width: 200px" placeholder="请输入信息" suffix-icon="el-icon-search" ></el-input>
            <el-input style="width: 200px" placeholder="请输入信息" suffix-icon="el-icon-message" class="ml-5"></el-input>
            <el-input style="width: 200px" placeholder="请输入信息" suffix-icon="el-icon-position" class="ml-5" ></el-input>
            <el-button class="ml-5" type="primary">搜素</el-button>
          </div>
          <div style="margin: 10px 0">
            <el-button type="primary" @click="dialogFormVisible = true , form = {}">新增<i class="el-icon-circle-plus-outline"></i></el-button>
            <el-button type="danger">批量删除<i class="el-icon-remove-outline"></i></el-button>
            <el-button type="primary">导入<i class="el-icon-bottom"></i></el-button>
            <el-button type="primary">导出<i class="el-icon-top"></i></el-button>
          </div>
          <el-table :data="tableData" stripe>
            <el-table-column prop="userId" label="姓名" ></el-table-column>
            <el-table-column prop="userPassword" label="密码" ></el-table-column>
            <el-table-column prop="userEmail" label="邮箱"></el-table-column>
            <el-table-column prop="userPhone" label="电话"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="success">编辑<i class="el-icon-edit"></i></el-button>
                <el-button type="danger">删除<i class="el-icon-delete"></i></el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="padding: 10px 0">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
          </div>
          <el-dialog title="新增" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="form" label-width="80px">
              <el-form-item label="活动名称" >
                <el-input v-model="form.userId" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动名称">
                <el-input v-model="form.userEmail"></el-input>
              </el-form-item>
              <el-form-item label="活动名称" >
                <el-input v-model="form.userPhone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动名称" >
                <el-input v-model="form.userPassword" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="save">确 定</el-button>
            </div>
          </el-dialog>
        </el-main>
      </el-container>
    </el-container>
    <router-link to="/login">登 录</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";

export default {
  name: 'Home',
  data(){
    return {
      tableData:[],
      pageNum: 1,
      pagesize: 10,
      collapseBtnClass:'el-icon-s-fold',
      isCollapse:false,
      sideWidth: 200,
      isShow: true,
      total: 0,
      form: {
        userId:"",
        userPassword:"",
        userEmail:"",
        userPhone:"",
      },
      dialogFormVisible : false,

    }
  },
  created() {
    this.load();
  },
  methods:{
    load(){
      var that = this;
      axios({
        url: "http://localhost:9090/selectPageUser",
        params:{
          pageNum: this.pageNum,
          pageSize: this.pagesize,
        },
        headers: {
          "Content-type": "application/json;charset=utf-8"
        },
        method: "get",
      }).then(function (response) {
        that.total = response.data.total;
        that.tableData = response.data.data;
        console.log(response.data)
      })
    },
    collapse(){
    //  点击触发收缩
      this.isCollapse = !this.isCollapse;
      if ( this.isCollapse ){
        this.sideWidth = 64;
        this.collapseBtnClass = 'el-icon-s-unfold';
        this.isShow = false;
      }else {
        this.sideWidth = 200;
        this.collapseBtnClass = 'el-icon-s-fold'
        this.isShow = true;
      }
    },
    handleSizeChange(pageSize){
      this.pagesize = pageSize;
      this.load();
    },
    handleCurrentChange(pageNum){
      this.pageNum = pageNum;
      this.load();
    },
    save(){
      var that = this;
      axios({
        url: "http://localhost:9090/add",
        data:{
          userId: this.form.userId,
          userPassword: this.form.userPassword,
          userEmail: this.form.userEmail,
          userPhone: this.form.userPhone,
        },
        method: "post",
      });
      that.dialogFormVisible = false;
    },
    toLogin(){
      this.$router.push('/login')
    }
  }

}
</script>
