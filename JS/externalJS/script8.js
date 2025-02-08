setTimeout(()=>document.write("Hello"),5000)

function hello(callback){
    document.write("Hello")
    callback()
}

hello(()=>document.write("Bye"))
