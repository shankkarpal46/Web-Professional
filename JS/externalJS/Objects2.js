function Product(id,name,price){
    this.id = id;    
    this.name = name;
    this.price = price;
}

const p1 = new Product(101,'Laptop',60000)
console.log(p1)

const p2 =  new Product(102,'Mobile',45000)
console.log(p2)

console.log("************************************************************")

//dynamic structuring
let schoolId = 101
let schoolName = "Daffodils"

const school = {schoolId,schoolName}
console.log(school)

console.log('===============================================================')

//object destructuring 

const category = {categoryId:101, categoryName:"Electronics"}

const {categoryId,categoryName} = category
console.log(categoryId)

function details({categoryId,categoryName}){
    console.log(categoryId)
    console.log(categoryName)
}

details(category)

console.log("=============================================================")
const newProduct ={...p1,productDesc:"description"}
console.log(newProduct)

console.log(Object.keys(newProduct))
console.log(Object.values(newProduct))
console.log(Object.entries(newProduct))
