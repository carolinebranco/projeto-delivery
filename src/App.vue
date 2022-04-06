<template> 
 <navbar :logo="logo_src" :alt ="app_name"/>
 <banner />
 <router-view />
 <rodape />
 
 
</template>
  
  <script>
  import navbar from './components/navbar.vue'; 
  import banner from './components/banner.vue';
  import Rodape from './components/footer.vue';
 
  


  export default{
    components:{
      navbar,
      banner,
      Rodape,
       notTisLoginPage(){
        return this.$route.name !=="login";
}
          
        
    },
    data(){
      return{
        logo_src:"../img/logo.png",
        app_name:"make your burger..",

      }
    }
    }
  
  </script>

<style>
* {
  font-family: Helvetica;
  padding: 0; 
  margin: 0;
  box-sizing: border-box;

 }
  .main-container{
    margin:50px;
    min-height: 250px;
  }

  h1{
    text-align: center;
    font-size: 42px;
    margin: bottom 30px;
    color:#222;
  }
  </style>