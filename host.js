const Express = require('express');
const app = new Express();
const fs = require('fs');
const path = require('path');

const port = 8080;
//const staticPrefix = "www/";

app.get('/name', serveNameAsync);
app.get('*', serveNotFoundSync);

app.listen(port, () => console.log("Server started at port " + port));

function serveNameAsync(req, res){
    msg = {
        vname: req.query.vname, 
        nname: req.query.nname
    };
    
    msgString = JSON.stringify(msg);
    res.send(msgString);
    //res.send(fs.readFileSync(staticPrefix + 'index.html', "utf8"));
}
/*
function serveRootAsync(req, res){
    fs.readFile(staticPrefix + 'index.html', "utf8", (err, data) => {
        if (err) throw err;
        res.send(data);
    }) 
}
*/

function serveNotFoundSync(req, res){
    res.send("Err not found");
    //res.send(fs.readFileSync(staticPrefix + '404.html', "utf8"));
}