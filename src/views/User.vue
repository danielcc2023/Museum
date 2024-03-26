<template>
  <div>
    <div style="padding: 10px 0 ; text-align: left" >
      <el-input style="width: 200px;margin-right: 10px;" placeholder="请输入用户名" suffix-icon="el-icon-search" v-model="username"></el-input>
      <el-input style="width: 200px;margin: 0 10px" placeholder="请输入电话号码" suffix-icon="el-icon-search" v-model="phone"></el-input>
      <el-button style="margin-left: 5px"  type="primary" @click="load">搜索</el-button>
      <el-button style="margin-left: 5px"  type="warning" @click="reset">重置</el-button>


      <el-button type="primary" style="margin-left: 500px" @click="handleAdd">添加</el-button>
      <el-popconfirm
          style="margin-left: 5px"
          confirm-button-text='确定'
          cancel-button-text='取消'
          icon="el-icon-info"
          icon-color="red"
          title="确定删除吗？"
          @confirm="delBatch"
      >
        <el-button type="danger" slot="reference" >批量删除</el-button>
      </el-popconfirm>
    </div>



    <el-table :data="tableData" border stripe @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="username" label="用户" width="120"></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="140"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope" >
          <el-button type="success" style="padding: 5px 10px;" @click="handleEdit(scope.row)">编辑<i class="el-icon-edit"></i></el-button>
          <el-popconfirm
              style="margin-left: 5px"
              confirm-button-text='确定'
              cancel-button-text='取消'
              icon="el-icon-info"
              icon-color="red"
              title="确定删除吗？"
              @confirm="del(scope.row.id)"
          >
            <el-button type="danger" slot="reference" style="padding: 5px 10px;">删除<i class="el-icon-remove-outline"></i></el-button>
          </el-popconfirm>
        </template>
      </el-table-column>

    </el-table>

    <div style="padding: 10px 0">
      <el-pagination
          :current-page="pageNum"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>

    <el-dialog title="用户信息" :visible.sync="dialogFormVisible" width=40%>
      <el-form  label-width="100px">

        <el-form-item label="用户名">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <!--              <el-form-item label="密码">-->
        <!--                <el-input v-model="form.password" autocomplete="off"></el-input>-->
        <!--              </el-form-item>-->
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>



  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return{
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 5,
      username:"",
      nickname:"",
      phone:"",
      email:"",
      dialogFormVisible: false,
      form:{},
      multipleSelection:[],
    }
  },
  created() {
    this.load()
  },

  methods:{
    load(){
      this.request.get("/user/page", {
        params: {
          pageNum:  this.pageNum,
          pageSize: this.pageSize,
          username: this.username,  //利用用户名和电话查询
          phone:    this.phone
        }
      }).then(res =>{
        console.log(res)
        this.tableData = res.records
        this.total = res.total
      })
    },

    handleAdd(){
      this.dialogFormVisible = true
      this.form = {}
    },
    handleEdit(row){
      this.form = row
      this.dialogFormVisible = true
    },
    del(id){
      this.request.delete("/user/"+id).then(res =>{
        if(res){
          this.$message.success("删除成功")
          this.load()
        }else{
          this.$message.error("删除失败")
        }
      })
    },

    delBatch(){
      let ids = this.multipleSelection.map(v => v.id) //获取选中行的id
      this.request.post("/user/del/batch",ids).then(res =>{
        if(res){
          this.$message.success("批量删除成功")
          this.load()
        }else{
          this.$message.error("批量删除失败")
        }
      })
    },

    save(){
      this.request.post("/user",this.form).then(res =>{
        if(res.code === '200'){
          this.$message.success("保存成功")
          this.dialogFormVisible = false
          this.load()
        }else{
          this.$message.error(res.msg)
          this.dialogFormVisible = false
        }
      })
    },

    reset(){
      this.username = ""
      this.phone = ""
      this.load()
    },

    handleSelectionChange(val){
      console.log(val)
      this.multipleSelection = val
    },

    handleSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize =  pageSize
      this.load()
    },
    handleCurrentChange(pageNum){
      console.log(pageNum)
      this.pageNum = pageNum
      this.load()
    }
  }
}
</script>

<style scoped>

</style>