/*
Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const arrZucchine = [
    {
        tipo : "a",
        peso : 5,
        lunghezza :15
    },

    {
        tipo : "a",
        peso : 5,
        lunghezza :15
    },

    {
        tipo : "a",
        peso : 5,
        lunghezza :15
    },

    {
        tipo : "a",
        peso : 2,
        lunghezza :5
    },

    {
        tipo : "a",
        peso : 5,
        lunghezza :15
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
        peso : 5,
        lunghezza :15
    },

];

let totaleSommaGrandi = 0;
let totaleSommaPiccole = 0;

const arrZucchinePiccole = [];
const arrZucchineGrandi = [];
//ciclo per estrarre gli oggetti dal array principale controllare la lunghezza ed eseguire il push in due array separati
for ( let zucchina of arrZucchine){
    console.log(zucchina);
    const {lunghezza,peso} = zucchina;
    console.log(lunghezza);

    const lunghezzaZucchine = (lunghezza < 15) ? arrZucchinePiccole.push(zucchina) : arrZucchineGrandi.push(zucchina);
    

   
}


    console.log("zucchine piccole",arrZucchinePiccole);
    console.log("zucchine grandi",arrZucchineGrandi);

    //ciclo calcolo somma peso zucchine grandi
    for( let zucchina of arrZucchineGrandi){
        console.log(zucchina);
        const {peso} = zucchina;
        console.log("peso zucchine grandi",peso);
        totaleSommaGrandi = totaleSommaGrandi + peso;
                
    
        
        
    
       
    }
    console.log("il peso totale delle zucchine piccole è :",totaleSommaGrandi);

    //ciclo calcolo somma peso zucchine grandi
    for( let zucchina of arrZucchinePiccole){
        console.log(zucchina);
        const {peso} = zucchina;
        console.log("peso zucchine piccole",peso);
        totaleSommaPiccole = totaleSommaPiccole + peso;
                
    
        
        
    
       
    }
    console.log("il peso totale delle zucchine piccole è :",totaleSommaPiccole);





    



    




    



