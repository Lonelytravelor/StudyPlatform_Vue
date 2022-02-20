<template>
  <div>
    {{ courseId }}
  </div>
</template>

<script>
export default {
  name: "CourseIndex",
  props:['courseId'],
  data(){
    return{
      id: 0,
    }
  },
}
</script>

<style scoped>

</style>