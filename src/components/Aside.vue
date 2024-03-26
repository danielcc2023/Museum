<template>
  <el-menu :default-openeds="['1', '3']" style="min-height: 100%; overflow-x: hidden"
           background-color='rgb(48,65,86)'
           text-color="#fff"

           :collapse-transition="false"
           :collapse="isCollapse"
           router
  >
    <div style="height: 60px; line-height: 60px; text-align: center">
      <img src="../assets/logo.png" alt="" style="width: 20px; position: relative; top: 5px; margin-right: 5px">
      <b style="color: white" v-show="LogoTextShow">HEU数字博物馆</b>
    </div>

    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
    </el-menu-item>

    <el-menu-item index="/person">
      <i class="el-icon-house"></i>
        <span slot="title">个人中心</span>
    </el-menu-item>

    <el-menu-item index="/user">
      <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
    </el-menu-item>

    <el-menu-item index="/">
      <i class="el-icon-star-on"></i>
      <span slot="title">展区管理</span>
    </el-menu-item>

    <el-menu-item index="/">
      <i class="el-icon-collection"></i>
      <span slot="title">留言板管理</span>
    </el-menu-item>

    <el-menu-item index="/">
      <i class="el-icon-tickets"></i>
      <span slot="title">捐赠管理</span>
    </el-menu-item>

    <el-submenu index="5">
      <template slot="title"><i class="el-icon-message"></i>
        <span slot="title">留言板管理</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="6">
      <template slot="title"><i class="el-icon-menu"></i>
        <span slot="title">系统管理</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>



  </el-menu>
</template>

<script>
export default {
  name:"Aside",
  props: {
    isCollapse:Boolean,
    LogoTextShow:Boolean
  }
}
</script>

<style scoped>

</style>