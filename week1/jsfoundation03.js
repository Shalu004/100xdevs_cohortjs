console.log("Hello world!");
let a=2;
a=4;
console.log(a);

var b=2;
var b=4;
console.log(b);

// var is not used due to functional score, let is used.
// to run the code>> 1. to terminal 2. type node filename.js

//>>>array

//array of object

const allUser=[{
    firstName:"shalu",
    gender: "female"
},{
    firstName: "muskan",
    gender: "female"
},{
    firstName: "ron",
    gender: "male"
}];

for(let i=0;i<allUser.length;i++){
    if(allUser[i]["gender"]=="male"){
        console.log(allUser[i]["firstName"]);
    }
}

//function

function sum(a, b){
    return a+b;
}
const val=sum(283,38);
console.log(val);

// fnToCall:-
// function sum(a, b, fnToCall){
//     let result=a+b;
//     fnToCall(result);
//     return result;
// }
// function display(data){
//     console.log(data);
// }
//  const ans=sum(2,5,display);
//  console.log(ans);

 // function can call another function ----callback
 function summation(a,b){
    let result=a+b;
    return result;
 }
 function displaydata(data){
    console.log("Result of sum is"+ data);
 }
 function displaypassivedate(data){
    console.log("sum's result is: "+ data);
 }
 const answer=summation(3,5);



 //Synchronous--All the code we’ve written until now, All code running line by line (hence sync) 

 // Asynchronous functions in programming are those that allow a program to start a potentially longrunning operation and continue executing other
//tasks without waiting for that operation to complete. 

//asynchronous function
 function fetchdata(){
    console.log("Hello world!");

    setTimeout(()=> {
        console.log("Hi!");
    }, 3000);
 }
 fetchdata;