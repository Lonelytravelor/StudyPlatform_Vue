<template>
  <div style="margin-top: 20px;">
    <el-button v-show="isSelected" round @click="isSelected = false" style="width: 30%" type="primary">以参加,立即学习</el-button>
    <el-button v-show="!isSelected" round @click="isSelected = false" style="width: 30%" type="primary">学习</el-button>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return{
      isSelected: true
    }
  }
}
</script>

<style scoped>

</style>