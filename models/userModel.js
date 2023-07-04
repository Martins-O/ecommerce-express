const mysql = require('mysql');
const { DataTypes } = require('sequelize');
//
// function model(sequelize) {
//     const User = sequelize.define{
//         firstName:
//             {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 required: true
//             },
//         lastName:
//             {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 required: true
//             },
//         email:
//             {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 required: true
//             },
//         password:
//             {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 required: true
//             }
//     };
//
//     User.addHook('beforeCreate', (user) => {
//         delete user.dataValues.password;
//         return user;
//     });
//
//     return sequelize.define('User', attributes, options);
// }


function defineUserModel(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        }
    });

    User.addHook('beforeCreate', (user) => {
        delete user.dataValues.password;
        return user;
    });

    return User;
}

// const userService = (res, req) => {
//
// };