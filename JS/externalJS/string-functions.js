console.log("Hello".toLowerCase())
console.log("Hello".toUpperCase())
console.log("Hello".includes("Hell"))

const products = ["Dell Laptop","Dell Mouse","HP laptop","HP mouse","dell keyboard"]


for(let i of products){
    if (i.includes('Dell') || i.includes('dell')){
        console.log(i)
    }
}

console.log(products.filter(p=>p.toLowerCase().includes('dell')))

console.log(products.filter(p=>!p.toLowerCase().includes('dell')))

console.log("Hello".padStart(10,"*"))

console.log("Hello".padEnd(10,"*"))

console.log("Hello".startsWith("B"))

console.log("Hello".startsWith("H"))

console.log(products.filter(p=>p.toLowerCase().endsWith("p")))

console.log("    Hello".trimStart())
console.log("Hello      ".trimEnd())

console.log("M".repeat(20))

console.log("Hello".toLowerCase().replace("h","l"))

console.log("We are learning Javascript".split(" "))

string1 = "We are learning Javascript".split(" ")

console.log("We are learning Javascript".toLowerCase().split(" ").length)

const words = "We are learning Javascript".split(" ")

console.log(words.filter(word=>word.toLowerCase().startsWith("j")).length)