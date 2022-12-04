/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement
*/

const markMass = 78
const markHeight = 1.69

const johnMass = 92
const johnHeight = 1.95

/*
const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;
*/

const markBMI = markMass / (markHeight ** 2)
const johnBMI = johnMass / (johnHeight ** 2)

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI} is higher than Mark's BMI (${markBMI}))!`)
}