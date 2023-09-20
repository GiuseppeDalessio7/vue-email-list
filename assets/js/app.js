
/* 
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const { createApp } = Vue
  createApp({
    data() {
      return {
        generateMail: "",
      }
    },

  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail') //promessa
    .then(response =>{
        console.log(response);
        console.log(response.data.response);
        this.generateMail = response.data.response
        
    })
  },

  methods: {

 
 
 
 
 
 
 
 
 
 

  }
 
 
 
 
 

  
  }).mount('#app')