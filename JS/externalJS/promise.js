const promise = new Promise(function(resolve,reject){
    let status = false

    if(status){
        resolve(101)
    }
    else{
        reject({error:"To many request from the same network"})
    }
})

promise.then(data =>{
    console.log(data)
}).catch(error => console.log(error))


fetc