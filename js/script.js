/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce. (Per favorire il lavoro vostro e dei tutor mettete inizialmente un timer di 5-10 sec e non 30)

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numbers = 5;

//numeri da indovinare
const numberToGuess = [];

const elUl = document.getElementById("numbers-list");

let counter = 0;
let template = ""
while (numberToGuess.length < 5 && counter < 100){
    
}