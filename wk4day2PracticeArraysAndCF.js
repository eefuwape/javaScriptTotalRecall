// III. Arrays & Control Flow

// A. Talk about it:

// 1. What are the things in an array called?

// Elements

// 2. Do Arrays guarantee those things will be in order?

// In memory yes, if the array, not necessarily, the code may need to wire additonal code to ensure data
// is stored in order

// 3. What real-life thing could you model with an array?

// Customer contact info & data collection

// B. Easy Does It

// 1. Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["Values are like fingerprints. Nobody's are the same, but you leave 'em all over everything you do. - Elvis Presley", "Someday is not a day of the week. - Denise Brennan-Nelson", "People often say that motivation doesn't last. Well, neither does bathing -- that's why we recommend it daily. - Zig Ziglar"]

// C. Accessing elements

// Given the following array const randomThings = [1, 10, "Hello", true]

// 1. How do you access the 1st element in the array?

const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0])

// 2. Change the value of "Hello"to "World"

randomThings[2] = "World"

// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

console.log(randomThings)

// D. Change values

// 1. Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 2. What would you write to access the 3rd element of the array?

console.log(ourClass[2])

// 3. Change the value of "Github" to "Octocat"

ourClass.splice(4, 1, "Octocat")
console.log(ourClass)

// 4. Add a new element, "Cloud City" to the array

ourClass.push("Cloud City")

// E. Mix It Up

//Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20]

// 1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.

myArray.push("Aegon")
myArray.push("Mabel")
console.log(myArray)

// 2. Remove the 5 from the beginning of the array.

myArray.shift()
console.log(myArray)

// 3. Add the string "Bob Marley" to the beginning of the array.

myArray.unshift("Bob Marley")
console.log(myArray)

// 4. Remove the string of your choice from the end of the array.

myArray.pop()
console.log(myArray)

// 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

newMyArray = myArray.toReversed() // will not mutate myArray
console.log(myArray) // myArray still intact
console.log(myArray.reverse()) // function returns nothing, array is mutated i.e changed

// F. Biggie Smalls

// Create a variable that contains an integer.

let number = Math.floor(Math.random() * 200) 

// Write an if ... elsestatement that:

// 1. console.log()s "little number" if the number is entered is less than 100

return (typeof number === "number" && number < 100) ? console.log("little number")

// console.log()s big number if the number is greater than or equal to 100.

: (typeof number === "number" && number >= 100) ? console.log("Big Number")

: console.log("Invalid Input")


// G. Monkey in the Middle

// Write an if ... else if ... else statement:

// 1. console.log() little number if the number entered is less than 5.

let numG
if (numG < 5) {
    console.log("Little Number")
} 

// 2. If the number entered is more than 10, log big number.

else if (numG > 10) {
    console.log("Big Number")
} 

// 3. Otherwise, log "monkey".

else {
    console.log("Monkey")
}

// H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
// log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

console.log(kristynsCloset.splice(6, 0, "raybans"))

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

console.log(kristynsCloset.splice(5, 1, "stained knit hat"))

// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

console.log(thomsCloset[0,1])

// 5. In the same way, access one item from Thom's pants array.

console.log(thomsCloset[1,0])

// 6. Access one item from Thom's accessories array.

console.log(thomsCloset[2,1])

// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log("Thom is looking fierce in a " + thomsCloset[0,1] + ", " + thomsCloset[1,0] + " and " + thomsCloset[2,1] + "!")

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1,2] = "footie pajamas"
console.log(thomsCloset)