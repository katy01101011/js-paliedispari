// Chiedere all’utente di inserire una parola
// const userWord = prompt('Inserisci una parola e io controllerò se è palindroma :)');
// console.log(userWord);

const userWord = 'ciao';
console.log(userWord);

// Creare una funzione per capire se la parola inserita è palindroma
// function isPalindrome(wordToCheck) {
//     wordToCheck = userWord;
// }

// Creo un array vuoto che conterrà le lettere della parola da controllare
let i = 0;
let wordLetter;
let sameLetter;
let j = Math.ceil(userWord.length / 2);


for (i = 0; i < j; i++) {
    let firstCheckLetter = userWord.charAt(i);
    let secondCheckLetter = userWord.charAt(userWord.length - (i + 1));

    if (firstCheckLetter === secondCheckLetter) {
        sameLetter = true;
    } else {
        sameLetter = false;
    }
}

console.log(sameLetter);