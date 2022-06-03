## Project 2

I used the Command Line Interface (CLI) to create and work with a git repository on my system, I also created a .gitignore file.

I created and executed Javascript files where I refactored the last project's code and practiced function expressions, using git to save my progress.

### Primary concepts: using git via CLI and Visual Studio Code (VSCode) Source Control, writing and executing non-web server Node.js JavaScript code, refactoring JavaScript code

#### p2-random.js:
```javascript
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
```
#### p2-expressions.js:
```javascript
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
```
