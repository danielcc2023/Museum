<template>
  <div class="wrapper">
    <div style="margin: 40px auto ;background-color: #fff ;width: 500px ;height: 600px; padding: 20px; border-radius: 10px">
      <div style="margin:20px 0; text-align: center; font-size: 30px; "><b>注 册</b>
        <el-form :model="user" :rules="rules" ref="userForm">
          <el-form-item prop="username">
            <el-input size="medium" style="margin: 5px" prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item prop="nickname">
            <el-input size="medium" style="margin: 5px" prefix-icon="el-icon-user" placeholder="请输入用户昵称" v-model="user.nickname"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input size="medium" style="margin: 5px" prefix-icon="el-icon-user" placeholder="请输入密码" show-password v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <el-input size="medium" style="margin: 5px" prefix-icon="el-icon-user" placeholder="请确认密码" show-password v-model="user.confirmPassword"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input size="medium" style="margin: 5px" prefix-icon="el-icon-user" placeholder="请输入手机号码" v-model="user.phone"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input size="medium" style="margin: 5px" prefix-icon="el-icon-user" placeholder="请输入邮箱地址" v-model="user.email"></el-input>
          </el-form-item>


          <div style="margin: 5px 0; text-align: center">
            <el-button type="primary" size="medium" autocomplete="off" @click="login">注册</el-button>
            <el-button type="warning" size="medium" autocomplete="off" @click="$router.push('/login')">返回登录</el-button>
          </div>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "Login",
  data(){
    return{
      user:{},
      rules:{
        username:[
          {required:true,message:"请输入用户名",trigger:"blur"}
        ],
        nickname:[
          {required:true,message:"请输入昵称",trigger:"blur"}
        ],
        password:[
          {required:true,message:"请输入密码",trigger:"blur"}
        ],
        confirmPassword:[
          {required:true,message:"请确认密码",trigger:"blur"}
        ],
        phone:[
          {required:true,message:"请输入手机号",trigger:"blur"}
        ],
        email:[
          {required:true,message:"请输入邮箱",trigger:"blur"}
        ]
      }
    }
  },

  methods:{
    login(){
      this.$refs["userForm"].validate((valid) => {
        if(valid){
          if(this.user.password != this.user.confirmPassword){
            this.$message.error("两次密码不一致")
            return false
          }

          this.request.post("/user/register",this.user).then(res=>{
            if(res.code==200){
              this.$message.success("注册成功")
            }else{
              this.$message.error(res.msg)
            }
          })
        }
      });
    },

    register(){

    }
  }
}
</script>

<style scoped>
  .wrapper{
    height: 100vh;
    background-image: linear-gradient(to bottom right, #FC466B, #3F5EFB);
    overflow-x: hidden;
  }
</style>