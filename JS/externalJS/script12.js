let arr = [12,56,89,90,101] 

console.log(arr)

console.log("Length  is:",arr.length)

console.log(arr[2])

arr[1]=100

console.log(arr)

arr[9] = 677

console.log(arr)

arr.push(99)

console.log(arr)

console.log("Popped element:-",arr.pop())
console.log(arr)

console.log(arr.shift())
console.log(arr)

console.log(arr.unshift(980)) //length of the array
console.log(arr)

// const newArray = [arr,90,23,67,678,9]
// console.log(newArray)

const newArray = [...arr,90,23,67,678,9]
console.log(newArray)