/*Palidroma
Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
Dichiariamo chi ha vinto.
*/



let word = prompt('inserisci una parola');

let reverseWord = invertiParola(word);

if(word == reverseWord){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  };
 
function invertiParola(str){
  let strReverse = str.split('').reverse().join('');  
  return strReverse;
};



