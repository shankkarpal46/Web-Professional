const numbers = [23,67,89,23,90]

//delete numbers[3]

console.log(numbers)

// for(let i in numbers){
//     console.log(i)
// }

for(let i of numbers){
    console.log(i)
}

// for each 
// numbers.forEach((n)=>console.log(n*n))


const square = numbers.map((n)=>n*n)

console.log(square)

console.log(numbers.filter((n)=>n<50))

console.log(numbers.filter(n=>n>50).map(n=>n*n))

const addition = numbers.reduce((a,b)=>a+b)

console.log(addition)

