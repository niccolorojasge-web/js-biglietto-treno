//il programma dovra` chiedere i km che vuole percorrere e l`eta`//
let etaPassegero = parseInt(prompt("quanti anni hai?"))
console.log(etaPassegero);

let kmPercorsi = parseInt(prompt("quanti km vuoi percorrere?"))
console.log ( kmPercorsi);

const costoPerkm= 0.21;

//se possiedi meno di 18 anni ci sara uno sconto del 20%//
let prezzoFinale = costoPerkm * kmPercorsi;
console.log(" prezzo finale non scontato" + prezzoFinale )


if (etaPassegero < 18){
    prezzoFinale = prezzoFinale * 0.8
    
console.log( "prezzoUnder 18 " +  prezzoFinale )
}else if (etaPassegero> 65){
  prezzoFinale=prezzoFinale * 0.6 
console.log("prezzo over 65" + prezzoFinale)
}else{
    console.log("prezzo non scontato" + prezzoFinale)

}

//calcolare prezzo biglietto ad ogni km //

