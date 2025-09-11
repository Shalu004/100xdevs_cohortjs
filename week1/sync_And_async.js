//sync==sequential
//Async== not sequential, one task don't wait for other task to complete

//some async fn that js provide--
//1. setTimeout
//2. fs.readFile-- read file from our file system
//3. Fetch-- fetches data from an API endpoint

//eg Async
function findsum(a){
    let ans=0;
    for(let i=0;i<a;i++){
        ans+=i;
    }
    console.log(ans);
}
function setsumto100(){
    return findsum(100);
}

setTimeout(setsumto100,1000);
console.log("Hello!");