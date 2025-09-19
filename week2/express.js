const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username == "ron" && password == "pass"){
        res.json({
            msg:"user found"
        })
    }
});
app.listen(3000);