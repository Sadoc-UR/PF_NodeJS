const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.status(200);
    res.send("Bienvenido");
});

app.listen(3000, () => {
    console.log("El servidor se inicio con exito...");
});


//Este es mi main para el manejo principal