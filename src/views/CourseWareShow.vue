<template>
<div>
  <video :src="video" controls="controls" style="width: 70%; margin-left: 15%"></video>
</div>
</template>

<script>
export default {
  name: "CourseWareShow",
  data() {
    return {
      video: "",
    }
  }
}
</script>

<style scoped>

</style>