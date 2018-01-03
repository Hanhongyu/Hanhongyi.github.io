<template>
  <div class="register" :style="registerStyle">
    <form class="registerPanel">
      <h1>{{msg}}</h1>
      <el-input placeholder="请输入内容" v-model="inputId">
        <template slot="prepend">账号</template>
      </el-input>
      <br>
      <el-input placeholder="请输入内容" type="password" v-model="inputPassword">
        <template slot="prepend">密码</template>
      </el-input>
      <br>
      <el-input placeholder="请输入内容" type="password" v-model="inputRePassword">
        <template slot="prepend">重复密码</template>
      </el-input>
      <br>
      <el-input placeholder="请输入内容" v-model="inputPhone">
        <template slot="prepend">联系方式</template>
      </el-input>
      <br>
      <el-input placeholder="请输入内容" v-model="inputEmail">
        <template slot="prepend">邮箱</template>
      </el-input>
      <br>
      <div class="footer">
        <el-button type="success" round @click="addUser">提交</el-button>
        <el-button type="success" round @click="back">返回</el-button>
      </div>
    </form>
  </div>
</template>

<script>
  import login from '../../../static/res/img/login.jpg'
  export default {
    name: 'register',
    data () {
      return {
        registerStyle: {
          background: 'url(' + login + ')',
        },
        msg:'新用户注册',
        inputId:'',
        inputPassword:'',
        inputRePassword:'',
        inputPhone:'',
        inputEmail:'',
      }
    },
    activated(){
      this.inputId = '';
      this.inputPassword = '';
      this.inputRePassword = '';
      this.inputPhone = '';
      this.inputEmail = '';
    },
    methods: {
      addUser(){
        let id = this.inputId;
        let password = this.inputPassword;
        let repassword = this.inputRePassword;
        let phone = this.inputPhone;
        let email = this.inputEmail;
        if(id && password && repassword && phone && email){
            if(password !== repassword){
              this.$message({
                type: 'error',
                message: '两次密码不一致，请重新输入'
              });
            }else{
              let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
                if(!reg.test(email)){
                  this.$message({
                    type: 'error',
                    message: '邮箱格式不正确'
                  });
                }else{
                  this.$http.post('/api/user/addUser', {id: id, password: password});
                  this.$router.replace('/')
                }
            }
        }else{
          this.$message({
            type: 'error',
            message: '输入内容不得为空'
          });
        }
      },
      back(){
        this.$router.replace('/');
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .registerPanel{
    background-color: rgba(64,128,128,0.6);
    padding: 2rem 4rem  2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
