//jshint esversion:6
// using express and bosyParser 
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

//making app with express
const app = express();

// To use EJS template with express
app.set('view engine', 'ejs');
var items = [];
var workItems = [];
//to use bodyParser in our file
app.use(bodyParser.urlencoded({extended : true}));

//to use external files in local folder called public
app.use(express.static("public"));


app.get("/" , function(req,res){
    //get current day with js modules
    let day = date.getDate();
    // to use ejs template and send data with it
    res.render("list" ,  {ListTitle : day , item : items});
});
//form data recive with post
app.post("/" , function(req,res){
    var item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
})

//This code is working fine

// app.get("/work" , function(req,res){
//     // to use ejs template and send data with it
//     res.render("list" ,  {ListTitle : "Work List" ,item :workItems });
// });


// app.post("/work" , function(req,res){
//     var item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })

app.listen(3000,function(){
    console.log("Server is running on port 3000 ")
});