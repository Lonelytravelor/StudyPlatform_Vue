<template>
  <div class="wrapper">
    <v-head></v-head>
    <div class="content" style="background-color: #f5f5f5">
      <div>
        <router-view></router-view>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vHead from './Header.vue';
import vFooter from './Footer.vue';

export default {
  name: "Home",
  components: {
    vHead,
    vFooter
  }
}
</script>

<style>
.my-main{
  width: 60%;
  margin-left: 20%;
  padding-top: 20px
}
</style>