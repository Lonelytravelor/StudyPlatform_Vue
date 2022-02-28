<template>
  <div>
    {{ this.$store.state.userName }}
    {{ this.$store.state.userPassword }}
    <el-button @click="setName(user)"> 更新姓名 </el-button>
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  name: "test",
  store,
  data() {
    return {
      user:{
        userName: "dejdfhjksdkjskd",
        password: "hhhhhhhhh"
      }
    }
  },
  methods: {
    setName(user){
      this.$store.commit("setUserName", user);
    }
  }
}
</script>

<style scoped>

</style>