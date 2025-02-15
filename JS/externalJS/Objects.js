const arr = new Array(12,34,67)

console.log(arr)

const stud = {
    id:101,
    firstname : "Shankar"
}

console.log(stud["id"],stud.id)

const elec = {
    modelno:1112,
    name : "HP Gold"
}
console.log(elec["modelno"],elec.modelno)

// const school = {
//     schoolId: 101,
//     schoolName: "National School",
//     details: function(){
//         console.log(this.schoolId,this.schoolName)
//     }
// }

// school.details()

const school = {
    schoolId: 101,
    schoolName: "National School",
    details: function(){
        return this.schoolId+" "+this.schoolName
    }
}

console.log(school.details())

const courses={
    courseId: 101,
    coursetopics:["WD","SQL","Java","React","SpringBoot"]
}

console.log(courses["courseId"])
console.log(courses["coursetopics"].length)

courses["coursetopics"].forEach(element => {
    console.log(element)
});

const laptop = {
    id:101,
    model : "DELL INSPIRON",
    price:41000
}

const mobile ={
    id: 102,
    model: "Nokia",
    price: 1500
}

const tablet = {
    id: 103,
    model: "Samsung",
    price: 27000
}

const category ={
    id:"C1",
    categoryName:"Electronics",
    products:[laptop,mobile,tablet]
}

console.log(category)

console.log(category["products"][0]["id"])
console.log(category["products"][0]["model"])
console.log(category["products"][0]["price"])

console.log(category["products"][0]["id"])
console.log(category["products"][1]["model"])
console.log(category["products"][2]["price"])

for(let key in laptop){
    console.log(key,":",laptop[key])
}

category["products"].forEach((product)=>{
    console.log(product.id,product.model,product.price)
})