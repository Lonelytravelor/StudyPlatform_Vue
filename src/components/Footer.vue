<template>
  <div style="text-align: center;">
    <div class="footer" style="margin-top: 90px;margin-bottom: 0px">
      <hr />
      <p>
        <span><a href="">关于我们</a></span>
        <span><a href="">招聘启示</a></span>
        <!--          <i class="el-icon-delete"></i>-->
        <span><a href="mailto:zengxiaochao666@163.com">zengxiaochao666@163.com</a></span>
        <span><a href="https://jq.qq.com/?_wv=1027&k=2giDHjln">QQ交流群：641910728</a></span>
      </p>
      <p><span>公司地址：山东省烟台市XXX区XXX街道XXX号</span></p>
      <p><span>Copyright © 2020-2021</span> <span>曾小超</span></p>
      <p><span>xxx备 xxxxxxxx号-x </span><span>公网安备 xxxxxxxxxxxxxx号</span> <span>版权所有</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goTop: function () {
      location.reload();
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 160px;
}
</style>