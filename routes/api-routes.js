var db = require("../models");

var express = require("express");

var app = express();

module.exports = function(app){


    app.get("/", function(req,res){
        // res.send("Its working!");
        db.Burger.findAll({}).then(function(data){
            var hbsObject = {
                burgers: data
            };

            console.log(hbsObject);
            res.render("index", hbsObject);
            console.log("we are in burger");
        })

    });


    app.post("/burgers", function(req,res){
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function(data){
            res.json({ id: res.insertId});
        })

    });


    app.put("/burgers/:id", function(req,res){
        db.Burger.update({
            devoured: req.body.devoured
        },{
            where: {
                id: req.params.id
            }
        }).then(function(data){
            res.json(data);
        })

    });
};