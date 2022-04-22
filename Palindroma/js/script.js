// Chiedere all’utente di inserire una parola
const aWord = prompt('Digita una parola e ti dirò se è palindroma :)');
console.log(aWord);

// Creare una funzione per capire se la parola inserita è palindroma
/**
 * Description // Check if word is palindrome
 * @param {String} userWord // Word to check
 * @returns {Boolean} // Result: word checked: true or false
 */
function isWordPalindrome(userWord) {
    userWord = aWord.toLowerCase();
    let j = Math.ceil(userWord.length / 2);

    let isPalindrome = true;
    for (let i = 0; i < j; i++) {
        let firstCheckLetter = userWord.charAt(i);
        let secondCheckLetter = userWord.charAt(userWord.length - (i + 1));

        if (firstCheckLetter !== secondCheckLetter) {
            isPalindrome = false;
        }
    }
    console.log(isPalindrome);
    return isPalindrome;
}

// Controllare con la funzione se la parola inserita è palindroma o no
let palindromeOrNot = isWordPalindrome(aWord);
if (palindromeOrNot === true) {
    document.getElementById('palindroma').innerHTML = 'La parola che hai inserito è palindroma';
} else {
    document.getElementById('palindroma').innerHTML = 'Ciò che hai digitato è una semplice, triste e comune parola :(';
}