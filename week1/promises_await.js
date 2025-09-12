//promise is just a class that makes callbacka and async functions more readable
//whenever your create it you have to pass it a function as the first argument, 
//the function you passed should have resolve AS the argumnet.

// simple argument that passes resolve as output

let p= new Promise(function(resolve) {
    resolve("Hi there!");
});
p.then(function(result){
console.log(result);
});


//async await function
// it is just syntactic sugar.Still uses callbacks/Promises under the hood
//Makes code much more readable than callbacks/Promises
//Usually used on the caller side, not on the side where you define an async function
//Any function that wants to use await, needs to be async

function rock(){
    let p= new Promise(function(resolve){
        resolve("Hello!");
    });
    return p;
}
async function main(){
    let value=await rock();
    console.log(value);
}
main();