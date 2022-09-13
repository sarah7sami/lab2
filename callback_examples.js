var hello = name => `welcome, ${name}`

// w no parameter 
var sayHello = () => "Hello World"

console.log("sarah")
console.log(sayHello)

// callback 
// a blocking function is where there is any input/output happening - acts as a condition 

function f1(){
    console.log('f1')
}

function sum(a,b){
    let c = b+a
    console.log(`sum: ${c}`)
    return c
}

// create a callback function that calls f1 and sum
function callback(f,x) {

}
