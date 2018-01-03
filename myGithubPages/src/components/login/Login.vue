<template>
  <div class="login" v-bind:style="loginStyle">
    <div class="loginPanel">
      <span class="header">{{msg}}</span>
      <div class="body">
        <div class="body-item">
          <el-input placeholder="请输入内容" v-model="inputId">
            <i slot="prepend" class="el-icon-github-people-head" ></i>
          </el-input>
        </div>
        <br>
        <div class="body-item">
          <el-input placeholder="请输入内容" v-model="inputPassword" :type="[isEyeOpen ? 'text' : 'password']">
            <i slot="prepend" v-bind:class="[isEyeOpen ? 'el-icon-github-eye' : 'el-icon-github-close-eye']" @click="changeIcon"></i>
          </el-input>
        </div>
      </div>
      <div class="footer">
        <el-button type="success" round @click="login">登录</el-button>
        <el-button type="success" round @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import login from '../../../static/res/img/login.jpg'
  export default {
    name: 'login',
    data () {
      return {
        loginStyle:{
          background:'url('+ login+')',
        },
        msg:'欢迎回来！',
        isEyeOpen:false,
        inputId:'',
        inputPassword:'',
      }
    },
    activated(){
        this.inputId = '';
        this.inputPassword = '';
    },
    methods:{
      changeIcon(){
          this.isEyeOpen = !this.isEyeOpen;
      },
      login(){
        let id = this.inputId;
        let password = this.inputPassword;
        console.log(id);
        console.log(password);
        this.$http.get('/api/user/checkUser',{params:{'id':id,'password':password}})
          .then((response)=>{
            if(response.body.length === 0){
                console.log("登陆失败");
              this.$alert('账号或密码不正确，请重新输入', '登陆失败', {
                confirmButtonText: '确定',
                callback: () => {
                  this.inputId='';
                  this.inputPassword='';
                }
              });
            }else{
              this.$message({
                type: 'success',
                message: '登录成功'
              });
              this.$router.push('/hello')
            }
          })
      },
      register(){
        this.$router.push('/register')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loginPanel{
    position:absolute;
    width: 30%;
    height: 40%;
    text-align: center;
    background-color: rgba(64,128,128,0.6);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .header{
    font-size: 3.0rem;
    font-weight: bolder;
  }

</style>
