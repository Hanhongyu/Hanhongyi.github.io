<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <form>
      <input type="text" name="userid" v-model="userId">
      <br>
      <input type="text" name="password" v-model="password">
      <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        userId: '',
        password: '',
      }
    },
    methods: {
      addUser(){
        let id = this.userId;
        let password = this.password;
        console.log(id)
        console.log(password)
/*        this.$http({
          method: 'post',
          url: '/api/user/addUser',
//          url: 'http://172.20.10.2:3000/api/user/addUser',
          body: {
            id: id,
            password: password
          }
        })*/
        this.$http.post('/api/user/addUser',{id: id, password: password})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
