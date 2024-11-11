const express = require('express');
const jwt = require('jsonwebtoken');
const login = express.Router();
const db = require('../config/database');

//Inicio de sesion
login.post("/login", async (req, res, next) => {
    const { admin_mail, admin_password} = req.body;
    const query =  `SELECT * FROM admin WHERE admin_mail = '${admin_mail}' AND admin_password = '${admin_password}';`;
    const rows = await db.query(query);

    if(admin_mail && admin_password) {
        if(rows.length == 1) {
            const token = jwt.sign({
                admin_id: rows[0].admin_id,
                admin_mail: rows[0].admin_mail
             }, "debugkey");
            return res.status(200).json({ code: 200, message: token });
        }
        else{
            return res.status(200).json({ code: 401, message:"Usuario y/o contraseña incorrectos" });
        }
    }
    return res.status(200).json({ code: 500, message: "Campos Incompletos"});
});

module.exports = login;