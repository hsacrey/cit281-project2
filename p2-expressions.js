/*
    CIT 281 Project 2
    Name: Hunter Sacrey
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//Returns a random letter from the alphabet
const getRandomLetter = function(){
    return alphabet[getRandomInteger(0,alphabet.length)];
}

//Returns a string of random letters with a random length
const getRandomString = function(minLength, maxLength) {
    let result = "";
    let lengthOfOutputString = getRandomInteger(minLength, maxLength);
    for (let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter();
    }
    return result;
}

//Returns a random string sorted in ascending order
const getSortedString = function(string){
    return string.split('').sort().join('');
}


console.log(getSortedString(getRandomString(10,20)));