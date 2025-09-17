//creating a http server
//express
//node default library=> node

//SYNTAX FOR CREATING A HTTP SERVER USING EXPRESS:-
const express= require("express");

const app = express();

app.get("/", function(req, res){
   const n= req.query.n;
   res.send("hi there");
})
app.listen(3000);

//ANOTHER EXAMPLE
/*
const express = require("express");

function calculateSum(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

const app = express();

app.get("/", (req, res) {
    const n = req.query.n;
    const ans= calculateSum(n);
    res.send(ans.toString());
});
app.listen(3000);
*/
