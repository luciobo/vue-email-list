
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
            listaMail: []
        };
    },
    methods: {
        datiScaricati() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function (risposta) {

                    console.log(risposta);

                    console.log(risposta.data);

                    console.log(risposta.data.response)
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