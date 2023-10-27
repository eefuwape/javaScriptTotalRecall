// IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

const printGreeting = (name) => {
    console.log("Hello there, " + name +"!")
}

printGreeting("Slimer");

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

const printCool = name  => {
    console.log(name + " is cool")
}

printCool("Captain Reynolds");

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = height => {
    let volume = height ** 3 
    return volume
}

console.log(calculateCube(5))

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
// false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. 
// In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

function isVowel(char) {
    // Return false if it's not a character
    if(char.length > 1) return false
    // Return false if it's not a string
    if(typeof char !== 'string') return false
    // Vowel can be uppercase or lowercase
    const letter = char.toLowerCase()

    const vowels = ['a', 'e', 'i', 'o', 'u']

    // using includes
    // if(vowels.includes(letter)) return true

    for(const vowel of vowels) {
        if(vowel === letter) return true
    }
    
    // if we it's not a vowel that means we don't meet our condition. It will always return false
    return false
}

console.log(isVowel('E'))

console.log(isVowel("B"));

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an 
// array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (stringX, stringY) => {
    const result = []
    if (typeof stringX === 'string' && typeof stringY === 'string') {
        result.push(stringX.length)
        result.push(stringY.length)
    }
    else
        return 'Enter a valid string'
    return result    
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
// The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (stringArray) => {
    let wordLength = []
    stringArray.forEach(element => {
        if (typeof element === 'string') {
            wordLength.push(element.length)
        } else
            return "Enter valid array of strings."
    });
    return wordLength
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

const maxOfThree = (x, y, z) => {
    if (typeof x === 'number' && typeof y === 'number' && typeof z === 'number') {
        if (x >= y && x >= z)
            return x
        else if (y >= x && y >= z) {
            return y
        }
        else if (z >= x && z >= y) {
            return z  
        }
        // else if (x === y && x > z) {
        //     return x
        // }
        // else if (x === z && x > y) {
        //     return x
        // }
        // else if (y === z && y > x) {
        //     return y
        // }
        // else if (x === y && y === z) {// all numbers are the same
        //     return x
        // }
    } else
        return "Enter valid numbers"
}

console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
/* Write a function printLongestWord that accepts a single argument, an array of strings. The method should return 
   the longest word in the array. In case of a tie, the method should return the word that appears first in the array. */

const printLongestWord = (arrayOfWords) => {
    let largestWordLength = 0, tracker, largestWord
    arrayOfWords.forEach(element => {
        if (typeof element !== 'string') {
            console.log("Enter valid array of strings")
        } else {
            tracker = element.length
            if (tracker > largestWordLength) {
                largestWord = element
                largestWordLength = tracker
            }
        }
    });
    return largestWord
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanut butter", "big", "Todd"]));

