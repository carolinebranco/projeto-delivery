<template>
  <div id="nav">
     <router-link to ="/" id = "logo-url">
       <img :src ="logo" :alt="alt" id="logo">
     </router-link>  
    <router-link to="/">Home</router-link> 
    <router-link to ="/login">login</router-link>
    <router-link to="/pedidos">pedidos</router-link>
  </div>
</template>
<script>
export default{
  name:"navbar",
  props:["logo", "alt"]
 }
</script>
<style scoped> 
  #nav {
    background-color:black;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

   #logo-url {
     margin:auto ;
     margin-left: 5;
  }
   #logo {
     width: 50px;
     height: 40px;
  
  }   
   #nav a {
    color: #fcba03;
    text-decoration:none;
    margin:20
    px;
    transition: 2s;
  }
  #nav a:hover {
    color: rgb(72, 63, 63);
    }


</style>
