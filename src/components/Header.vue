<template>
<div style="line-height: 60px; display: flex">
  <div style="flex: 1;font-size: 25px;">
    <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
  </div>
  <el-dropdown style="width: 80px; cursor: pointer">
    <span>{{user.nickname}}</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
    <el-dropdown-menu slot="dropdown">

      <el-dropdown-item>
        <span to="/login" style="text-decoration: none; display: block" @click="logout"> 退出 </span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>

<script>
export default {
  name: "Header",
  props: {
    collapseBtnClass : String,
    collapse : Function
  },

  data() {
    return {
      user:  localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")) : {}
    }
  },

  methods: {
    logout(){
      localStorage.removeItem("user")
      this.$router.push("/login")
      this.$message.success("退出成功")
    }
  }
}
</script>

<style scoped>

</style>