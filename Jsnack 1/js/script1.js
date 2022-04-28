/*
Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

//1. creo array di oggetti

const arrZucchine = [
    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

];

console.log(arrZucchine);

let pesoTotale = 0;

//ciclo for of per estrarre gli oggetti dall array
for(let zucchina of arrZucchine){
    console.log(zucchina);
    const {peso} =  zucchina;
    console.log(peso);
    pesoTotale = pesoTotale +peso;
}


console.log("il peso totale delle zucchine è :",pesoTotale);