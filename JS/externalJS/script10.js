function fetchData(callback){
    let data = "Data from the server"
    callback(data)
}

fetchData((s)=>console.log(s))