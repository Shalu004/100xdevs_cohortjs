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
