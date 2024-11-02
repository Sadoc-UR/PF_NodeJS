const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
});

pool.query = util.promisify(pool.query);
module.exports = pool;

//Lo que me conecta con mi base de datos(ya echo )
//Pendiente de modificar 
//pokemon para que sea mi tabala de users