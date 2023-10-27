// Objects
/* Let's set up an object data structure. Let's say we have a website that sells products, 
and we have a user of our website, and we want to store that user's data. The object data 
structure is a good way to organize the data from our user. */




/* A. Make a user object
1. Create an object called user.
2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of 
   purchased to an empty array []. Set the other values to whatever you would like. */

const user = {
    name : "Emmanuel Efuwape",
    email : "emmanuel.efuwape@outlook.com",
    age : 42,
    purchased : []
}


/* B. Update the user
   1. Our user has changed his or her email address. Without changing the original user object, 
   update the email value to a new email address. */

user.email = "emmanuel.efuwape@gmail.com"

/* 2. Our user has had a birthday! Without changing the original user object, increment the 
   age value using the postfix operator. Hint: age++ */


user.age++

/* C. Adding keys and values
      You have decided to add your user's location to the data that you want to collect.

1. Without changing the original userobject, add a new key location to the object, and give it a 
   value or some-or-other location (a string). */

user.location = "Pittsburgh, PA"

/* D. Shopaholic!
1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), 
add the string "carbohydrates" to the purchased array. */

user.purchased.push("carbohydrates")

// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), 
// add the string "peace of mind" to the purchased array.

user.purchased.push("peace of mind")

// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), 
// add the string "Merino jodhpurs" to the purchased array.

user.purchased.push("Merino jodhpurs")

// 4. Console.log just the "Merino jodhpurs" from the purchasedarray. */

console.log(user.purchased[2])

/* E. Object-within-object
Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friend with a name and age, we could write: 

user.friend = {
    name: "Grace Hopper",
    age: 85
}
*/
// When we console.log user // we would see the friend object added to our user object. */

/* 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now) */

user.friend = {
    name : "Justin Felt",
    age : 37,
    location : "Pittsburgh, PA",
    purchased : []
}
// 2. Console.log just the friend's name

console.log(user.friend.name)

// 3. Console.log just the friend's location

console.log(user.friend.location)

// 4. CHANGE the friend's age to 55

user.friend.age = 55

// 5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.

user.friend.purchased.push("The One Ring")

// 6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchasedarray.

user.friend.purchased.push("A latte")

// 7. Console.log just "A latte" from the friend's purchasedarray. */

console.log(user.friend.purchased[1])

// F. Loops
// 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), 
// and prints each element to the console.

for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i])
}

// 2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console. 

for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i])
}

// G. Functions can operate on objects
// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
// 2. it should increment the user's age by 1
// 3. make the user's name uppercase. The function does not need a return statement, it will merely modify the user object. 

const updateUser = () => {
    user.age++
    user.name.toUpperCase()
}

/* 2. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead 
of hard-coding it to only work on our user object, make it take a parameter person, and have it modify 
the object that is passed in as an argument when the function is called. Call your 
oldAndLoud function with user as the argument. */

const oldAndLoud = (person) => {
    person.age++
    person.name.toUpperCase()
}

oldAndLoud(user)
console.log(user)