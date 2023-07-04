const express = require('express')
const db = require('./config/db')
require('dotenv').config();
const app = express();

console.log(`::::::Server is starting::::::`);

const port = process.env.PORT ||`127.0.0.1`;

db.connect((error) => {
    if (error) {
        console.log(error)
    }else {
        console.log('Mysql is connected')
    }
})

app.use(express.json());
app.use("api/v1/users", require('./routes/userRoutes'))
app.listen(port, () => {
    console.log(`::::::Server started on port ${port}::::::`);
});




