// II. Loops

// A. The basics

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive

for (let i = 0; i <= 10; i++)
    console.log(i)

// 2. Write a loop that will print out all the numbers from 10 up to and including 400

let num = 10
while (num <= 400) {
    console.log(num)
    num++
}

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

for(let num3 = 12; num3 <= 4000; num += 3) {
    console.log(num3)
}

// B. Get even

// 1. Print out the numbers that are within the range of 1 - 100

for (let j = 1; j <= 100; j++) {
    console.log(j)
}

// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let j = 1; j <= 100; j++) {
    if (j % 2 === 0) { 
        console.log(j + " <-- is an even number")
    } else {
        console.log(j)
    }
}

// C. Give me Five
/* For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Example Output:

I found a 5. High five!
I found a 10. High five! */

for (let i = 0; i<= 100; i++) {
    if (i % 5 === 0) {
        console.log(`I found a ${i}. High five!`)
    }
}

/* 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:

I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five! */

for (let i = 0; i<= 100; i++) {
    if (i % 5 === 0) {
        console.log(`I found a ${i}. High five!`)
    } else if (i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd.`)
    }

}

// 3. For numbers divisible by both three and five, be sure your code prints both messages

for (let i = 0; i<= 100; i++) {
    if (i % 5 === 0) {
        console.log(`I found a ${i}. High five!`)
    } else if (i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd.`)
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd. High five!`)
    }
}

// D. Savings account

// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

let bank_account = 0;
for (let i = 1; i <= 10; i++) {
    bank_account += i
}
console.log('$' + bank_account)

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i
}
bank_account = sum * 2
console.log('$' + bank_account)

