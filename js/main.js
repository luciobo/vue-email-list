
// Dall'oggetto globale Vue, estrai in una variabile la funzione "createApp"
const { createApp } = Vue;

// invochiamo la funzione passando come argomento un oggetto

// crea l'istanza di Vue. Sull'istanza invochiamo la funzione
// mount. Questa si aspetta come un argomento un selettore html valido
createApp({
    // data: function () {}
    data() {
        // la funzione data deve SEMPRE ritornare un oggetto
        return {
            listaMailUtenti: []

        };
    },
    methods: {
        datiScaricati() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((risposta) => {

                    console.log(risposta);

                    console.log(risposta.data);

                    console.log(risposta.data.response)

                    this.listaMailUtenti.push(risposta.data.response);

                }

                )
        },

    },

    beforeMount() {
    },
    mounted() {
        this.datiScaricati()
    }

}).mount("#app")