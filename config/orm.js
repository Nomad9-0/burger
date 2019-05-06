var connection = require("config/connection.js");

module.exports = function(app) {
    
    selectAll();

    insertOne();

    updateOne();

};