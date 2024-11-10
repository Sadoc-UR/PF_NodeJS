const express = require('express');
const jwt = require('jsonwebtoken');
const user = express.Router();
const db = require('../config/database');

user.get('/', async (req, res, next) => {
    const query = "SELECT * FROM user";
    const rows = await db.query(query);

   return res.status(200).json({ code: 200, message: rows});
});

//Agregar a la base de datos
user.post("/add", async (req, res, next) => {

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

//Para borrar a un usuario con su ID
user.delete("/delete/:id([0-9]{1,3})", async (req, res, next) =>{
    const query = `DELETE FROM user WHERE user_id=${req.params.id}`;

    const rows = await db.query(query);

    if(rows.affectedRows == 1){
        return res.status(200).json({ code: 200, message: "Usuario borrado correctamente" });
    }
    return res.status(404).json({ code: 404, message: "Usuario no encontrado"});
});

//Actualizar los datos de un usuario en la base de datos
user.put("/modify/:id([0-9]{1,3})", async (req, res, next) =>{
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

//Para obtener un usuario por su nombre
user.get('/search/:name([A-Za-z]+)', async (req, res) => {
    const name = req.params.name;
    const userName = await db.query("SELECT * FROM user WHERE CONCAT(REPLACE(user_first_name, ' ', ''), REPLACE(user_last_name, ' ', '')) ='" + name + "';");
    
    if (userName.length > 0) {
        return res.status(200).json({ code: 200, message: userName});
    }
    return res.status(404).json({ code: 404, message: "Usuario no encontrado"});
});


//Actualizar ciertos datos en la base de datos
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


module.exports = user;