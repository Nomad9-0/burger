var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Create Routes and logic
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
