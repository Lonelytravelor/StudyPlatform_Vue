<template>
  <div>
    <div v-if="[1,2] == [2,1]">
      TNND
    </div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return{
      checkList: [],
      hello: "hello",
    }
  },
  created() {
    console.log("hello")
    console.log(this.hello.toArray())
  }
}
</script>

<style scoped>

</style>