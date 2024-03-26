<template>
  <div style="display: flex; justify-content: center;">
    <el-card style="width: 600px;">
      <el-form  label-width="100px">

        <el-form-item label="用户名">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="open" >保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Person",

  data(){
    return{
      form:{},
      username:"",
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
    }
  },

  created() {
    this.request.get("/user/username/"+this.user.username).then(res => {
      if(res.code === '200'){
        this.form = res.data
      }
    })
  },

  methods:{
    save(){
      this.request.post("/user",this.form).then(res => {
        if(res.data){
          // this.$message.success("保存成功")
          this.$router.push("/person")
        }else{
          // this.$message.error("保存失败")
        }
      })
    },
    open() {
      this.$confirm('此操作将修改个人信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.save()
        this.$message({
          type: 'success',
          message: '修改成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'warning',
          message: '已取消修改'
        });
      });
    }


  }
}
</script>

<style scoped>

</style>