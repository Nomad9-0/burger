var mysql = require("mysql");

module.exports = function(app) {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        // Yours password
        password: "*********",
        database: "burgers_db"
    });

    connection.connect(function(err) {
        if (err) {
        console.error("error connecting: " + err.stack);
        return;
        }
    
        console.log("connected as id " + connection.threadId);
    });
};