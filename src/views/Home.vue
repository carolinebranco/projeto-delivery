<template>
  <div class="main-container">
    <h1>Monte seu burger</h1>
    <burger-form />
    
    <!-- <burger /> -->
  </div>
</template>

<script>
// import burger from "../../public/img/burger.jpg"
import banner from"../components/banner.vue"
import burgerForm from "../components/burgerForm.vue"

// @ is an alias to /src
 export default { 
  name: 'Home',
  components: {
    banner,
    burgerForm,
    
    // burger
  }
}
</script>
