//Dependencias
const morgan = require('morgan');
const express = require('express');
const app = express();

//Routes
const user = require('./routes/user');
const login = require('./routes/login');

//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');
const cors = require("./middleware/cors")

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", index);

app.use("/login", login)
app.use(auth);
app.use("/user", user);
app.use(notFound);

app.listen(3000, () => {
    console.log("El servidor se inicio con exito...");
});