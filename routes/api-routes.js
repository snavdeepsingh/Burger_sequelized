var db = require("../models");

var express = require("express");

var app = express();

module.exports = function(app){


    app.get("/", function(req,res){
        res.send("Its working!");
    });


    app.post("/burgers", function(req,res){

    });


    app.put("/burgers/:id", function(req,res){

    });
};