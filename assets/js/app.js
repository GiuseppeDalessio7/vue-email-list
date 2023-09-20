
/* 
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const { createApp } = Vue
createApp({
    data() {
        return {
            generateMail: [],
            
            
        }
    },

    mounted() {

        //ciclo con il for per fare dieci volte la stessa operazione
        for (let i = 0; i < 10; i++) {
           axios.get('https://flynn.boolean.careers/exercises/api/random/mail') //promessa
                .then(response => {
                    // console.log(response);
                    // console.log(response.data.response);
                    this.generateMail.push(response.data.response)
                   
                })

            // .catch(error => {
            // console.log(error);
            // })


        }
    },


    methods: {

    }







}).mount('#app')