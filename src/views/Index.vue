<template>
  <el-container>
    <el-header >
      <el-menu  class="el-menu-demo nav" mode="horizontal" router text-color="#000000" style="width: 60% ;margin-left: 30%">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/">课程</el-menu-item>
        <el-menu-item index="/">学校</el-menu-item>
      </el-menu>
      <span>王小虎</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
    </el-header>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="35%" >
      <el-form :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.userEmail" style="width: 140px"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" >
          <el-input v-model="form.userPhone" style="width: 140px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
  </el-container>

</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      dialogFormVisible : false,
      form: {}
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #ffffff;
  color: #333;
  line-height: 60px;
  box-sizing: border-box;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>