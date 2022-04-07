<template>
 var primeiroApp= new Vue({
   el: '#primeiroApp',
   data: {
   contador: 0
 }
});
 
setInterval(function() {
    primeiroApp.contador += 1;
}, 1000);
</template>