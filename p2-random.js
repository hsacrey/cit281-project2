/*
    CIT 281 Project 2
    Name: Hunter Sacrey
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//Returns a random letter from the alphabet
function getRandomLetter(){
    return alphabet[getRandomInteger(0,alphabet.length)];
}

//Returns a string of random letters with a random length
function getRandomString(minLength, maxLength) {
    let result = "";
    let lengthOfOutputString = getRandomInteger(minLength, maxLength);
    for (let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter();
    }
    return result;
}

//Returns a random string sorted in ascending order
function getSortedString(string){
    return string.split('').sort().join('');
}


console.log(getSortedString(getRandomString(10,20)));