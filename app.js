//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,function(req,res){
  console.log("Port is running");
});

//common pages
app.get("/",function(req,res){
res.render("home");
});

app.get('/login',function(req,res){
res.render("login");
});

app.get('/a_fac',function(req,res){
res.render("attend_fac");
});

app.get('/a_stu',function(req,res){
res.render("attend_stu");
});

app.get('/abt',function(req,res){
res.render("about");
});

app.get('/dash',function(req,res){
res.render("dash");
});

app.get('/help',function(req,res){
  res.render("help");//chatbot
});
//login -- 1. user 2. fac/admin
