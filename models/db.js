const mysql = require('mysql')

const dbconfig = require('../configs/database.json');

const connection = mysql.createConnection({
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Mysql connected...");
});

module.exports = connection