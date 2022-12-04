
//1.
let markMass = 78
let markHeight = 1.69

let johnMass = 92
let johnHeight = 1.95

//2.
let markBMI = markMass / markHeight ** 2
let johnBMI = johnMass / johnHeight ** 2

//3.
let markHigherBMI = markBMI > johnBMI

console.log("Mark: Mass " + markMass + "kg; Height " + markHeight + "m " + "BMI:" + markBMI)
console.log("John: Mass " + johnMass + "kg; Height " + johnHeight + "m " + "BMI:" + johnBMI)

console.log("Mark has a higher BMI than John? " + markHigherBMI)