function hello(callback){
    console.log("Hello")
    callback()
}

hello(()=>console.log("Bye"))
