<template>
  <div style="text-align: center;">
    <div class="footer" style="margin-top: 90px;margin-bottom: 0px">
      <hr />
      <p>
        <span><a href="">关于我们</a></span>
        &nbsp;&nbsp;
        <span><a href="">Northeast Petroleum University</a></span>
        &nbsp;&nbsp;
        <span><a href="">招聘启示</a></span>
        &nbsp;&nbsp;
        <span><a href="https://jq.qq.com/?_wv=1027&k=2giDHjln">QQ交流群：641910728</a></span>
      </p>
      <p><span>Copyright © 2020-2022</span> <span>东北石油大学</span></p>
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