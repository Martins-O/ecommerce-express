const mysql = require('mysql');

const userService = mysql.createPool({
    user_id: {
        type: mysql.createPool.prototype,
        required: true,
        ref: 'user'
    }
})