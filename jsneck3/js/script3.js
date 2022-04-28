/*
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/





function reverseMessage (stringa){
    return stringa.split("").reverse().join("");
   

}

reverseMessage("paolo");
console.log(reverseMessage("paolo"));
