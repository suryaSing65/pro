// ***** connect to mysql *****
const mysql = require('mysql');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test" 
});
connection.connect((err)=>{
    if(err){
        console.log('error in connection');
    }
});
module.exports = connection;