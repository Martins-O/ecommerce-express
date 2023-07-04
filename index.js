const express = require('express')
const db = require('./config/db')
const session = require("express-session");
require('dotenv').config();
const app = express();

console.log(`::::::Server is starting::::::`);

const port = process.env.PORT ||`127.0.0.1`;


app.use(session({
    secret : 'ecommerce',
    resave : true,
    saveUninitialized : true
}));

app.use(express.json());
app.use("api/v1/users", require('./routes/userRoutes'))
app.listen(port, () => {
    console.log(`::::::Server started on port ${port}::::::`);
});




