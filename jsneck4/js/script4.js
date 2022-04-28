/*
Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
Stampa a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const arrBici =[
    {
        nome : "bici-1",
        peso : 30
    },

    {
        nome : "bici-2",
        peso : 35
    },

    {
        nome : "bici-3",
        peso : 20
    },

    {
        nome : "bici-4",
        peso : 40
    },

    {
        nome : "bici-5",
        peso : 50
    },
];


for( let bici of arrBici){
    console.log(bici);
    const { nome , peso} = bici;
    stampa(nome,peso);
    
}


function stampa(par1,par2) {
    document.querySelector("body").innerHTML = 
    `<ul>
    <li>Tipo bici : ${par1}</li>
    <li> Peso bici: ${par2} kg</li>
    </ul>` ;
    
}


