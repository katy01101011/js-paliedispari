// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("Scegli 'pari' o 'dispari'")
console.log(userChoice);
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let botNumber = randomIntNumber(1, 5);
console.log(botNumber);

// Sommiamo i due numeri
const sum = userNumber + botNumber;
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const isOddOrEven = oddOrEven(sum);
console.log(isOddOrEven);

// Dichiariamo chi ha vinto.
let winner;
if (userChoice === isOddOrEven) {
    winner = 'Hai vinto!';
} else {
    winner = 'Hai perso :(';
}
console.log(winner);

// FUNCTIONS

/**
 * Description // Generate a random integer number between a minimum and maximum numbers included
 * @param {Number} min // Minimum for generate number
 * @param {Number} max // Maximum for generate number
 * @returns {Number} // Result: random integer number
 */
function randomIntNumber(min, max) {
    let randomInteger = Math.floor(Math.random() * max + min);
    return randomInteger;
}

/**
 * Description // Determinate whether the number is odd or even
 * @param {Number} numberToCheck // Number to check
 * @returns {String} // Result: 'pari' or 'dispari'
 */
function oddOrEven(numberToCheck) {
    let checkedNumber;
    if (numberToCheck % 2 === 0){
        checkedNumber = 'pari'
    } else {
        checkedNumber = 'dispari'
    }
    return checkedNumber;
}