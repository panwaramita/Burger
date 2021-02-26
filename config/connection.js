const mysql=require('mysql');
connection = mysql.createConnection({
    host: "pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "d5pytxxh1jy7j36t",
    password: "rxlqmmawnbl1j2ed",
    database: "mkvvtsb6l4ys5cgx"
});
connection.connect();
module.exports=connection;