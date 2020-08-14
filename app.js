const express = require('express');
const homeRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const expressLayouts = require('express-ejs-layouts');

const app = express();


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs')
//Routes
app.use('/', homeRoutes);
app.use('/users', usersRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("PORT STARTED"));