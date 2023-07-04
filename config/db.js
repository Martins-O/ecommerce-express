require("dotenv").config();
const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

pool.connect((error) => {
    if (error) {
        console.log(error)
    }else {
        console.log('Mysql is connected')
    }
})



module.exports = pool;