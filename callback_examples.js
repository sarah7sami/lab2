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

// create a callback function that calls f1 and sum -- this is actually not callback i wanted to see if it works this way or not
// however with callback you add the function as a freaking variable, then when calling it you pass the function like -sum-
function callback(f,x) {
    if (x>0 && f>0) {
        sum(x,f)
    }
    else {
        console.log('dude')
    }
}

callback(10,20)

function testCallBack(x, success, fail) {
    if (x==10) {
        success()
    } else {
        fail()
    }
}

testCallBack(100,
    ()=>console.log("success called"),
    ()=>console.log("fail called")
    )

