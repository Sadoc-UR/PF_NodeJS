const express = require('express');
const jwt = require('jsonwebtoken');
const user = express.Router();
const db = require('../config/database');

user.post("/signin", async (req, res, next) => {

    const  {user_first_name, user_last_name, user_phone, user_mail, user_address, user_password} = req.body

    if(user_first_name && user_last_name && user_phone && user_mail && user_address && user_password) {

        let query = "INSERT INTO user (user_first_name, user_last_name, user_phone, user_mail, user_address, user_password)";
        query += `VALUES ('${user_first_name}', '${user_last_name}', '${user_phone}', '${user_mail}', '${user_address}', '${user_password}')`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Usuario registrado correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" })
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos por parte del registro" });
});

user.post("/login", async (req, res, next) => {
    const { user_mail, user_password} = req.body;
    const query =  `SELECT * FROM user WHERE user_mail = '${user_mail}' AND user_password = '${user_password}';`;
    const rows = await db.query(query);

    if(user_mail && user_password) {
        if(rows.length == 1) {
            const token = jwt.sign({
                user_id: rows[0].user_id,
                user_mail: rows[0].user_mail
             }, "debugkey");
            return res.status(200).json({ code: 200, message: token });
        }
        else{
            return res.status(200).json({ code: 401, message:"Usuario y/o contraseña incorrectos" });
        }
    }
    return res.status(200).json({ code: 500, message: "Campos Incompletos"});
});

//Para borrar a un usuario con su ID
user.delete("/:id([0-9]{1,3})", async (req, res, next) =>{
    const query = `DELETE FROM user WHERE user_id=${req.params.id}`;

    const rows = await db.query(query);

    if(rows.affectedRows == 1){
        return res.status(200).json({ code: 200, message: "Usuario borrado correctamente" });
    }
    return res.status(404).json({ code: 404, message: "Usuario no encontrado"});
});

user.put("/:id([0-9]{1,3})", async (req, res, next) =>{
    const { user_first_name, user_last_name, user_phone, user_mail, user_address, user_password } = req.body;

    if(user_first_name && user_last_name && user_phone && user_mail && user_address && user_password) {
 
        let query = `UPDATE user SET user_first_name='${user_first_name}', user_last_name='${user_last_name}', user_phone='${user_phone}',`;
        query += `user_mail='${user_mail}', user_address='${user_address}', user_password='${user_password}' WHERE user_id=${req.params.id};`; 

        const rows = await db.query(query);

        if ( rows.affectedRows == 1) {
            return res.status(200).json( {code: 200, message: "Usuario actualizado correctamente" });
        }

        return res.status(500).json({code: 500, message: "Ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.patch("/:id([0-9]{1,3})", async (req, res, next) =>{

    if(req.body.user_first_name){
        let query = `UPDATE user SET user_first_name='${req.body.user_first_name}' WHERE user_id=${req.params.id}`;
        const rows = await db.query(query);

        if ( rows.affectedRows == 1) {
            return res.status(200).json( {code: 200, message: "Usuario actualizado correctamente" });
        }
        return res.status(500).json( {code: 500, message: "Ocurrio un error"});
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" })
});

//Para obtener todos los usuarios
user.get('/', async (req, res, next) => {
    const query = "SELECT * FROM user";
    const rows = await db.query(query);

   return res.status(200).json({ code: 200, message: rows});
});

module.exports = user;
