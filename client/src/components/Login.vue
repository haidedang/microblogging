<template>
  <div>
   <h1>Login</h1>
   <div> 
     <button @click="login">Login</button>
   </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

if (web3) {
    console.log("web3");
    console.log(web3.eth.accounts[0]);
} else {
    alert("No web3 detected. Please install metamask");
}

export default {
  data () {
     return {
    }
  }, 
  methods: { 
      login(){ 
        AuthenticationService.login();
    }
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
